import { useEffect, useState, useContext } from 'react';
import { FirebaseContext, FirebaseContextProps } from '../../app/FirebaseContext';
import { WriteTuple } from '../../types';

function useUpdate(collectionPath: string): WriteTuple {
  const { firestore } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);
  const [loading, setLoading] = useState(false);
  const [func, setFunc] = useState(():any => {});
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if(firestore) {
      let ref:firebase.firestore.CollectionReference = firestore.collection(collectionPath);
      const updateFunc = (docId: string, data: object) => {
        setLoading(true);
        ref.doc(docId).update(data)
          .then(() => {
            setLoading(false);
          })
          .catch(err => {
            setError(err.toString());
            setLoading(false);
          })
      };
      setFunc((id:string, data:object) => updateFunc(id, data));
    }
  }, [collectionPath, firestore]);
  
  return [func, loading, error];
}

export default useUpdate;
