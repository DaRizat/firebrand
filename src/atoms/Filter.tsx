import React, { useContext, useEffect, FC } from 'react';
import { QueryContext } from '../context/Firebase';

type FilterProps = {
  startAt: string | number,
  endAt: string | number,
  children: React.ReactNode,
};

const Filter: FC<FilterProps> = ({ startAt, endAt, children }): any => {
  const { currentRef, setCurrentRef } = useContext(QueryContext);

  useEffect(() => {
    if(currentRef && setCurrentRef) {
      const nextRef = currentRef.startAt(startAt).endAt((endAt));
      setCurrentRef(nextRef);
    }
  }, [])

  return <>{children}</>;
};

export default React.memo(Filter);

