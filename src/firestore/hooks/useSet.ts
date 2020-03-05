import { useEffect, useState, useContext } from 'react';
import { FirebaseContext, FirebaseContextProps } from '../../app/FirebaseContext';
import { WriteTuple } from '../../types';

function useUpdate(collectionPath: string): WriteTuple {
  const { firestore } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);
  const [loading, setLoading] = useState(false);
  const [func, setFunc] = useState<((id:string, data:object) => void)|undefined>(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if(firestore) {
      let ref:firebase.firestore.CollectionReference = firestore.collection(collectionPath);
      let f = async (docId:string, data:object) => {
        setLoading(true);
        try {
          await ref.doc(docId).set(data);
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

export default useUpdate;

