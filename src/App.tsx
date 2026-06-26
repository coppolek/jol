/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialRequests, initialAbsences, initialJollyOperators, initialOperators, initialSites } from './data';
import { Absence, Request, JollyOperator, AbsenceReason, Operator, Site, SiteSchedule } from './types';
import { Calendar, CheckSquare, ClipboardList, Clock, RefreshCw, User, XSquare, Users, X, Plus, Trash2, Activity, Building2, ChevronLeft, ChevronRight, LogOut, GripVertical, BarChart3, Mail, MessageSquare, History } from 'lucide-react';
import { cn } from './utils';
import { format, parseISO, startOfWeek, addDays } from 'date-fns';
import { it } from 'date-fns/locale';
import { useFirestoreSync } from './useFirestoreSync';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import Login from './Login';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';

type Tab = 'richieste' | 'malattie' | 'assenze' | 'calendario';

type AppNotification = {
  id: string;
  message: string;
  jollyName: string;
};

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [notifications, setNotifications] = useState<AppNotification[]>([]);

  const triggerNotification = (jollyName: string, siteName: string, dateStr: string, timeSlot: string) => {
    const id = Math.random().toString(36).substr(2, 9);
    const dateFormatted = format(parseISO(dateStr), 'dd/MM/yyyy');
    const message = `Nuovo turno a ${siteName} il ${dateFormatted} (${timeSlot})`;
    setNotifications(prev => [...prev, { id, message, jollyName }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 6000);
  };

  const simulateSMSToJolly = (jolly: JollyOperator, shifts: Absence[]) => {
    if (shifts.length === 0) return;
    const sortedShifts = [...shifts].sort((a, b) => (a.date || '').localeCompare(b.date || ''));
    
    const shiftDetails = sortedShifts.map(s => {
      const dateFormatted = format(parseISO(s.date || ''), 'dd/MM');
      return `${dateFormatted}: ${s.site} (${s.timeSlot})`;
    }).join('\n');

    const id = Math.random().toString(36).substr(2, 9);
    const message = `Pianificazione Settimanale:\n${shiftDetails}`;
    setNotifications(prev => [...prev, { id, message, jollyName: jolly.name }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 8000);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const [activeTab, setActiveTab] = useState<Tab>('calendario');
  const [selectedWeekStart, setSelectedWeekStart] = useState(format(startOfWeek(new Date(), { weekStartsOn: 1 }), 'yyyy-MM-dd'));
  const [assenzeMonth, setAssenzeMonth] = useState(format(new Date(), 'yyyy-MM'));
  const [assenzeWeekStart, setAssenzeWeekStart] = useState<string>('');
  const [requests, setRequests] = useFirestoreSync<Request>('requests', initialRequests);
  const [absences, setAbsences] = useFirestoreSync<Absence>('absences', initialAbsences);
  const [jollyOperators, setJollyOperators] = useFirestoreSync<JollyOperator>('jollyOperators', initialJollyOperators);
  const [operators, setOperators] = useFirestoreSync<Operator>('operators', initialOperators);
  const [sites, setSites] = useFirestoreSync<Site>('sites', initialSites);
  const [isRegistryModalOpen, setIsRegistryModalOpen] = useState(false);
  const [registryTab, setRegistryTab] = useState<'operatori' | 'cantieri'>('operatori');

  useEffect(() => {
    if (!requests || !sites || !operators || !absences) return;

    const computedAbsences: Absence[] = [];
    const approvedRequests = requests.filter(r => r.status === 'Approvata');

    approvedRequests.forEach(req => {
      const op = operators.find(o => o.name === req.operatorName);
      if (!op) return;

      const assignedSites = sites.filter(s => s.assignedOperatorId === op.id);
      if (assignedSites.length === 0) return;

      const start = parseISO(req.startDate);
      const end = parseISO(req.endDate);

      for (let d = start; d <= end; d = addDays(d, 1)) {
        const dayName = format(d, 'EEEE', { locale: it });
        const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);

        assignedSites.forEach(site => {
          site.schedules.forEach(schedule => {
            if (schedule.day === capitalizedDayName) {
              const absenceId = `${req.id}_${site.id}_${format(d, 'yyyy-MM-dd')}_${schedule.id}`;
              computedAbsences.push({
                id: absenceId,
                date: format(d, 'yyyy-MM-dd'),
                timeSlot: `${schedule.startTime} - ${schedule.endTime}`,
                originalTimeSlot: `${schedule.startTime} - ${schedule.endTime}`,
                site: site.name,
                originalSite: site.name,
                reason: req.type,
                coveredBy: null
              });
            }
          });
        });
      }
    });

    let hasChanges = false;
    const newAbsences: Absence[] = [];

    // preserve manual absences
    const manualAbsences = absences.filter(a => a.id.startsWith('manual_'));
    newAbsences.push(...manualAbsences);

    computedAbsences.forEach(ca => {
      const existing = absences.find(a => a.id === ca.id);
      if (existing) {
        // If the timetable in Anagrafica (ca.timeSlot) is different from the original time slot we generated this absence with, it means the Anagrafica was updated.
        // In this case, we MUST override the existing timeSlot with the new Anagrafica timeSlot.
        // Otherwise, we keep the existing.timeSlot (which might have been manually edited).
        const hasOriginal = existing.originalTimeSlot !== undefined;
        const anagraficaTimeChanged = hasOriginal ? existing.originalTimeSlot !== ca.timeSlot : existing.timeSlot !== ca.timeSlot;
        const anagraficaSiteChanged = existing.originalSite !== undefined ? existing.originalSite !== ca.site : existing.site !== ca.site;

        const newTimeSlot = anagraficaTimeChanged ? ca.timeSlot : existing.timeSlot;
        const newSite = anagraficaSiteChanged ? ca.site : existing.site;

        newAbsences.push({ 
          ...ca, 
          coveredBy: existing.coveredBy, 
          site: newSite, 
          timeSlot: newTimeSlot,
          originalTimeSlot: ca.timeSlot,
          originalSite: ca.site
        });
        
        if (existing.reason !== ca.reason || existing.timeSlot !== newTimeSlot || existing.site !== newSite || existing.originalTimeSlot !== ca.timeSlot || existing.originalSite !== ca.site) {
          hasChanges = true;
        }
      } else {
        newAbsences.push(ca);
        hasChanges = true;
      }
    });

    if (absences.length !== newAbsences.length) {
      hasChanges = true;
    }

    if (hasChanges) {
      setAbsences(newAbsences);
    }
  }, [requests, sites, operators, absences]);

  const [expandedSiteId, setExpandedSiteId] = useState<string | null>(null);
  const [showStats, setShowStats] = useState(false);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [draggedJollyRowId, setDraggedJollyRowId] = useState<string | null>(null);
  const [dragOverTarget, setDragOverTarget] = useState<{ type: 'jolly' | 'unassigned', id?: string, date?: string } | null>(null);
  const [calendarioView, setCalendarioView] = useState<'weekly' | 'history'>('weekly');
  
  const [newOperatorName, setNewOperatorName] = useState('');
  const [newOperatorType, setNewOperatorType] = useState<'Standard' | 'Jolly'>('Standard');
  const [newSiteName, setNewSiteName] = useState('');
  const [operatorSearchQuery, setOperatorSearchQuery] = useState('');
  const [siteSearchQuery, setSiteSearchQuery] = useState('');
  const [newSiteAddress, setNewSiteAddress] = useState('');
  const [newSiteCity, setNewSiteCity] = useState('');
  const [jollySearchQuery, setJollySearchQuery] = useState('');
  const [jollyWorkloadFilter, setJollyWorkloadFilter] = useState<'Tutti' | 'Liberi' | 'Critici'>('Tutti');

  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [newRequestOperatorName, setNewRequestOperatorName] = useState('');
  const [newRequestType, setNewRequestType] = useState<AbsenceReason>('Ferie');
  const [newRequestStartDate, setNewRequestStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [newRequestEndDate, setNewRequestEndDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [newRequestStatus, setNewRequestStatus] = useState<'Approvata' | 'In Attesa' | 'Rifiutata'>('In Attesa');
  
  const [confirmAction, setConfirmAction] = useState<{ message: string, onConfirm: () => void } | null>(null);

  const doTimeSlotsOverlap = (slot1: string, slot2: string): boolean => {
    try {
      const parseSlot = (s: string) => {
        const parts = s.split('-').map(p => p.trim());
        if (parts.length === 2) {
          return { start: parts[0], end: parts[1] };
        }
        return null;
      };
      const s1 = parseSlot(slot1);
      const s2 = parseSlot(slot2);
      if (!s1 || !s2) return false; 
      
      const toMins = (t: string) => {
        const [h, m] = t.split(':').map(Number);
        return h * 60 + (m || 0);
      };
      
      const start1 = toMins(s1.start);
      const end1 = toMins(s1.end);
      const start2 = toMins(s2.start);
      const end2 = toMins(s2.end);
      
      if (isNaN(start1) || isNaN(end1) || isNaN(start2) || isNaN(end2)) return false;
      
      return start1 < end2 && end1 > start2;
    } catch(e) {
      return false;
    }
  };

  const calculateHours = (timeSlot: string): number => {
    try {
      const parts = timeSlot.split('-').map(p => p.trim());
      if (parts.length === 2) {
        const toMins = (t: string) => {
          const [h, m] = t.split(':').map(Number);
          return h * 60 + (m || 0);
        };
        const start = toMins(parts[0]);
        const end = toMins(parts[1]);
        if (!isNaN(start) && !isNaN(end) && end > start) {
          return (end - start) / 60;
        }
      }
      return 0;
    } catch(e) {
      return 0;
    }
  };

  const handleAutoAssign = () => {
    const updatedAbsences = [...absences];
    let assignmentsMade = 0;

    const getWeekKey = (dateStr: string) => {
      try {
        return format(startOfWeek(parseISO(dateStr), { weekStartsOn: 1 }), 'yyyy-MM-dd');
      } catch (e) {
        return dateStr;
      }
    };

    const getOperatorHours = (jollyId: string, dateStr: string, absencesList: typeof absences) => {
      let dailyHours = 0;
      let weeklyHours = 0;
      const weekKey = getWeekKey(dateStr);

      absencesList.forEach(a => {
        if (a.coveredBy === jollyId && a.date) {
           const hours = calculateHours(a.timeSlot);
           if (a.date === dateStr) {
             dailyHours += hours;
           }
           if (getWeekKey(a.date) === weekKey) {
             weeklyHours += hours;
           }
        }
      });
      return { dailyHours, weeklyHours };
    };

    const shuffleArray = <T,>(array: T[]) => {
      const newArr = [...array];
      for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
      }
      return newArr;
    };

    updatedAbsences.forEach(absence => {
      if (!absence.coveredBy && absence.date) {
        const absenceHours = calculateHours(absence.timeSlot);
        
        const overlappingJollyIds = updatedAbsences
          .filter(a => a.date === absence.date && a.coveredBy !== null && doTimeSlotsOverlap(a.timeSlot, absence.timeSlot))
          .map(a => a.coveredBy);

        let availableJollies = jollyOperators.filter(j => !overlappingJollyIds.includes(j.id));
        
        availableJollies = availableJollies.filter(j => {
           const { dailyHours, weeklyHours } = getOperatorHours(j.id, absence.date, updatedAbsences);
           return (dailyHours + absenceHours) <= 10 && (weeklyHours + absenceHours) <= 50;
        });

        if (availableJollies.length > 0) {
          availableJollies = shuffleArray(availableJollies);
          
          availableJollies.sort((a, b) => {
            const hA = getOperatorHours(a.id, absence.date, updatedAbsences);
            const hB = getOperatorHours(b.id, absence.date, updatedAbsences);
            
            if (hA.weeklyHours !== hB.weeklyHours) {
              return hA.weeklyHours - hB.weeklyHours;
            }
            return hA.dailyHours - hB.dailyHours;
          });

          const selectedJolly = availableJollies[0];
          absence.coveredBy = selectedJolly.id;
          assignmentsMade++;

          if (absence.site && absence.date) {
            // Introduce a slight delay to stagger notifications if there are many
            setTimeout(() => {
              triggerNotification(selectedJolly.name, absence.site, absence.date, absence.timeSlot);
            }, assignmentsMade * 200);
          }
        }
      }
    });

    if (assignmentsMade > 0) {
      setAbsences(updatedAbsences);
      alert(`Assegnate ${assignmentsMade} coperture automaticamente!`);
    } else {
      alert('Nessuna nuova copertura assegnata. Verifica la disponibilità degli operatori Jolly e i limiti di ore (max 10h/giorno, 50h/settimana).');
    }
  };

  const handleClearAssignments = () => {
    setConfirmAction({
      message: 'Sei sicuro di voler resettare tutte le assegnazioni del calendario?',
      onConfirm: () => {
        const resetAbsences = absences.map(a => ({ ...a, coveredBy: null }));
        setAbsences(resetAbsences);
      }
    });
  };

  const handleAddOperator = () => {
    const name = newOperatorName.trim();
    if (name) {
      if (operators.some(op => op.name.toLowerCase() === name.toLowerCase())) {
        alert('Un operatore con questo nome esiste già.');
        return;
      }
      const newOp: Operator = {
        id: `o${Date.now()}`,
        name: name,
        type: newOperatorType
      };
      setOperators([...operators, newOp]);
      setNewOperatorName('');
      
      if (newOperatorType === 'Jolly') {
        const maxOrder = Math.max(0, ...jollyOperators.map(j => j.order ?? 0));
        setJollyOperators([...jollyOperators, { id: newOp.id, name: newOp.name, order: maxOrder + 1 }]);
      }
    }
  };

  const handleUpdateOperatorName = (id: string, newName: string) => {
    const trimmed = newName.trim();
    if (operators.some(op => op.id !== id && op.name.toLowerCase() === trimmed.toLowerCase())) {
      alert('Un operatore con questo nome esiste già.');
      return;
    }
    setOperators(operators.map(op => op.id === id ? { ...op, name: newName } : op));
    setJollyOperators(jollyOperators.map(op => op.id === id ? { ...op, name: newName } : op));
  };

  const handleDeleteOperator = (id: string) => {
    setConfirmAction({
      message: 'Rimuovere questo operatore? Le coperture assegnate verranno perse.',
      onConfirm: () => {
        setOperators(prev => prev.filter(op => op.id !== id));
        setJollyOperators(prev => prev.filter(op => op.id !== id));
        setAbsences(prev => prev.map(a => a.coveredBy === id ? { ...a, coveredBy: null } : a));
      }
    });
  };

  const handleAddSite = () => {
    const name = newSiteName.trim();
    if (name) {
      if (sites.some(site => site.name.toLowerCase() === name.toLowerCase())) {
        alert('Un cantiere con questo nome esiste già.');
        return;
      }
      const newSite: Site = {
        id: `s${Date.now()}`,
        name: name,
        address: newSiteAddress.trim(),
        city: newSiteCity.trim(),
        schedules: [],
        assignedOperatorId: null
      };
      setSites([...sites, newSite]);
      setNewSiteName('');
      setNewSiteAddress('');
      setNewSiteCity('');
    }
  };

  const handleUpdateSiteName = (id: string, newName: string) => {
    const trimmed = newName.trim();
    if (sites.some(s => s.id !== id && s.name.toLowerCase() === trimmed.toLowerCase())) {
      alert('Un cantiere con questo nome esiste già.');
      return;
    }
    setSites(sites.map(s => s.id === id ? { ...s, name: newName } : s));
  };

  const handleUpdateSiteAddress = (id: string, newAddress: string) => {
    setSites(sites.map(s => s.id === id ? { ...s, address: newAddress } : s));
  };

  const handleUpdateSiteCity = (id: string, newCity: string) => {
    setSites(sites.map(s => s.id === id ? { ...s, city: newCity } : s));
  };

  const handleUpdateSiteAssignedOperator = (id: string, operatorId: string | null) => {
    setSites(sites.map(s => s.id === id ? { ...s, assignedOperatorId: operatorId } : s));
  };

  const handleAddSiteSchedule = (siteId: string) => {
    setSites(sites.map(s => {
      if (s.id === siteId) {
        return {
          ...s,
          schedules: [...s.schedules, { id: `ss${Date.now()}`, day: 'Lunedì', startTime: '08:00', endTime: '16:00' }]
        };
      }
      return s;
    }));
  };

  const handleUpdateSiteSchedule = (siteId: string, scheduleId: string, field: keyof SiteSchedule, value: string) => {
    setSites(sites.map(s => {
      if (s.id === siteId) {
        return {
          ...s,
          schedules: s.schedules.map(ss => ss.id === scheduleId ? { ...ss, [field]: value } : ss)
        };
      }
      return s;
    }));
  };

  const handleDeleteSiteSchedule = (siteId: string, scheduleId: string) => {
    setSites(sites.map(s => {
      if (s.id === siteId) {
        return {
          ...s,
          schedules: s.schedules.filter(ss => ss.id !== scheduleId)
        };
      }
      return s;
    }));
  };

  const handleDeleteSite = (id: string) => {
    setConfirmAction({
      message: 'Rimuovere questo cantiere?',
      onConfirm: () => {
        setSites(prev => prev.filter(s => s.id !== id));
      }
    });
  };

  const handleAddRequest = () => {
    if (newRequestOperatorName.trim()) {
      const newReq: Request = {
        id: `r${Date.now()}`,
        operatorName: newRequestOperatorName.trim(),
        type: newRequestType,
        startDate: newRequestStartDate,
        endDate: newRequestEndDate,
        status: newRequestStatus
      };
      setRequests([...requests, newReq]);
      setIsRequestModalOpen(false);
      setNewRequestOperatorName('');
    }
  };

  const handleDeleteRequest = (id: string) => {
     setConfirmAction({
       message: 'Rimuovere questa richiesta?',
       onConfirm: () => {
         setRequests(prev => prev.filter(req => req.id !== id));
       }
     });
  };

  const handleAssignShift = (absenceId: string, operatorId: string | null, date: string | null) => {
    setAbsences(prev => {
      let notified = false;
      return prev.map(a => {
        if (a.id === absenceId) {
          const updatedDate = date || a.date;
          if (operatorId && operatorId !== a.coveredBy && !notified) {
             const jolly = jollyOperators.find(j => j.id === operatorId);
             if (jolly && a.site && updatedDate) {
               triggerNotification(jolly.name, a.site, updatedDate, a.timeSlot);
               notified = true;
             }
          }
          return { 
            ...a, 
            coveredBy: operatorId, 
            ...(date ? { date } : {}) 
          };
        }
        return a;
      });
    });
  };

  const handleImportFerie = async () => {
    const ferieDaImportare = [
      { start: '2026-06-29', end: '2026-06-30', name: 'MICHALIK ELZBIETA' },
      { start: '2026-06-29', end: '2026-07-03', name: 'NEFZI IBTISSEM' },
      { start: '2026-06-30', end: '2026-06-30', name: 'LEUCCI PAOLA CINZIA' },
      { start: '2026-06-30', end: '2026-06-30', name: 'NERI GIORGIA' },
      { start: '2026-07-03', end: '2026-07-03', name: 'GIUSTI ROBERTO' },
      { start: '2026-07-06', end: '2026-07-12', name: 'SERRA MARIANNA' },
      { start: '2026-07-06', end: '2026-07-11', name: 'DE PASCALIS ANTONELLA' },
      { start: '2026-07-10', end: '2026-07-25', name: 'SPATARO GRAZIELLA' },
      { start: '2026-07-06', end: '2026-07-13', name: 'RONCHI DEBORA' },
      { start: '2026-07-10', end: '2026-07-10', name: 'GIUSTI ROBERTO' },
      { start: '2026-07-10', end: '2026-07-11', name: 'EUSEBI STEFANIA' },
      { start: '2026-07-13', end: '2026-07-14', name: 'CENNI ELISA' },
      { start: '2026-07-15', end: '2026-07-15', name: 'NERI GIORGIA' },
      { start: '2026-07-17', end: '2026-07-17', name: 'GIUSTI ROBERTO' },
      { start: '2026-07-20', end: '2026-08-08', name: 'CHIKI NADIA' },
      { start: '2026-07-27', end: '2026-08-01', name: 'MALECKA ANNA' },
      { start: '2026-07-31', end: '2026-08-02', name: 'MICULESCU GRATIELA' },
      { start: '2026-08-01', end: '2026-08-31', name: 'CIRCAN PETRONELA' },
      { start: '2026-08-03', end: '2026-09-04', name: 'OLARU RODICA' },
      { start: '2026-08-03', end: '2026-08-15', name: 'SCAPECCHI SABRINA' },
      { start: '2026-08-03', end: '2026-08-14', name: 'MICHALIK ELZBIETA' },
      { start: '2026-08-03', end: '2026-08-31', name: 'GIUSTI ROBERTO' },
      { start: '2026-08-06', end: '2026-08-06', name: 'SILVESTRI TABITA' },
      { start: '2026-08-06', end: '2026-08-17', name: 'LEUCCI PAOLA CINZIA' },
      { start: '2026-08-10', end: '2026-08-22', name: "D'AMBROSIO MARIA" },
      { start: '2026-08-10', end: '2026-08-21', name: 'KONIUSZKO AGNIESZKA ANNA' },
      { start: '2026-08-10', end: '2026-08-23', name: 'MIRAKA GELADINA' },
      { start: '2026-08-10', end: '2026-08-25', name: 'ANDOLFI ANNA' },
      { start: '2026-08-10', end: '2026-08-21', name: 'PAZZINI DEBORAH' },
      { start: '2026-08-17', end: '2026-08-30', name: 'EUSEBI STEFANIA' },
      { start: '2026-08-17', end: '2026-08-23', name: 'STEFANELLI SARA' },
      { start: '2026-08-17', end: '2026-08-30', name: 'VITALE MARGHERITA' },
      { start: '2026-08-20', end: '2026-08-21', name: 'SILVESTRI TABITA' },
      { start: '2026-08-27', end: '2026-08-31', name: 'MICULESCU GRATIELA' },
      { start: '2026-09-01', end: '2026-09-15', name: 'SAPIA ANTONELLA' },
      { start: '2026-09-07', end: '2026-09-12', name: 'BUGLI ROBERTA' },
      { start: '2026-09-07', end: '2026-09-28', name: 'PRIFTI ARTA' },
    ];
    const newReqs = ferieDaImportare.map((f, i) => ({
      id: `r${Date.now()}_${i}`,
      operatorName: f.name,
      type: 'Ferie' as AbsenceReason,
      startDate: f.start,
      endDate: f.end,
      status: 'Approvata' as any
    }));
    setRequests([...requests, ...newReqs]);
  };

  const renderRichieste = () => {
    const feriePermessi = requests.filter(req => req.type !== 'Malattia');
    return (
    <>
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2 shrink-0">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <ClipboardList className="w-4 h-4" />
          Foglio 1: Ferie e Permessi
        </h2>
        <div className="flex items-center gap-2">
          <button onClick={handleImportFerie} className="bg-emerald-50 text-emerald-600 hover:bg-emerald-100 px-2 py-1 rounded text-[10px] font-bold transition-colors">Importa Immagine</button>
          <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded font-medium">{feriePermessi.length} In attesa</span>
          <button onClick={() => setIsRequestModalOpen(true)} className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-2 py-1 rounded text-[10px] font-bold flex items-center transition-colors">
            <Plus className="w-3 h-3 mr-1" /> Nuova
          </button>
        </div>
      </div>
      <div className="flex-grow space-y-2 overflow-auto pr-1">
        {feriePermessi.map((req) => (
          <div key={req.id} className={cn("flex items-center justify-between p-2 bg-slate-50 rounded border-l-4", 
              req.type === 'Ferie' ? "border-indigo-400" : "border-slate-400")}>
            <div className="text-xs">
              <div className="font-bold text-slate-700">{req.operatorName}</div>
              <div className="text-slate-500 mt-0.5">
                 {req.type} • {format(parseISO(req.startDate), 'dd/MM')} - {format(parseISO(req.endDate), 'dd/MM')}
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2">
                <span className={cn("text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider", 
                   req.status === 'Approvata' ? "bg-emerald-100 text-emerald-700" : 
                   req.status === 'Rifiutata' ? "bg-rose-100 text-rose-700" : "bg-slate-200 text-slate-600")}>
                   {req.status}
                </span>
                <button onClick={() => handleDeleteRequest(req.id)} className="text-slate-400 hover:text-rose-500 transition-colors">
                   <Trash2 className="w-3 h-3" />
                </button>
              </div>
              <span className="text-[10px] font-mono text-slate-400">ID: {req.id}</span>
            </div>
          </div>
        ))}
        {feriePermessi.length === 0 && (
           <div className="text-xs text-slate-400 italic text-center py-4">Nessuna richiesta di ferie o permessi.</div>
        )}
      </div>
    </>
  )};

  const renderMalattie = () => {
    const malattie = requests.filter(req => req.type === 'Malattia');
    return (
    <>
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2 shrink-0">
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
          <Activity className="w-4 h-4 text-amber-500" />
          Foglio 2: Malattie
        </h2>
        <div className="flex items-center gap-2">
          <span className="bg-amber-50 text-amber-700 text-[10px] px-2 py-0.5 rounded font-medium">{malattie.length} Segnalazioni</span>
          <button onClick={() => setIsRequestModalOpen(true)} className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-2 py-1 rounded text-[10px] font-bold flex items-center transition-colors">
            <Plus className="w-3 h-3 mr-1" /> Nuova
          </button>
        </div>
      </div>
      <div className="flex-grow space-y-2 overflow-auto pr-1">
        {malattie.map((req) => (
          <div key={req.id} className="flex items-center justify-between p-2 bg-slate-50 rounded border-l-4 border-amber-400 opacity-90">
            <div className="text-xs">
              <div className="font-bold text-slate-700">{req.operatorName}</div>
              <div className="text-slate-500 mt-0.5">
                 {req.type} • {format(parseISO(req.startDate), 'dd/MM')} - {format(parseISO(req.endDate), 'dd/MM')}
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2">
                <span className={cn("text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider", 
                   req.status === 'Approvata' ? "bg-emerald-100 text-emerald-700" : 
                   req.status === 'Rifiutata' ? "bg-rose-100 text-rose-700" : "bg-slate-200 text-slate-600")}>
                   {req.status}
                </span>
                <button onClick={() => handleDeleteRequest(req.id)} className="text-slate-400 hover:text-rose-500 transition-colors">
                   <Trash2 className="w-3 h-3" />
                </button>
              </div>
              <span className="text-[10px] font-mono text-slate-400 text-amber-600">Urgente</span>
            </div>
          </div>
        ))}
        {malattie.length === 0 && (
           <div className="text-xs text-slate-400 italic text-center py-4">Nessuna segnalazione di malattia.</div>
        )}
      </div>
    </>
  )};

  const renderAssenze = () => {
    const filteredAbsences = absences.filter(abs => {
      if (abs.coveredBy !== null) return false;
      if (assenzeWeekStart) {
        const start = parseISO(assenzeWeekStart);
        const end = addDays(start, 6);
        const d = parseISO(abs.date);
        return d >= start && d <= end;
      }
      if (assenzeMonth) {
        return abs.date.startsWith(assenzeMonth);
      }
      return true;
    });

    return (
      <>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 border-b border-slate-100 pb-2 shrink-0 gap-2">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
             <CheckSquare className="w-4 h-4" />
             Foglio 3: Copertura Cantieri
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 mr-2 border-r border-slate-100 pr-4">
              <span className="text-[10px] text-slate-500 font-bold uppercase">Mese:</span>
              <input 
                type="month"
                value={assenzeMonth}
                onChange={e => {
                  setAssenzeMonth(e.target.value);
                  setAssenzeWeekStart('');
                }}
                className="text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-2 py-1 focus:outline-none focus:border-indigo-500"
              />
              <span className="text-[10px] text-slate-500 font-bold uppercase ml-2">Settimana:</span>
              <input 
                type="date"
                value={assenzeWeekStart}
                onChange={e => {
                  if (e.target.value) {
                    setAssenzeWeekStart(format(startOfWeek(parseISO(e.target.value), { weekStartsOn: 1 }), 'yyyy-MM-dd'));
                    setAssenzeMonth('');
                  } else {
                    setAssenzeWeekStart('');
                  }
                }}
                className="text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-2 py-1 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => {
                  const newAbsence: Absence = {
                    id: `manual_${Date.now()}`,
                    date: assenzeWeekStart || format(new Date(), 'yyyy-MM-dd'),
                    timeSlot: '08:00 - 12:00',
                    site: 'Nuovo Cantiere',
                    reason: 'Permesso',
                    coveredBy: null
                  };
                  setAbsences([newAbsence, ...absences]);
                }}
                className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-2 py-1 rounded text-[10px] font-bold flex items-center transition-colors"
              >
                <Plus className="w-3 h-3 mr-1" /> Nuova Copertura
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-auto flex-grow pr-1">
          <table className="w-full text-xs">
            <thead className="sticky top-0 bg-white z-10">
              <tr className="text-left text-slate-400">
                <th className="pb-2 font-medium">Data</th>
                <th className="pb-2 font-medium">Cantiere</th>
                <th className="pb-2 font-medium">Fascia / Motivo</th>
                <th className="pb-2 font-medium">Stato</th>
              </tr>
            </thead>
            <tbody 
              className={cn("divide-y divide-slate-100 transition-colors duration-200", dragOverTarget?.type === 'unassigned' && "bg-slate-50")}
              onDragOver={(e) => {
                e.preventDefault();
                if (dragOverTarget?.type !== 'unassigned') setDragOverTarget({ type: 'unassigned' });
              }}
              onDragLeave={(e) => {
                // To avoid flickering, we rely on dragEnd and drop to clear the state, or we can clear if we leave the tbody.
                // Simple approach: we don't clear on leave to avoid child flicker, or we can check relatedTarget.
              }}
              onDrop={(e) => {
                e.preventDefault();
                setDragOverTarget(null);
                setDraggedItem(null);
                const id = e.dataTransfer.getData('absenceId');
                if (id) {
                  handleAssignShift(id, null, null);
                }
              }}
            >
              {filteredAbsences.map((abs) => {
                 const jollyName = abs.coveredBy ? jollyOperators.find(j => j.id === abs.coveredBy)?.name : null;
                 return (
                  <tr 
                    key={abs.id} 
                    className={cn(
                      "transition-all duration-200", 
                      !abs.coveredBy && "cursor-move hover:bg-slate-50/50",
                      draggedItem === abs.id && "opacity-40 bg-indigo-50/50 scale-[0.99] origin-center shadow-sm"
                    )}
                    draggable={!abs.coveredBy}
                    onDragStart={(e) => {
                      if (!abs.coveredBy) {
                        e.dataTransfer.setData('absenceId', abs.id);
                        // Small delay to allow the native drag image to capture the element before we dim it
                        setTimeout(() => setDraggedItem(abs.id), 0);
                      }
                    }}
                    onDragEnd={() => {
                      setDraggedItem(null);
                      setDragOverTarget(null);
                    }}
                  >
                    <td className="py-2 text-slate-500 font-medium">
                      <input 
                        type="date"
                        value={abs.date}
                        onChange={(e) => {
                          const val = e.target.value;
                          setAbsences(prev => prev.map(a => a.id === abs.id ? { ...a, date: val } : a));
                        }}
                        className="bg-transparent border-b border-transparent hover:border-slate-200 focus:border-indigo-500 focus:outline-none w-24 pointer-events-auto"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </td>
                    <td className="py-2 font-bold text-slate-700">
                      <input 
                        type="text"
                        value={abs.site}
                        onChange={(e) => {
                          const val = e.target.value;
                          setAbsences(prev => prev.map(a => a.id === abs.id ? { ...a, site: val } : a));
                        }}
                        className="bg-transparent border-b border-transparent hover:border-slate-200 focus:border-indigo-500 focus:outline-none w-32 pointer-events-auto"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </td>
                    <td className="py-2">
                       <div className="flex items-center gap-1.5 flex-wrap">
                          <input 
                            type="text"
                            value={abs.timeSlot}
                            onChange={(e) => {
                              const val = e.target.value;
                              setAbsences(prev => prev.map(a => a.id === abs.id ? { ...a, timeSlot: val } : a));
                            }}
                            className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium border-none focus:outline-none focus:ring-1 focus:ring-indigo-500 w-24 pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                          />
                          <span className={cn(
                            "px-1.5 py-0.5 inline-flex text-[10px] font-semibold rounded",
                            abs.reason === 'Ferie' ? "bg-indigo-50 text-indigo-600" :
                            abs.reason === 'Malattia' ? "bg-amber-50 text-amber-700" :
                            "bg-slate-100 text-slate-600"
                          )}>
                            {abs.reason}
                          </span>
                       </div>
                    </td>
                    <td className="py-2">
                      <div className="flex items-center justify-between">
                        {jollyName ? (
                          <span className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded text-[10px] font-bold">
                            {jollyName.split(' (')[0]}
                          </span>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded text-[10px] font-bold">
                              Scoperto
                            </span>
                            <GripVertical className="w-3 h-3 text-slate-300" />
                          </div>
                        )}
                        {abs.id.startsWith('manual_') && (
                          <button onClick={() => setAbsences(absences.filter(a => a.id !== abs.id))} className="text-slate-300 hover:text-rose-500 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
              {filteredAbsences.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-slate-400 italic">
                    Nessuna copertura trovata per questo periodo.
                    <br />
                    <span className="text-[10px] mt-2 block">Assicurati di aver assegnato gli operatori ai cantieri nella sezione Anagrafiche.</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </>
    );
  };

  const renderCalendario = () => {
    const monday = parseISO(selectedWeekStart);
    const weekDates = Array.from({ length: 7 }).map((_, i) => format(addDays(monday, i), 'yyyy-MM-dd'));

    const handlePrevWeek = () => {
      setSelectedWeekStart(format(addDays(monday, -7), 'yyyy-MM-dd'));
    };

    const handleNextWeek = () => {
      setSelectedWeekStart(format(addDays(monday, 7), 'yyyy-MM-dd'));
    };

    const handleWeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value) {
        const date = parseISO(e.target.value);
        setSelectedWeekStart(format(startOfWeek(date, { weekStartsOn: 1 }), 'yyyy-MM-dd'));
      }
    };

    const handleJollyRowDragStart = (e: React.DragEvent, id: string) => {
      e.stopPropagation();
      e.dataTransfer.effectAllowed = 'move';
      // Use a transparent image so the drag ghost doesn't obscure the screen too much
      setDraggedJollyRowId(id);
    };

    const handleJollyRowDragOver = (e: React.DragEvent) => {
      if (draggedJollyRowId) {
        e.preventDefault();
      }
    };

    const handleJollyRowDrop = (e: React.DragEvent, targetId: string) => {
      if (!draggedJollyRowId) return;
      e.preventDefault();
      e.stopPropagation();
      
      if (draggedJollyRowId === targetId) {
        setDraggedJollyRowId(null);
        return;
      }

      const sortedJollies = [...jollyOperators].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      const sourceIndex = sortedJollies.findIndex(j => j.id === draggedJollyRowId);
      const targetIndex = sortedJollies.findIndex(j => j.id === targetId);

      if (sourceIndex === -1 || targetIndex === -1) {
        setDraggedJollyRowId(null);
        return;
      }

      const [removed] = sortedJollies.splice(sourceIndex, 1);
      sortedJollies.splice(targetIndex, 0, removed);

      const updatedJollies = sortedJollies.map((j, i) => ({ ...j, order: i }));
      setJollyOperators(updatedJollies);
      setDraggedJollyRowId(null);
    };

    const sortedJollyOperators = [...jollyOperators].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

    const filteredJollies = sortedJollyOperators.filter(jolly => {
      const matchesSearch = jolly.name.toLowerCase().includes(jollySearchQuery.toLowerCase());
      
      let weeklyHours = 0;
      absences.forEach(a => {
        if (a.coveredBy === jolly.id && a.date && weekDates.includes(a.date)) {
          weeklyHours += calculateHours(a.timeSlot);
        }
      });

      if (jollyWorkloadFilter === 'Liberi' && weeklyHours > 0) return false;
      if (jollyWorkloadFilter === 'Critici' && weeklyHours < 50) return false;

      return matchesSearch;
    });

    const chartData = filteredJollies.map(jolly => {
      let weeklyHours = 0;
      absences.forEach(a => {
        if (a.coveredBy === jolly.id && a.date && weekDates.includes(a.date)) {
          weeklyHours += calculateHours(a.timeSlot);
        }
      });
      return {
        name: jolly.name.split(' (')[0],
        ore: weeklyHours
      };
    });

    return (
      <>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 pb-2 border-b-2 border-indigo-50 shrink-0 gap-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-widest flex items-center gap-2">
              <span className="p-1 bg-indigo-50 rounded text-indigo-600">
                <Calendar className="w-4 h-4" />
              </span>
              Foglio 4: Piano di Lavoro
            </h2>
            
            <div className="flex items-center bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setCalendarioView('weekly')}
                className={cn("px-3 py-1 text-xs font-semibold rounded-md transition-colors", calendarioView === 'weekly' ? "bg-white text-indigo-700 shadow-sm" : "text-slate-600 hover:text-slate-900")}
              >
                Settimana
              </button>
              <button
                onClick={() => setCalendarioView('history')}
                className={cn("px-3 py-1 text-xs font-semibold rounded-md transition-colors flex items-center gap-1", calendarioView === 'history' ? "bg-white text-indigo-700 shadow-sm" : "text-slate-600 hover:text-slate-900")}
              >
                <History className="w-3 h-3" /> Storico
              </button>
            </div>
          </div>

          {calendarioView === 'weekly' && (
            <div className="flex items-center gap-2 flex-wrap">
              <select
                value={jollyWorkloadFilter}
                onChange={(e) => setJollyWorkloadFilter(e.target.value as 'Tutti' | 'Liberi' | 'Critici')}
                className="text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              >
                <option value="Tutti">Tutti (Stato)</option>
                <option value="Critici">Critici (≥ 50h)</option>
                <option value="Liberi">Liberi (0h)</option>
              </select>
              <input 
                type="text" 
                placeholder="Cerca operatore..." 
                value={jollySearchQuery}
                onChange={(e) => setJollySearchQuery(e.target.value)}
                className="text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 w-40"
              />
              <button onClick={handlePrevWeek} className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 border border-slate-200 transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <input 
                type="date" 
                value={selectedWeekStart}
                onChange={handleWeekChange}
                className="text-xs text-slate-700 bg-white border border-slate-200 rounded-md px-2 py-1.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-semibold"
              />
              <button onClick={handleNextWeek} className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 border border-slate-200 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setShowStats(!showStats)} 
                className={cn("p-1.5 rounded-md border transition-colors flex items-center gap-1", showStats ? "bg-indigo-50 border-indigo-200 text-indigo-600" : "hover:bg-slate-100 text-slate-500 border-slate-200")}
                title="Mostra Statistiche"
              >
                <BarChart3 className="w-4 h-4" />
              </button>
              <div className="text-[11px] font-mono text-slate-400 hidden lg:block ml-4 border-l border-slate-200 pl-4">Auto-generato tramite VBA</div>
            </div>
          )}

          {calendarioView === 'history' && (
            <div className="flex items-center gap-2 flex-wrap">
              <select
                value={jollySearchQuery}
                onChange={(e) => setJollySearchQuery(e.target.value)}
                className="text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              >
                <option value="">Tutti gli Operatori</option>
                {sortedJollyOperators.map(j => (
                  <option key={j.id} value={j.name}>{j.name}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {calendarioView === 'weekly' ? (
          <>
            {showStats && chartData.length > 0 && (
              <div className="mb-4 h-40 shrink-0 bg-white border border-slate-200 rounded-lg p-4 shadow-sm hidden md:block">
             <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Carico di Lavoro Settimanale (Ore)</div>
             <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                   <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                   <YAxis tick={{ fontSize: 10, fill: '#64748b' }} axisLine={false} tickLine={false} />
                   <Tooltip 
                     cursor={{ fill: '#f1f5f9' }}
                     contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px', padding: '4px 8px' }}
                     formatter={(value: number) => [`${value} ore`, 'Totale']}
                   />
                   <ReferenceLine y={50} stroke="#ef4444" strokeDasharray="3 3" label={{ position: 'insideTopLeft', value: 'Limite (50h)', fill: '#ef4444', fontSize: 10 }} />
                   <Bar dataKey="ore" radius={[4, 4, 0, 0]}>
                     {chartData.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={entry.ore >= 45 ? (entry.ore > 50 ? '#ef4444' : '#f59e0b') : '#6366f1'} />
                     ))}
                   </Bar>
                </BarChart>
             </ResponsiveContainer>
          </div>
        )}

        <div className="flex-grow overflow-auto">
          {weekDates.length === 0 ? (
             <div className="h-full flex items-center justify-center text-slate-400 text-xs italic">Nessun turno assegnato</div>
          ) : (
             <div className="min-w-[600px]">
                {/* Headers */}
                <div className="flex gap-2 mb-2">
                   <div className="w-32 shrink-0 bg-slate-50 flex items-center justify-center font-bold text-slate-400 text-[10px] uppercase border border-slate-200 rounded">Operatore</div>
                   {weekDates.map(date => (
                      <div key={date} className="flex-1 bg-slate-50 p-2 text-center border border-slate-200 rounded">
                         <div className="text-[10px] font-bold text-slate-400 uppercase">
                            {format(parseISO(date), 'EEEE dd', { locale: it })}
                         </div>
                      </div>
                   ))}
                </div>

                {/* Rows for Jolly Operators */}
                <div className="space-y-2 pb-4">
                   {filteredJollies.map(jolly => {
                      const weeklyShifts = absences.filter(a => weekDates.includes(a.date) && a.coveredBy === jolly.id);
                      const weeklyHours = weeklyShifts.reduce((sum, s) => sum + calculateHours(s.timeSlot), 0);

                      return (
                      <div key={jolly.id} className="flex gap-2 min-h-[5rem]">
                         <div 
                           className={cn("w-36 shrink-0 bg-white py-2 pl-4 pr-2 border rounded flex flex-col justify-center relative group transition-colors", draggedJollyRowId === jolly.id ? "opacity-50 border-indigo-400 bg-indigo-50" : "border-slate-200")}
                           draggable
                           onDragStart={(e) => handleJollyRowDragStart(e, jolly.id)}
                           onDragOver={handleJollyRowDragOver}
                           onDrop={(e) => handleJollyRowDrop(e, jolly.id)}
                         >
                            <div className="absolute left-0.5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 cursor-move text-slate-300 hover:text-slate-500 transition-opacity p-1" title="Trascina per riordinare">
                               <GripVertical className="w-3 h-3" />
                            </div>
                            <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5" title={jolly.name}>
                               <div className={cn("w-2 h-2 rounded-full shrink-0", weeklyHours >= 50 ? "bg-red-500" : weeklyHours >= 40 ? "bg-orange-500" : "bg-emerald-500")} title={`${weeklyHours}h / 50h max`} />
                               <span className="truncate">{jolly.name.split(' (')[0]}</span>
                            </div>
                            <div className="text-[9px] text-indigo-500 font-semibold uppercase tracking-tighter mt-0.5">Operatore</div>
                            <div className="mt-1 text-[10px] font-bold text-slate-500">Totale: <span className="text-indigo-600">{weeklyHours}h</span></div>
                            {weeklyShifts.length > 0 && (
                              <button 
                                onClick={() => simulateSMSToJolly(jolly, weeklyShifts)} 
                                className="mt-2 py-1 px-1 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-[9px] font-bold rounded flex items-center justify-center gap-1 transition-colors"
                              >
                                <MessageSquare className="w-3 h-3" /> Invia SMS Turni
                              </button>
                            )}
                         </div>
                         {weekDates.map(date => {
                            const assignedShifts = absences.filter(a => a.date === date && a.coveredBy === jolly.id);
                            const dailyHours = assignedShifts.reduce((sum, s) => sum + calculateHours(s.timeSlot), 0);
                            
                            const isDragOver = dragOverTarget?.type === 'jolly' && dragOverTarget.id === jolly.id && dragOverTarget.date === date;

                            if (assignedShifts.length > 0) {
                               return (
                                  <div 
                                    key={date} 
                                    className={cn(
                                      "flex-1 p-2 border rounded flex flex-col overflow-hidden transition-all duration-200",
                                      "bg-emerald-50 border-emerald-100",
                                      isDragOver && "ring-2 ring-indigo-400 bg-indigo-50/80 shadow-inner scale-[1.02]"
                                    )}
                                    onDragOver={(e) => {
                                      e.preventDefault();
                                      if (!isDragOver) {
                                        setDragOverTarget({ type: 'jolly', id: jolly.id, date });
                                      }
                                    }}
                                    onDrop={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      setDragOverTarget(null);
                                      setDraggedItem(null);
                                      const id = e.dataTransfer.getData('absenceId');
                                      if (id) {
                                        // verify if time overlaps with existing assigned shifts
                                        const draggedAbsence = absences.find(a => a.id === id);
                                        if (draggedAbsence) {
                                          const isSameOperator = draggedAbsence.coveredBy === jolly.id;
                                          const isSameDay = isSameOperator && draggedAbsence.date === date;
                                          const isSameWeek = isSameOperator && weekDates.includes(draggedAbsence.date);
                                          const shiftHours = calculateHours(draggedAbsence.timeSlot);
                                          const newDailyHours = isSameDay ? dailyHours : dailyHours + shiftHours;
                                          const newWeeklyHours = isSameWeek ? weeklyHours : weeklyHours + shiftHours;

                                          if (!e.shiftKey && (newDailyHours > 10 || newWeeklyHours > 50)) {
                                            alert(`Operazione bloccata: l'operatore supererebbe i limiti di ore (10h/giorno, 50h/settimana).\nOre previste: ${newDailyHours}h/giorno, ${newWeeklyHours}h/settimana.\nTieni premuto SHIFT durante il rilascio per forzare l'assegnazione.`);
                                            return;
                                          }

                                          if (draggedAbsence.date !== date && !draggedAbsence.id.startsWith('manual_')) {
                                            setConfirmAction({
                                              message: `Il cantiere è pianificato per il ${format(parseISO(draggedAbsence.date), 'dd/MM')}. Vuoi forzare al ${format(parseISO(date), 'dd/MM')}?`,
                                              onConfirm: () => {
                                                const overlaps = assignedShifts.some(s => s.id !== id && doTimeSlotsOverlap(s.timeSlot, draggedAbsence.timeSlot));
                                                if (overlaps) {
                                                  alert("L'orario si sovrappone con un altro turno già assegnato.");
                                                  return;
                                                }
                                                handleAssignShift(id, jolly.id, date);
                                              }
                                            });
                                            return;
                                          }
                                          const overlaps = assignedShifts.some(s => s.id !== id && doTimeSlotsOverlap(s.timeSlot, draggedAbsence.timeSlot));
                                          if (overlaps) {
                                            alert("L'orario si sovrappone con un altro turno già assegnato.");
                                            return;
                                          }
                                        }
                                        handleAssignShift(id, jolly.id, date);
                                      }
                                    }}
                                  >
                                     <div className="flex-grow space-y-1">
                                       {assignedShifts.map(shift => {
                                          const shiftHours = calculateHours(shift.timeSlot);
                                          const hasOverlap = assignedShifts.some(s => s.id !== shift.id && doTimeSlotsOverlap(s.timeSlot, shift.timeSlot));
                                          return (
                                            <div 
                                              key={shift.id} 
                                              className={cn(
                                                "flex gap-1 p-1 -mx-1 rounded cursor-move transition-all duration-200 group relative", 
                                                hasOverlap ? "border-2 border-rose-500 animate-pulse bg-rose-50" : "hover:bg-emerald-100/50",
                                                draggedItem === shift.id && "opacity-40 bg-indigo-50/50 scale-[0.99] shadow-sm ring-1 ring-indigo-300"
                                              )}
                                              draggable
                                              onDragStart={(e) => {
                                                e.dataTransfer.setData('absenceId', shift.id);
                                                setTimeout(() => setDraggedItem(shift.id), 0);
                                              }}
                                              onDragEnd={() => {
                                                setDraggedItem(null);
                                                setDragOverTarget(null);
                                              }}
                                            >
                                              <div className="flex-grow flex flex-col min-w-0">
                                                <input 
                                                  type="text" 
                                                  value={shift.site} 
                                                  onChange={(e) => {
                                                    const val = e.target.value;
                                                    setAbsences(prev => prev.map(a => a.id === shift.id ? { ...a, site: val } : a));
                                                  }}
                                                  className="text-[10px] font-bold text-emerald-800 bg-transparent border-b border-transparent hover:border-emerald-200 focus:border-emerald-500 focus:outline-none w-full truncate pointer-events-auto"
                                                  title={shift.site}
                                                  onClick={(e) => e.stopPropagation()}
                                                />
                                                <div className="flex items-center justify-between">
                                                  <input 
                                                    type="text" 
                                                    value={shift.timeSlot} 
                                                    onChange={(e) => {
                                                      const val = e.target.value;
                                                      setAbsences(prev => prev.map(a => a.id === shift.id ? { ...a, timeSlot: val } : a));
                                                    }}
                                                    className="text-[9px] text-emerald-600 bg-transparent border-b border-transparent hover:border-emerald-200 focus:border-emerald-500 focus:outline-none w-20 truncate pointer-events-auto"
                                                    onClick={(e) => e.stopPropagation()}
                                                  />
                                                  <span className="text-[9px] font-bold text-emerald-700">{shiftHours}h</span>
                                                </div>
                                              </div>
                                              <GripVertical className="w-3 h-3 text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                                            </div>
                                          )
                                       })}
                                     </div>
                                     <div className="mt-2 pt-1 border-t border-emerald-200/50 text-right text-[10px] font-bold text-emerald-800">
                                       {dailyHours}h
                                     </div>
                                  </div>
                               )
                            } else {
                               return (
                                  <div 
                                    key={date} 
                                    className={cn(
                                      "flex-1 p-2 border rounded transition-all duration-200",
                                      "bg-slate-50 border-slate-200",
                                      isDragOver && "ring-2 ring-indigo-400 bg-indigo-50/80 shadow-inner scale-[1.02]"
                                    )}
                                    onDragOver={(e) => {
                                      e.preventDefault();
                                      if (!isDragOver) {
                                        setDragOverTarget({ type: 'jolly', id: jolly.id, date });
                                      }
                                    }}
                                    onDrop={(e) => {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      setDragOverTarget(null);
                                      setDraggedItem(null);
                                      const id = e.dataTransfer.getData('absenceId');
                                      if (id) {
                                        const draggedAbsence = absences.find(a => a.id === id);
                                        if (draggedAbsence) {
                                          const isSameOperator = draggedAbsence.coveredBy === jolly.id;
                                          const isSameDay = isSameOperator && draggedAbsence.date === date;
                                          const isSameWeek = isSameOperator && weekDates.includes(draggedAbsence.date);
                                          const shiftHours = calculateHours(draggedAbsence.timeSlot);
                                          const newDailyHours = isSameDay ? dailyHours : dailyHours + shiftHours;
                                          const newWeeklyHours = isSameWeek ? weeklyHours : weeklyHours + shiftHours;

                                          if (!e.shiftKey && (newDailyHours > 10 || newWeeklyHours > 50)) {
                                            alert(`Operazione bloccata: l'operatore supererebbe i limiti di ore (10h/giorno, 50h/settimana).\nOre previste: ${newDailyHours}h/giorno, ${newWeeklyHours}h/settimana.\nTieni premuto SHIFT durante il rilascio per forzare l'assegnazione.`);
                                            return;
                                          }

                                          if (draggedAbsence.date !== date && !draggedAbsence.id.startsWith('manual_')) {
                                            setConfirmAction({
                                              message: `Il cantiere è pianificato per il ${format(parseISO(draggedAbsence.date), 'dd/MM')}. Vuoi forzare al ${format(parseISO(date), 'dd/MM')}?`,
                                              onConfirm: () => {
                                                handleAssignShift(id, jolly.id, date);
                                              }
                                            });
                                            return;
                                          }
                                        }
                                        handleAssignShift(id, jolly.id, date);
                                      }
                                    }}
                                  >
                                     <div className="h-full flex items-center justify-center text-[9px] text-slate-300 italic uppercase pointer-events-none">Riposo</div>
                                  </div>
                               )
                            }
                         })}
                      </div>
                   )})}
                </div>
             </div>
          )}
        </div>
        </>
      ) : (
        <div className="flex-grow overflow-auto bg-slate-50/50 rounded-lg border border-slate-200">
           <div className="p-4 space-y-4">
              {sortedJollyOperators
                .filter(jolly => jollySearchQuery ? jolly.name.toLowerCase().includes(jollySearchQuery.toLowerCase()) : true)
                .map(jolly => {
                  const coveredAbsences = absences
                     .filter(a => a.coveredBy === jolly.id && a.date)
                     .sort((a, b) => new Date(b.date || '').getTime() - new Date(a.date || '').getTime());
  
                  if (coveredAbsences.length === 0) return null;
  
                  return (
                    <div key={jolly.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                      <div className="px-4 py-3 bg-indigo-50 border-b border-slate-200 flex items-center justify-between">
                         <div className="font-bold text-sm text-indigo-900 flex items-center gap-2">
                           <User className="w-4 h-4 text-indigo-500" />
                           {jolly.name}
                         </div>
                         <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-500">
                           Totale: {coveredAbsences.length} Turni
                         </div>
                      </div>
                      <div className="divide-y divide-slate-100">
                         {coveredAbsences.map(abs => (
                           <div key={abs.id} className="p-3 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center gap-4">
                             <div className="w-24 shrink-0 flex flex-col">
                               <span className="text-[10px] text-slate-500 font-bold uppercase">{format(parseISO(abs.date || ''), 'EEEE', { locale: it })}</span>
                               <span className="text-sm font-semibold text-slate-700">{format(parseISO(abs.date || ''), 'dd/MM/yyyy')}</span>
                             </div>
                             <div className="w-24 shrink-0 flex items-center gap-1.5 text-slate-600">
                               <Clock className="w-4 h-4 text-slate-400" />
                               <span className="text-sm font-medium">{abs.timeSlot}</span>
                             </div>
                             <div className="flex-grow flex items-center gap-1.5 text-slate-600">
                               <Building2 className="w-4 h-4 text-slate-400" />
                               <span className="text-sm font-medium truncate">{abs.site}</span>
                             </div>
                             <div className="shrink-0 flex items-center gap-2">
                                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                                  {calculateHours(abs.timeSlot)}h
                                </span>
                                {abs.operatorName && (
                                  <span className="text-[10px] text-slate-500 max-w-[120px] truncate block" title={`Sostituiva: ${abs.operatorName}`}>
                                    Sostituzione: {abs.operatorName}
                                  </span>
                                )}
                             </div>
                           </div>
                         ))}
                      </div>
                    </div>
                  );
              })}
              {sortedJollyOperators.filter(jolly => jollySearchQuery ? jolly.name.toLowerCase().includes(jollySearchQuery.toLowerCase()) : true).length === 0 && (
                 <div className="p-8 text-center text-slate-400 text-sm italic">
                   Nessun operatore Jolly trovato per la ricerca.
                 </div>
              )}
           </div>
        </div>
      )}
    </>
  );
};

  if (authLoading) {
    return <div className="h-[100dvh] flex items-center justify-center bg-slate-50"><div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div></div>;
  }

  if (!user) {
    return <Login />;
  }

  return (
    <div className="h-[100dvh] bg-slate-50 flex flex-col p-4 md:p-6 font-sans overflow-hidden">
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-4 md:mb-6 shrink-0 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shrink-0">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 leading-tight">Gestione Turni Jolly</h1>
            <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">Area Riservata</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-3 items-center">
          <div className="hidden md:flex flex-col items-end mr-2 md:mr-4">
            <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-tighter">Status Sincronizzazione</span>
            <span className="text-sm font-semibold text-slate-700 italic">Pronto</span>
          </div>
          <button onClick={() => setIsRegistryModalOpen(true)} className="bg-white border border-slate-200 px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-semibold text-slate-600 flex items-center gap-2 shadow-sm hover:bg-slate-50 transition-colors flex-1 md:flex-none justify-center">
            <Users className="w-4 h-4 text-indigo-500" />
            Anagrafiche
          </button>
          <button onClick={handleClearAssignments} className="bg-white border border-slate-200 px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-semibold text-slate-600 flex items-center gap-2 shadow-sm hover:bg-slate-50 transition-colors flex-1 md:flex-none justify-center">
            <XSquare className="w-4 h-4 text-rose-500" />
            Reset
          </button>
          <button onClick={handleAutoAssign} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 md:px-6 py-2 rounded-md text-xs md:text-sm font-bold shadow-md transition-all flex items-center gap-2 flex-1 md:flex-none justify-center">
            <RefreshCw className="w-4 h-4" />
            ESEGUI MACRO
          </button>
          <button onClick={() => signOut(auth)} className="bg-slate-200 hover:bg-slate-300 border border-slate-300 text-slate-700 px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-bold shadow-sm transition-all flex items-center gap-2 flex-1 md:flex-none justify-center">
            <LogOut className="w-4 h-4" />
            Esci
          </button>
        </div>
      </header>

      {/* Mobile Tabs */}
      <div className="md:hidden flex gap-2 mb-4 overflow-x-auto shrink-0 pb-1 scrollbar-hide">
        <button
          onClick={() => setActiveTab('richieste')}
          className={cn("px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors", activeTab === 'richieste' ? "bg-indigo-100 text-indigo-700" : "bg-white border border-slate-200 text-slate-600")}
        >
          Foglio 1: Richieste
        </button>
        <button
          onClick={() => setActiveTab('malattie')}
          className={cn("px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors", activeTab === 'malattie' ? "bg-indigo-100 text-indigo-700" : "bg-white border border-slate-200 text-slate-600")}
        >
          Foglio 2: Malattie
        </button>
        <button
          onClick={() => setActiveTab('assenze')}
          className={cn("px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors", activeTab === 'assenze' ? "bg-indigo-100 text-indigo-700" : "bg-white border border-slate-200 text-slate-600")}
        >
          Foglio 3: Assenze
        </button>
        <button
          onClick={() => setActiveTab('calendario')}
          className={cn("px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors", activeTab === 'calendario' ? "bg-indigo-100 text-indigo-700" : "bg-white border border-slate-200 text-slate-600")}
        >
          Foglio 4: Calendario
        </button>
      </div>

      <main className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 flex-grow overflow-hidden">
        <div className={cn("md:col-span-3 md:row-span-3 bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex-col overflow-hidden", activeTab === 'richieste' ? 'flex' : 'hidden md:flex')}>
          {renderRichieste()}
        </div>
        <div className={cn("md:col-span-3 md:row-span-3 bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex-col overflow-hidden", activeTab === 'malattie' ? 'flex' : 'hidden md:flex')}>
          {renderMalattie()}
        </div>
        <div className={cn("md:col-span-6 md:row-span-3 bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex-col overflow-hidden", activeTab === 'assenze' ? 'flex' : 'hidden md:flex')}>
          {renderAssenze()}
        </div>
        <div className={cn("md:col-span-12 md:row-span-3 bg-white rounded-xl border-2 border-indigo-200 shadow-lg p-4 flex-col overflow-hidden", activeTab === 'calendario' ? 'flex' : 'hidden md:flex')}>
          {renderCalendario()}
        </div>
      </main>

      <footer className="mt-4 flex justify-between items-center bg-slate-800 text-white p-3 rounded-lg shadow-inner shrink-0 hidden md:flex">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">VBA Debug Mode</span>
          </div>
          <div className="h-4 w-px bg-slate-600"></div>
          <div className="text-[10px] text-slate-400 font-mono">Last execution: successful in 0.84s</div>
        </div>
        <div className="flex gap-2">
           <div className="bg-slate-700 px-3 py-1 rounded text-[10px] border border-slate-600 hover:bg-slate-600 transition-colors cursor-pointer">Esporta in PDF</div>
           <div className="bg-slate-700 px-3 py-1 rounded text-[10px] border border-slate-600 hover:bg-slate-600 transition-colors cursor-pointer">Invia Notifiche SMS</div>
        </div>
      </footer>

      {/* Confirm Modal */}
      {confirmAction && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center p-4 z-[60] backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-sm overflow-hidden flex flex-col p-6">
            <h3 className="font-bold text-slate-800 text-lg mb-2">Conferma azione</h3>
            <p className="text-slate-600 text-sm mb-6">{confirmAction.message}</p>
            <div className="flex justify-end gap-3 mt-auto">
              <button
                onClick={() => setConfirmAction(null)}
                className="px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
              >
                Annulla
              </button>
              <button
                onClick={() => {
                  confirmAction.onConfirm();
                  setConfirmAction(null);
                }}
                className="px-4 py-2 text-sm font-semibold text-white bg-rose-500 rounded-md hover:bg-rose-600 transition-colors shadow-sm"
              >
                Conferma
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Registry Modal */}
      {isRegistryModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[80vh]">
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                Anagrafiche
              </h3>
              <button onClick={() => setIsRegistryModalOpen(false)} className="text-slate-400 hover:text-slate-600 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex px-4 pt-2 gap-4 border-b border-slate-100 bg-white">
               <button
                 onClick={() => setRegistryTab('operatori')}
                 className={cn("py-2 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2", registryTab === 'operatori' ? "border-indigo-500 text-indigo-600" : "border-transparent text-slate-500 hover:text-slate-700")}
               >
                 <Users className="w-4 h-4" /> Operatori
               </button>
               <button
                 onClick={() => setRegistryTab('cantieri')}
                 className={cn("py-2 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2", registryTab === 'cantieri' ? "border-indigo-500 text-indigo-600" : "border-transparent text-slate-500 hover:text-slate-700")}
               >
                 <Building2 className="w-4 h-4" /> Cantieri
               </button>
            </div>

            {registryTab === 'operatori' ? (
              <>
                <div className="p-3 border-b border-slate-100 bg-white">
                  <input
                    type="text"
                    placeholder="Cerca operatore..."
                    value={operatorSearchQuery}
                    onChange={(e) => setOperatorSearchQuery(e.target.value)}
                    className="w-full text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div className="p-4 overflow-y-auto flex-grow space-y-3">
                  {operators
                    .filter(op => op.name.toLowerCase().includes(operatorSearchQuery.toLowerCase()))
                    .map((operator) => (
                    <div key={operator.id} className="flex items-center gap-2">
                      <div className="flex-grow flex items-center gap-2">
                        <input 
                          type="text" 
                          value={operator.name}
                          onChange={(e) => handleUpdateOperatorName(operator.id, e.target.value)}
                          className="flex-grow text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                        />
                        <span className={cn("text-[10px] px-2 py-1 rounded font-bold uppercase tracking-wider shrink-0", operator.type === 'Jolly' ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600")}>
                          {operator.type}
                        </span>
                      </div>
                      <button 
                        onClick={() => handleDeleteOperator(operator.id)}
                        className="p-2 text-rose-500 hover:bg-rose-50 rounded-md transition-colors"
                        title="Rimuovi operatore"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  
                  {operators.length === 0 && (
                    <p className="text-sm text-slate-500 text-center italic py-4">Nessun operatore presente.</p>
                  )}
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50">
                  <div className="flex gap-2">
                    <input 
                      type="text"
                      placeholder="Nuovo operatore..."
                      value={newOperatorName}
                      onChange={(e) => setNewOperatorName(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddOperator()}
                      className="flex-grow text-sm text-slate-700 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                    <select
                      value={newOperatorType}
                      onChange={(e) => setNewOperatorType(e.target.value as 'Standard' | 'Jolly')}
                      className="text-sm text-slate-700 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    >
                      <option value="Standard">Standard</option>
                      <option value="Jolly">Jolly</option>
                    </select>
                    <button 
                      onClick={handleAddOperator}
                      disabled={!newOperatorName.trim()}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors flex items-center gap-1"
                    >
                      <Plus className="w-4 h-4" />
                      Aggiungi
                    </button>
                    
                    <input 
                      type="file" 
                      accept=".csv, .txt" 
                      id="csv-upload" 
                      className="hidden" 
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const text = event.target?.result as string;
                          const lines = text.split('\n');
                          const newOps: Operator[] = [];
                          let skipped = 0;
                          for (let i = 1; i < lines.length; i++) {
                            const line = lines[i].trim();
                            if (!line) continue;
                            const parts = line.split(';');
                            if (parts.length >= 2) {
                              const name = parts[1].replace(/"/g, '').trim();
                              if (name) {
                                const isDuplicate = operators.some(op => op.name.toLowerCase() === name.toLowerCase()) || 
                                                    newOps.some(op => op.name.toLowerCase() === name.toLowerCase());
                                if (isDuplicate) {
                                  skipped++;
                                  continue;
                                }
                                newOps.push({
                                  id: `o${Date.now()}_${i}`,
                                  name,
                                  type: 'Standard'
                                });
                              }
                            }
                          }
                          if (newOps.length > 0) {
                            setConfirmAction({
                              message: `Importare ${newOps.length} operatori?${skipped > 0 ? ` (${skipped} saltati perché duplicati)` : ''}`,
                              onConfirm: () => {
                                setOperators(prev => [...prev, ...newOps]);
                              }
                            });
                          } else if (skipped > 0) {
                            alert(`Nessun operatore importato. ${skipped} operatori saltati perché già esistenti.`);
                          }
                          e.target.value = '';
                        };
                        reader.readAsText(file);
                      }}
                    />
                    <label htmlFor="csv-upload" className="bg-slate-200 text-slate-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-slate-300 transition-colors cursor-pointer flex items-center shrink-0">
                      Importa CSV
                    </label>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="p-3 border-b border-slate-100 bg-white">
                  <input
                    type="text"
                    placeholder="Cerca cantiere..."
                    value={siteSearchQuery}
                    onChange={(e) => setSiteSearchQuery(e.target.value)}
                    className="w-full text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div className="p-4 overflow-y-auto flex-grow space-y-3">
                  {sites
                    .filter(site => site.name.toLowerCase().includes(siteSearchQuery.toLowerCase()) || site.address.toLowerCase().includes(siteSearchQuery.toLowerCase()) || site.city.toLowerCase().includes(siteSearchQuery.toLowerCase()))
                    .map((site) => (
                    <div key={site.id} className="border border-slate-200 rounded-md overflow-hidden bg-white">
                      <div className="flex items-center gap-2 p-2 bg-slate-50 border-b border-slate-100">
                        <div className="flex-grow space-y-2">
                          <input 
                            type="text" 
                            value={site.name}
                            onChange={(e) => handleUpdateSiteName(site.id, e.target.value)}
                            placeholder="Nome Cantiere"
                            className="w-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-md px-3 py-1.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                          />
                          <div className="flex gap-2">
                            <input 
                              type="text" 
                              value={site.address}
                              onChange={(e) => handleUpdateSiteAddress(site.id, e.target.value)}
                              placeholder="Indirizzo"
                              className="w-2/3 text-xs text-slate-700 bg-white border border-slate-200 rounded-md px-2 py-1.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                            />
                            <input 
                              type="text" 
                              value={site.city}
                              onChange={(e) => handleUpdateSiteCity(site.id, e.target.value)}
                              placeholder="Comune"
                              className="w-1/3 text-xs text-slate-700 bg-white border border-slate-200 rounded-md px-2 py-1.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                            />
                          </div>
                        </div>
                        <button 
                          onClick={() => setExpandedSiteId(expandedSiteId === site.id ? null : site.id)}
                          className={cn("px-3 py-1.5 text-xs font-semibold rounded-md transition-colors", expandedSiteId === site.id ? "bg-indigo-100 text-indigo-700" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50")}
                        >
                          {expandedSiteId === site.id ? 'Chiudi' : 'Gestisci'}
                        </button>
                        <button 
                          onClick={() => handleDeleteSite(site.id)}
                          className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-md transition-colors"
                          title="Rimuovi cantiere"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      {expandedSiteId === site.id && (
                        <div className="p-3 bg-white space-y-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Operatore Standard Assegnato</label>
                            <select
                              value={site.assignedOperatorId || ''}
                              onChange={(e) => handleUpdateSiteAssignedOperator(site.id, e.target.value || null)}
                              className="w-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                            >
                              <option value="">Nessun operatore (Scoperto)</option>
                              {operators.filter(o => o.type === 'Standard').map(op => (
                                <option key={op.id} value={op.id}>{op.name}</option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">Fasce Orarie e Giorni</label>
                              <button 
                                onClick={() => handleAddSiteSchedule(site.id)}
                                className="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-2 py-1 rounded text-[10px] font-bold flex items-center transition-colors"
                              >
                                <Plus className="w-3 h-3 mr-1" /> Aggiungi
                              </button>
                            </div>
                            
                            {site.schedules.length === 0 ? (
                               <p className="text-xs text-slate-400 italic">Nessun turno configurato.</p>
                            ) : (
                              <div className="space-y-2">
                                {site.schedules.map(schedule => (
                                  <div key={schedule.id} className="flex items-center gap-2">
                                    <select
                                      value={schedule.day}
                                      onChange={(e) => handleUpdateSiteSchedule(site.id, schedule.id, 'day', e.target.value)}
                                      className="w-32 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:outline-none focus:border-indigo-500"
                                    >
                                      {['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'].map(d => (
                                        <option key={d} value={d}>{d}</option>
                                      ))}
                                    </select>
                                    <input 
                                      type="time" 
                                      value={schedule.startTime}
                                      onChange={(e) => handleUpdateSiteSchedule(site.id, schedule.id, 'startTime', e.target.value)}
                                      className="w-24 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:outline-none focus:border-indigo-500"
                                    />
                                    <span className="text-slate-400 text-xs">-</span>
                                    <input 
                                      type="time" 
                                      value={schedule.endTime}
                                      onChange={(e) => handleUpdateSiteSchedule(site.id, schedule.id, 'endTime', e.target.value)}
                                      className="w-24 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:outline-none focus:border-indigo-500"
                                    />
                                    <button 
                                      onClick={() => handleDeleteSiteSchedule(site.id, schedule.id)}
                                      className="p-1.5 text-rose-400 hover:text-rose-600 transition-colors"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {sites.length === 0 && (
                    <p className="text-sm text-slate-500 text-center italic py-4">Nessun cantiere presente.</p>
                  )}
                </div>

                <div className="p-4 border-t border-slate-100 bg-slate-50">
                  <div className="flex flex-col gap-2">
                    <input 
                      type="text"
                      placeholder="Nome cantiere..."
                      value={newSiteName}
                      onChange={(e) => setNewSiteName(e.target.value)}
                      className="w-full text-sm text-slate-700 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                    />
                    <div className="flex gap-2">
                      <input 
                        type="text"
                        placeholder="Indirizzo..."
                        value={newSiteAddress}
                        onChange={(e) => setNewSiteAddress(e.target.value)}
                        className="w-2/3 text-sm text-slate-700 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                      <input 
                        type="text"
                        placeholder="Comune..."
                        value={newSiteCity}
                        onChange={(e) => setNewSiteCity(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAddSite()}
                        className="w-1/3 text-sm text-slate-700 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="flex gap-2 mt-1">
                      <button 
                        onClick={handleAddSite}
                        disabled={!newSiteName.trim()}
                        className="bg-indigo-600 text-white flex-1 justify-center px-4 py-2 rounded-md text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors flex items-center gap-1"
                      >
                        <Plus className="w-4 h-4" /> Aggiungi Cantiere
                      </button>
                      
                      <input 
                        type="file" 
                        accept=".csv, .txt" 
                        id="csv-upload-sites" 
                        className="hidden" 
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (!file) return;
                          const reader = new FileReader();
                          reader.onload = (event) => {
                            const text = event.target?.result as string;
                            const lines = text.split('\n');
                            const newSites: Site[] = [];
                            let skipped = 0;
                            for (let i = 1; i < lines.length; i++) {
                              const line = lines[i].trim();
                              if (!line) continue;
                              const parts = line.split(';');
                              if (parts.length >= 3) {
                                const name = parts[0].replace(/"/g, '').trim();
                                const address = parts[1].replace(/"/g, '').trim();
                                const city = parts[2].replace(/"/g, '').trim();
                                if (name) {
                                  const isDuplicate = sites.some(s => s.name.toLowerCase() === name.toLowerCase()) ||
                                                      newSites.some(s => s.name.toLowerCase() === name.toLowerCase());
                                  if (isDuplicate) {
                                    skipped++;
                                    continue;
                                  }
                                  newSites.push({
                                    id: `s${Date.now()}_${i}`,
                                    name,
                                    address,
                                    city,
                                    schedules: [],
                                    assignedOperatorId: null
                                  });
                                }
                              }
                            }
                            if (newSites.length > 0) {
                              setConfirmAction({
                                message: `Importare ${newSites.length} cantieri?${skipped > 0 ? ` (${skipped} saltati perché duplicati)` : ''}`,
                                onConfirm: () => {
                                  setSites(prev => [...prev, ...newSites]);
                                }
                              });
                            } else if (skipped > 0) {
                              alert(`Nessun cantiere importato. ${skipped} cantieri saltati perché già esistenti.`);
                            }
                            e.target.value = '';
                          };
                          reader.readAsText(file);
                        }}
                      />
                      <label htmlFor="csv-upload-sites" className="bg-slate-200 text-slate-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-slate-300 transition-colors cursor-pointer flex items-center justify-center shrink-0">
                        Importa CSV
                      </label>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {/* Request Modal */}
      {isRequestModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden flex flex-col max-h-[80vh]">
            <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-indigo-600" />
                Nuova Richiesta
              </h3>
              <button onClick={() => setIsRequestModalOpen(false)} className="text-slate-400 hover:text-slate-600 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 overflow-y-auto flex-grow space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Nominativo Operatore</label>
                <select
                  value={newRequestOperatorName}
                  onChange={(e) => setNewRequestOperatorName(e.target.value)}
                  className="w-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="">Seleziona un operatore...</option>
                  {operators.map(op => (
                    <option key={op.id} value={op.name}>{op.name}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Tipo</label>
                  <select 
                    value={newRequestType}
                    onChange={(e) => setNewRequestType(e.target.value as AbsenceReason)}
                    className="w-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="Ferie">Ferie</option>
                    <option value="Malattia">Malattia</option>
                    <option value="Permesso">Permesso</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Stato</label>
                  <select 
                    value={newRequestStatus}
                    onChange={(e) => setNewRequestStatus(e.target.value as any)}
                    className="w-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="In Attesa">In Attesa</option>
                    <option value="Approvata">Approvata</option>
                    <option value="Rifiutata">Rifiutata</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Data Inizio</label>
                  <input 
                    type="date" 
                    value={newRequestStartDate}
                    onChange={(e) => setNewRequestStartDate(e.target.value)}
                    className="w-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">Data Fine</label>
                  <input 
                    type="date" 
                    value={newRequestEndDate}
                    onChange={(e) => setNewRequestEndDate(e.target.value)}
                    className="w-full text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-2">
              <button 
                onClick={() => setIsRequestModalOpen(false)}
                className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Annulla
              </button>
              <button 
                onClick={handleAddRequest}
                disabled={!newRequestOperatorName.trim()}
                className="bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-indigo-700 transition-colors flex items-center gap-1"
              >
                Salva
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notifications overlay */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
        {notifications.map(n => (
          <div key={n.id} className="p-4 rounded-md shadow-lg border text-sm max-w-sm flex items-start justify-between bg-white text-slate-800 border-slate-200 animate-in slide-in-from-right-8 duration-300">
            <div className="flex gap-3 items-start">
              <div className="mt-0.5 p-1.5 bg-indigo-50 rounded text-indigo-600">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-bold text-xs text-slate-500 uppercase">Notifica a: {n.jollyName}</span>
                <span className="leading-snug whitespace-pre-line">{n.message}</span>
              </div>
            </div>
            <button onClick={() => setNotifications(prev => prev.filter(x => x.id !== n.id))} className="text-slate-400 hover:text-slate-600 ml-4"><X className="w-4 h-4"/></button>
          </div>
        ))}
      </div>
    </div>
  );
}
