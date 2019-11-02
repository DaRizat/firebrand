import { useEffect, useState } from 'react';
import firebase from 'firebase/app';

function useQuery(
  query: firebase.database.Reference,
  event: firebase.database.EventType
): readTuple {
  const { database } useContext<Partial<FirebaseContextProps>>(FirebaseContext);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setLoading(true);
    query.on(
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
  }, []);

  return [data, loading, error];
}

export default useQuery;
