export declare type WhereTuple = [string, firebase.firestore.WhereFilterOp, any];
export declare type OrderTuple = [string, 'desc' | 'asc' | undefined];
export declare type QueryOptions = {
    where?: WhereTuple[];
    limit?: number;
    startAt?: string | boolean | number | firebase.firestore.DocumentReference;
    startAfter?: string | boolean | number | firebase.firestore.DocumentReference;
    orderBy: OrderTuple[];
};
export interface DataDict {
    [key: string]: {};
}
