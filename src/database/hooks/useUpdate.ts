import { useContext, useState } from 'react';
import { FirebaseContext, FirebaseContextProps } from '../../app/FirebaseContext';
import { WriteTuple } from '../../types';

function useUpdate(reference: string): WriteTuple {
  const { database } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  function write(data: object): void {
    if (database) {
      database.ref(reference).update(
        data,
        (err: Error | null) => {
          setLoading(false);
          setError((err) ? err.toString() : 'An unknown error occurred.');
        }
      );
    }
  }

  return [write, loading, error];
}

export default useUpdate;
