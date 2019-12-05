import React, { FC } from 'react';
import { ReadProps } from '../types';
export interface QueryProps {
    reference: string;
    event: firebase.database.EventType;
    children: (arg0: ReadProps) => React.ReactNode;
    orderByChild?: string;
    startAt: string | number;
    endAt?: string | number;
    limitToFirst?: number;
    limitToLast?: number;
}
declare const Query: FC<QueryProps>;
export default Query;
