import { useEffect, useState, useContext } from 'react';
import { FirebaseContext, FirebaseContextProps } from '../../app/FirebaseContext';
import { ReadTuple } from '../../types';

function useDocument(path: string): ReadTuple {
  const { firestore } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<object | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function fetch() {
      if (firestore) {
        setLoading(true);
        const ref = firestore.doc(path);
        try {
          const snap = await ref.get();
          setLoading(false);
          setData(snap && snap.data());
        } catch (err) {
          setLoading(false);
          setError(err.toString());
        }
      }
    }
    fetch();
  }, [path, firestore])

  return [data, loading, error];
}

export default useDocument;

