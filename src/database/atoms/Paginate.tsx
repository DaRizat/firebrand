import React, { FC } from 'react';

type PaginationProps = {
  page: number,
  pageSize: number,
  children: React.ReactNode,
};

const Paginate: FC<PaginationProps> = ({ page, pageSize, children }): any => {
  return <>{children}</>;
};

export default React.memo(Paginate);
