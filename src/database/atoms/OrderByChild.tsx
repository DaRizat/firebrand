import React, { FC } from 'react';

type OrderProps = {
  childKey: string,
  children: React.ReactNode,
};

const OrderByChild: FC<OrderProps> = ({ childKey, children }): any => {
  return <>{children}</>;
};

export default React.memo(OrderByChild);
