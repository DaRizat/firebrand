import firebase from 'firebase/app';
import { ReadTuple } from '../../types';
declare function useOnce(reference: string, event: firebase.database.EventType): ReadTuple;
export default useOnce;
