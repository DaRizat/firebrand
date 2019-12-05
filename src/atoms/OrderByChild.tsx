import React, { useContext, useEffect, FC } from 'react';
import { QueryContext } from '../context/Firebase';

type OrderProps = {
  childKey: string,
  children: React.ReactNode,
};

const OrderByChild: FC<OrderProps> = ({ childKey, children }): any => {
  const { currentRef, setCurrentRef } = useContext(QueryContext);

  useEffect(() => {
    if(currentRef && setCurrentRef) {
      const nextRef = currentRef.orderByChild(childKey);
      setCurrentRef(nextRef);
    }
  }, [])

  return <>{children}</>;
};

export default React.memo(OrderByChild);
