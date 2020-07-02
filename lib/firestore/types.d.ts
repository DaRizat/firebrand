export declare type WhereTuple = [string, firebase.firestore.WhereFilterOp, any];
export declare type OrderTuple = [string, 'desc' | 'asc' | undefined];
export declare type QueryOptions = {
    where?: WhereTuple[];
    limit?: number;
    startAt?: string | boolean | number | firebase.firestore.DocumentReference;
    startAfter?: string | boolean | number | firebase.firestore.DocumentReference;
    orderBy: OrderTuple[];
};
export declare type ReadResult = {
    data: object | string | undefined;
    loading: boolean;
    error: string | undefined;
};
export declare type WriteTuple = [((id: string, data: object) => void), ReadResult];
export declare type LazyTuple = [((opts: QueryOptions) => void), ReadResult];
export declare type AddTuple = [((data: object) => void) | undefined, ReadResult];
export interface DataDict {
    [key: string]: {};
}
