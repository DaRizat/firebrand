import { useEffect, useState, useContext } from 'react';
import firebase from 'firebase/app';
import { FirebaseContext, FirebaseContextProps } from '../context/Firebase';
import { ReadTuple } from '../types';

function useOn(
  reference: string,
  event: firebase.database.EventType): ReadTuple {
  const { database } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<object | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (database) {
      setLoading(true);
      const off = database.ref(reference).on(
        event,
        (snap: firebase.database.DataSnapshot) => {
          setLoading(false);
          setData(snap && snap.val());
        },
        (err: firebase.FirebaseError) => {
          setLoading(false);
          setError(err.toString());
        }
      );
      return () => off(null);
    }
  }, [database, reference, event]);

  return [data, loading, error];
}

export default useOn;

