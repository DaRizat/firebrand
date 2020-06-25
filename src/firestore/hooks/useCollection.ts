import { useEffect, useState, useContext } from 'react';
import { FirebaseContext, FirebaseContextProps } from '../../app/FirebaseContext';
import { ReadResult, QueryOptions, DataDict } from '../types';

function useCollection(path: string, opts: QueryOptions): ReadResult {
  const { firestore } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);
  const { where, orderBy, startAt, startAfter, limit } = opts;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<object | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const handleSnap = (snap:firebase.firestore.QuerySnapshot) => {
    const docs:DataDict = {};
    snap.forEach(doc => {
      docs[doc.id] = doc.data();
    })
    const last = snap.docs[snap.docs.length - 1];
    setData({ docs, last });
    setLoading(false);
  }

  useEffect(() => {
    async function fetch() {
      if (firestore) {
        setLoading(true);
        let ref:firebase.firestore.Query = firestore.collection(path);
        if(where) {
          where.forEach(w => {
            ref = ref.where(w[0], w[1], w[2]);
          })
        } 
        if(orderBy) {
          orderBy.forEach((o: any) => {
            ref = ref.orderBy(o[0], o[1]);
          })
        }
        if(limit) ref = ref.limit(limit);
        if(startAt) ref = ref.startAt(startAt);
        if(startAfter) ref = ref.startAfter(startAfter);
        try {
          const snap = await ref.get();
          handleSnap(snap)
          return ref.onSnapshot(handleSnap);
        } catch(err) {
          setLoading(false);
          setError(err.toString());
        }
      }
    }
    fetch();
  }, [where, orderBy, startAt, startAfter, limit, path, firestore])

  return { data, loading, error };
}

export default useCollection;
