import { useCallback, useState, useContext } from 'react';
import { FirebaseContext, FirebaseContextProps } from '../../app/FirebaseContext';
import { WriteTuple } from '../types';

function useUpdate(collectionPath: string): WriteTuple {
  const { firestore } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<object | undefined>(undefined);
  const [error, setError] = useState(undefined);

  const setFn = useCallback((docId: string, data:object) => {
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
      f(docId, data);
    }
  }, [collectionPath, firestore]);
  
  return [setFn, { data, loading, error }];
}

export default useUpdate;
