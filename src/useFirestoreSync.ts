import { useState, useEffect } from 'react';
import { collection, onSnapshot, doc, writeBatch } from 'firebase/firestore';
import { db } from './firebase';

export function useFirestoreSync<T extends { id: string }>(collectionName: string, initialData: T[]) {
  const [data, setData] = useState<T[]>(initialData);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, collectionName), (snap) => {
      const isSeeded = localStorage.getItem(`seeded_${collectionName}`);
      if (snap.empty && !isSeeded) {
         const batch = writeBatch(db);
         const colRef = collection(db, collectionName);
         initialData.forEach(item => {
           // Sanitize item for Firestore (remove undefined)
           const cleanItem = JSON.parse(JSON.stringify(item));
           batch.set(doc(colRef, item.id), cleanItem);
         });
         batch.commit().then(() => {
           localStorage.setItem(`seeded_${collectionName}`, 'true');
         }).catch(console.error);
      } else {
         const docs = snap.docs.map(d => ({ id: d.id, ...d.data() } as T));
         // Optional: sort by id or something to keep order stable if needed
         setData(docs);
         if (!isSeeded) {
             localStorage.setItem(`seeded_${collectionName}`, 'true');
         }
      }
    });
    return unsub;
  }, [collectionName]);

  const setSyncedData = (newDataOrUpdater: T[] | ((prev: T[]) => T[])) => {
    setData((prevData) => {
      const newData = typeof newDataOrUpdater === 'function' ? newDataOrUpdater(prevData) : newDataOrUpdater;
      
      const batch = writeBatch(db);
      const colRef = collection(db, collectionName);
      
      const prevMap = new Map<string, T>(prevData.map(item => [item.id, item]));
      
      newData.forEach(item => {
        const cleanItem = JSON.parse(JSON.stringify(item));
        const prevItem = prevMap.get(item.id);
        
        if (!prevItem) {
          batch.set(doc(colRef, item.id), cleanItem);
        } else if (JSON.stringify(cleanItem) !== JSON.stringify(prevItem)) {
          batch.update(doc(colRef, item.id), cleanItem);
        }
        prevMap.delete(item.id);
      });
      
      prevMap.forEach((_, id) => {
        batch.delete(doc(colRef, id));
      });
      
      batch.commit().catch(console.error);
      
      return newData;
    });
  };

  return [data, setSyncedData] as const;
}
