import { createContext } from 'react';
import firebase from 'firebase/app';

export type FirebaseContextProps = {
  firebase: firebase.app.App,
  database?: firebase.database.Database,
}

export const FirebaseContext = createContext<Partial<FirebaseContextProps>>({});
export const FirebaseProvider = FirebaseContext.Provider;
export const FirebaseConsumer = FirebaseContext.Consumer;
