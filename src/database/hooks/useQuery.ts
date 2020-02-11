import { useEffect, useState, useContext } from 'react';
import firebase from 'firebase/app';
import { FirebaseContext, FirebaseContextProps } from '../../app/FirebaseContext';
import { ReadTuple } from '../../types';

function useQuery(
  query: firebase.database.Reference,
  event: firebase.database.EventType,
): ReadTuple {
  const { database } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<object | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if(!query) return;
    setLoading(true);
    query.once(
      event,
      (snap: firebase.database.DataSnapshot) => {
        setLoading(false);
        setData(snap && snap.val());
      },
      (err: firebase.FirebaseError) => {
        setLoading(false);
        setError(err.toString());
      }
    )
  }, [query]);

  return [data, loading, error];
}

export default useQuery;
