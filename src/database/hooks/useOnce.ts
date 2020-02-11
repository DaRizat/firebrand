import { useEffect, useState, useContext } from 'react';
import firebase from 'firebase/app';
import { FirebaseContext, FirebaseContextProps } from '../../app/FirebaseContext';
import { ReadTuple } from '../../types';

function useOnce(
  reference: string,
  event: firebase.database.EventType): ReadTuple {
  const { database } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<object | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (database) {
      setLoading(true);
      database.ref(reference).once(event)
        .then((snap: firebase.database.DataSnapshot) => {
          setLoading(false);
          setData(snap.val());
        })
        .catch((err: firebase.FirebaseError) => {
          setLoading(false);
          setError(err.toString());
        })
    }
  }, [database, reference, event]);

  return [data, loading, error];
}

export default useOnce;
