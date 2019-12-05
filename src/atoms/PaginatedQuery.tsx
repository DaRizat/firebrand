import React, { useContext, useState, useEffect, FC } from 'react';
import { FirebaseContext } from '../context/Firebase';
import { ReadProps } from '../types';
import { buildQueryFromProps } from '../utils/queryUtil';

export interface PaginationProps {
  reference: string,
  event: firebase.database.EventType,
  children: (arg0:ReadProps)=>React.ReactNode,
  startAt: string | number,
}

const PaginatedQuery: FC<PaginationProps> = (props): any => {
  const { reference, event, children, startAt } = props;
}
