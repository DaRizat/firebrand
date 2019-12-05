import firebase from 'firebase/app';
import { ReadTuple } from '../types';
declare function useQuery(query: firebase.database.Reference, event: firebase.database.EventType): ReadTuple;
export default useQuery;
