import { Dispatch, SetStateAction } from 'react';

import { createContext } from 'react';
import firebase from 'firebase/app';

export type FirebaseContextProps = {
  firebase: firebase.app.App,
  setFirebase: Dispatch<SetStateAction<firebase.app.App | undefined>>,
  database?: firebase.database.Database,
  setDatabase: Dispatch<SetStateAction<firebase.database.Database | undefined>>,
  firestore?: firebase.firestore.Firestore,
  setFirestore: Dispatch<SetStateAction<firebase.firestore.Firestore | undefined>>,
  auth?: firebase.auth.Auth,
  setAuth: Dispatch<SetStateAction<firebase.auth.Auth | undefined>>,
};

export type QueryContextProps = {
  currentRef: firebase.database.Reference | firebase.database.Query,
  setCurrentRef: Dispatch<SetStateAction<firebase.database.Reference | firebase.database.Query | undefined>>,
};

export const FirebaseContext = createContext<Partial<FirebaseContextProps>>({});
export const QueryContext = createContext<Partial<QueryContextProps>>({});
