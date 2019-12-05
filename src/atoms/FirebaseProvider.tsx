import React, { useState, FunctionComponent } from 'react';
import firebase from 'firebase/app';
import { FirebaseContext, QueryContext } from '../context/Firebase';

type ProviderProps = {
  children: React.ReactNode,
  value: {
    firebase: firebase.app.App,
    database: firebase.database.Database,
  },
}

const Provider = FirebaseContext.Provider;
const QueryProvider = QueryContext.Provider;

const FirebaseProvider: FunctionComponent<ProviderProps> = ({ children, value }) => {
  const { firebase, database } = value;
  const [fb, setFb] = useState<firebase.app.App | undefined>(firebase);
  const [db, setDb] = useState<firebase.database.Database | undefined>(database);
  const [currentRef, setCurrentRef] = useState<firebase.database.Reference | firebase.database.Query | undefined>();

  return (
    <Provider value={{ firebase: fb, setFirebase: setFb, database: db, setDatabase: setDb }}>
      <QueryProvider value={{ currentRef, setCurrentRef }}>
        { children }
      </QueryProvider>
    </Provider>
  )
};

export default FirebaseProvider;
