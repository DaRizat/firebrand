import { useCallback, useState, useContext } from 'react';
import { FirebaseContext, FirebaseContextProps } from '../../app/FirebaseContext';
import { LazyTuple, QueryOptions, DataDict } from '../types';

function useLazyCollection(path: string): LazyTuple {
  const { firestore } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<object | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const get = useCallback((id:string, opts:QueryOptions) => {
    async function fetch() {
      const { where, orderBy, startAt, startAfter, limit } = opts;
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
          const docs:DataDict = {};
          const snap = await ref.get();
          snap.forEach(doc => {
            docs[doc.id] = doc.data();
          })
          const last = snap.docs[snap.docs.length - 1];
          setLoading(false);
          setData({ docs, last });
        } catch(err) {
          setLoading(false);
          setError(err.toString());
        }
      }
    }
    fetch();
  }, [firestore, path]);

  return [get, { data, loading, error }];
}

export default useLazyCollection;
