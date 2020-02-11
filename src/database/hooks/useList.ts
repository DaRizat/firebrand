import { useEffect, useState } from 'react';
import { ReadTuple } from '../../types';

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

  const [loading] = useState(false);
  const [data] = useState<object | undefined>(undefined);
  const [error] = useState<string | undefined>(undefined);

  useEffect(()  => {
  
  }, [ref, eventType, orderFunction, orderByChildKey, paginate, pageSize, page])

  return [data, loading, error];
}

export default useList;
