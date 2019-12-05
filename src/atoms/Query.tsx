import React, { useContext, useState, useEffect, FC } from 'react';
import { FirebaseContext } from '../context/Firebase';
import { ReadProps } from '../types';
import { buildQueryFromProps } from '../utils/queryUtil';

export interface QueryProps {
  reference: string,
  event: firebase.database.EventType,
  children: (arg0:ReadProps)=>React.ReactNode,
  orderByChild?: string,
  startAt: string | number,
  endAt?: string | number,
  limitToFirst?: number,
  limitToLast?: number,
};

const Query: FC<QueryProps> = (props): any => {
  const { children, event, startAt } = props;
  const { database } = useContext(FirebaseContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [data, setData] = useState<object | undefined>(undefined);

  useEffect(() => {
    if(database) {
      setLoading(true);
      const query = buildQueryFromProps({ database, props });
      query.once(
        event,
        (snap: firebase.database.DataSnapshot) => {
          setLoading(false);
          const results = snap && snap.val();
          setData(results);
        },
        (err: firebase.FirebaseError) => {
          setLoading(false);
          setError(err.toString());
        }
      );
    }
  }, [event, startAt, database, props]);

  return children({ data, loading, error });
};

export default Query;
