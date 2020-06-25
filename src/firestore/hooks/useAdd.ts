import { useCallback, useState, useContext } from 'react';
import { FirebaseContext, FirebaseContextProps } from '../../app/FirebaseContext';
import { AddTuple } from '../types';

function useAdd(collectionPath: string): AddTuple {
  const { firestore } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<object | undefined>(undefined);
  const [error, setError] = useState(undefined);

  const addFn = useCallback((data:object) => {
    if(firestore) {
      let ref:firebase.firestore.CollectionReference = firestore.collection(collectionPath);
      const f = async (data: object) => {
        setLoading(true);
        try {
          await ref.add(data);
          setLoading(false);
        } catch (err) {
          setLoading(false);
          setError(err.toString());
        }
      }
      f(data);
   }
  }, [collectionPath, firestore]);

  return [addFn, { data, loading, error }];
}

export default useAdd;
