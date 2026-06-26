import { useState, useEffect } from 'react';
import { collection, onSnapshot, doc, writeBatch } from 'firebase/firestore';
import { db } from './firebase';

export function useFirestoreSync<T extends { id: string }>(collectionName: string, initialData: T[]) {
  const [data, setData] = useState<T[]>(initialData);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, collectionName), (snap) => {
      const isSeeded = localStorage.getItem(`seeded_${collectionName}`);
      if (snap.empty && !isSeeded) {
         const colRef = collection(db, collectionName);
         const commitInitialBatches = async () => {
           for (let i = 0; i < initialData.length; i += 400) {
             const chunk = initialData.slice(i, i + 400);
             const batch = writeBatch(db);
             chunk.forEach(item => {
               const cleanItem = JSON.parse(JSON.stringify(item));
               batch.set(doc(colRef, item.id), cleanItem);
             });
             await batch.commit().catch(console.error);
           }
           localStorage.setItem(`seeded_${collectionName}`, 'true');
         };
         commitInitialBatches();
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
      
      const colRef = collection(db, collectionName);
      const prevMap = new Map<string, T>(prevData.map(item => [item.id, item]));
      
      const operations: { type: 'set' | 'update' | 'delete', id: string, data?: any }[] = [];

      newData.forEach(item => {
        const cleanItem = JSON.parse(JSON.stringify(item));
        const prevItem = prevMap.get(item.id);
        
        if (!prevItem) {
          operations.push({ type: 'set', id: item.id, data: cleanItem });
        } else if (JSON.stringify(cleanItem) !== JSON.stringify(prevItem)) {
          operations.push({ type: 'update', id: item.id, data: cleanItem });
        }
        prevMap.delete(item.id);
      });
      
      prevMap.forEach((_, id) => {
        operations.push({ type: 'delete', id });
      });

      const commitBatches = async () => {
        for (let i = 0; i < operations.length; i += 400) {
          const chunk = operations.slice(i, i + 400);
          const batch = writeBatch(db);
          chunk.forEach(op => {
            if (op.type === 'set') batch.set(doc(colRef, op.id), op.data);
            else if (op.type === 'update') batch.update(doc(colRef, op.id), op.data);
            else if (op.type === 'delete') batch.delete(doc(colRef, op.id));
          });
          await batch.commit().catch(console.error);
        }
      };

      commitBatches();
      
      return newData;
    });
  };

  return [data, setSyncedData] as const;
}
