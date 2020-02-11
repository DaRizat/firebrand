import React, { useState, FunctionComponent } from 'react';
import firebase from 'firebase/app';
import { FirebaseContext } from './FirebaseContext';

type ProviderProps = {
  children: React.ReactNode,
  value: {
    firebase: firebase.app.App,
    database: firebase.database.Database,
    auth: firebase.auth.Auth,
    firestore: firebase.firestore.Firestore,
  },
}

const Provider = FirebaseContext.Provider;

const FirebaseProvider: FunctionComponent<ProviderProps> = ({ children, value }) => {
  const { firebase, database, auth, firestore } = value;
  const [fb, setFb] = useState<firebase.app.App | undefined>(firebase);
  const [db, setDb] = useState<firebase.database.Database | undefined>(database);
  const [a, setA] = useState<firebase.auth.Auth | undefined>(auth);
  const [fs, setFs] = useState<firebase.firestore.Firestore | undefined>(firestore);

  return (
    <Provider value={{
      firebase: fb,
      setFirebase: setFb,
      auth: a,
      setAuth: setA,
      firestore: fs,
      setFirestore: setFs,
      database: db,
      setDatabase: setDb,
    }}>
      { children }
    </Provider>
  )
};

export default FirebaseProvider;
