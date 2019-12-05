import { useEffect, useState, useContext } from 'react';
import { FirebaseContext, FirebaseContextProps } from '../context/Firebase';
import { ReadTuple } from '../types';

type ListOptions = {
  ref: string,
  eventType: string,
  orderFunction?: string,
  orderByChildKey?: string,
  paginate?: boolean,
  pageSize?: number,
  page?: number,
};

function useList(options: ListOptions): ReadTuple {
  const { ref, eventType, orderFunction, orderByChildKey, paginate, pageSize, page } = options;
  const { database } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<object | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(()  => {
  
  }, [ref, eventType, orderFunction, orderByChildKey, paginate, pageSize, page])

  return [data, loading, error];
}
