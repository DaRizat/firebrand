import { useEffect, useState, useContext } from 'react';
import { FirebaseContext, FirebaseContextProps } from '../../app/FirebaseContext';
import { AddTuple } from '../../types';

function useAdd(collectionPath: string): AddTuple {
  const { firestore } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);
  const [loading, setLoading] = useState(false);
  const [func, setFunc] = useState(():any => {});
  const [error, setError] = useState(undefined);

  useEffect(() => {
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
      setFunc(f);
   }
  }, [collectionPath, firestore]);

  return [func, loading, error];
}

export default useAdd;
