export type AbsenceReason = 'Ferie' | 'Malattia' | 'Permesso';
export type TimeSlot = string;
export type DayOfWeek = 'Lunedì' | 'Martedì' | 'Mercoledì' | 'Giovedì' | 'Venerdì' | 'Sabato' | 'Domenica';

export interface Request {
  id: string;
  operatorName: string;
  type: AbsenceReason;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  status: 'Approvata' | 'In Attesa' | 'Rifiutata';
}

export interface Absence {
  id: string;
  date: string; // YYYY-MM-DD
  timeSlot: TimeSlot;
  originalTimeSlot?: TimeSlot;
  site: string;
  originalSite?: string;
  reason: AbsenceReason;
  coveredBy: string | null; // Jolly Operator ID
}

export interface Operator {
  id: string;
  name: string;
  type: 'Standard' | 'Jolly' | 'Esterno';
}

export interface SiteSchedule {
  id: string;
  day: DayOfWeek;
  startTime: string; // HH:mm
  endTime: string; // HH:mm
}

export interface Site {
  id: string;
  name: string;
  address: string;
  city: string;
  schedules: SiteSchedule[];
  assignedOperatorId: string | null;
}

export interface JollyOperator {
  id: string;
  name: string;
  order?: number;
}

export interface UserProfile {
  uid: string;
  username: string;
  allowedTabs: ('richieste' | 'malattie' | 'assenze' | 'calendario')[];
  isAdmin: boolean;
}

export interface AppNotification {
  id: string;
  message: string;
  timestamp: string;
  readBy: string[];
}
