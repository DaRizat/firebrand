import { ReadTuple } from '../../types';
declare type ListOptions = {
    ref: string;
    eventType: string;
    orderFunction?: string;
    orderByChildKey?: string;
    paginate?: boolean;
    pageSize?: number;
    page?: number;
};
declare function useList(options: ListOptions): ReadTuple;
export default useList;
