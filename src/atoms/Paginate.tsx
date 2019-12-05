import React, { useContext, useEffect, FC } from 'react';
import { QueryContext } from '../context/Firebase';

type PaginationProps = {
  page: number,
  pageSize: number,
  children: React.ReactNode,
};

const Paginate: FC<PaginationProps> = ({ page, pageSize, children }): any => {
  const { currentRef, setCurrentRef } = useContext(QueryContext);

  useEffect(() => {
    if(currentRef && setCurrentRef) {
      const nextRef = currentRef.limitToFirst(pageSize).startAt((page * pageSize));
      setCurrentRef(nextRef);
    }
  }, [page, pageSize]);

  return <>{children}</>;
};

export default React.memo(Paginate);
