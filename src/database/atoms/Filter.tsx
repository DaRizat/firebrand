import React, { FC } from 'react';

type FilterProps = {
  startAt: string | number,
  endAt: string | number,
  children: React.ReactNode,
};

const Filter: FC<FilterProps> = ({ startAt, endAt, children }): any => {
  return <>{children}</>;
};

export default React.memo(Filter);
