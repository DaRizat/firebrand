export type WhereTuple = [string, firebase.firestore.WhereFilterOp, any];
export type OrderTuple = [string, 'desc'|'asc'|undefined];

export type QueryOptions = {
  where?: WhereTuple[],
  limit?: number,
  startAt?: string|boolean|number|firebase.firestore.DocumentReference,
  startAfter?: string|boolean|number|firebase.firestore.DocumentReference,
  orderBy: OrderTuple[],
};

export type ReadResult = {
  data:object | string | undefined,
  loading: boolean,
  error: string | undefined,
};

export type WriteTuple = [((id:string, data:object) => void), ReadResult];
export type LazyTuple = [((opts:QueryOptions) => void), ReadResult];
export type AddTuple = [((data:object) => void)|undefined, ReadResult];

export interface DataDict { [key: string]: {} };
