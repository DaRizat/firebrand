export type WhereTuple = [string, firebase.firestore.WhereFilterOp, any];
export type OrderTuple = [string, 'desc'|'asc'|undefined];

export type QueryOptions = {
  where?: WhereTuple[],
  limit?: number,
  startAt?: string|boolean|number|firebase.firestore.DocumentReference,
  startAfter?: string|boolean|number|firebase.firestore.DocumentReference,
  orderBy: OrderTuple[],
};

export interface DataDict { [key: string]: {} };
