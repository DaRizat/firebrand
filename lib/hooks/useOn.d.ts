import firebase from 'firebase/app';
import { readTuple } from '../types';
declare function useOn(reference: string, event: firebase.database.EventType): readTuple;
export default useOn;
