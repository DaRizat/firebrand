import { useCallback, useState, useContext } from 'react';
import { FirebaseContext, FirebaseContextProps } from '../../app/FirebaseContext';
import { WriteTuple } from '../../types';

function useUpdate(collectionPath: string): WriteTuple {
  const { firestore } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const ref = firestore ? firestore.collection(collectionPath) : null;

  const updateFn = useCallback((docId: string, data: object) => {
    const update = async () => {
      setLoading(true);
      try {
        if(ref) {
          await ref.doc(docId).update(data)
          setLoading(false);
        }
      } catch(err) {
        setError(err.toString());
        setLoading(false);
      }
    };
    update();
  }, [ref]);
  
  return [updateFn, loading, error];
}

export default useUpdate;
