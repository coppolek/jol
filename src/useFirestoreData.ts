import { useState, useEffect } from 'react';
import { collection, onSnapshot, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Operator, Site, Request, Absence, JollyOperator } from './types';

export function useFirestoreData() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [absences, setAbsences] = useState<Absence[]>([]);
  const [operators, setOperators] = useState<Operator[]>([]);
  const [sites, setSites] = useState<Site[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubs: (() => void)[] = [];

    unsubs.push(onSnapshot(collection(db, 'requests'), (snap) => {
      setRequests(snap.docs.map(d => ({ id: d.id, ...d.data() } as Request)));
    }));
    unsubs.push(onSnapshot(collection(db, 'absences'), (snap) => {
      setAbsences(snap.docs.map(d => ({ id: d.id, ...d.data() } as Absence)));
    }));
    unsubs.push(onSnapshot(collection(db, 'operators'), (snap) => {
      setOperators(snap.docs.map(d => ({ id: d.id, ...d.data() } as Operator)));
    }));
    unsubs.push(onSnapshot(collection(db, 'sites'), (snap) => {
      setSites(snap.docs.map(d => ({ id: d.id, ...d.data() } as Site)));
    }));

    // Hacky wait for initial load
    setTimeout(() => setLoading(false), 1000);

    return () => unsubs.forEach(fn => fn());
  }, []);

  const jollyOperators = operators.filter(op => op.type === 'Jolly').map(op => ({ id: op.id, name: op.name } as JollyOperator));

  const firestoreDb = {
    setRequests: async (newRequests: Request[]) => {
      // In a real app we'd compute diffs, but since we are just migrating simple state:
      // We can just keep local state updated or let onSnapshot do it.
      // Wait, we need the specific modifiers.
    }
  };

  return { requests, absences, operators, sites, jollyOperators, loading };
}
