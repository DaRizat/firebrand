import React from 'react';
import { ReadProps } from '../types';
export interface PaginationProps {
    reference: string;
    event: firebase.database.EventType;
    children: (arg0: ReadProps) => React.ReactNode;
    startAt: string | number;
}
