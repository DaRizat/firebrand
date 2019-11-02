import { useContext } from 'react';
import firebase from 'firebase/app';
import { FirebaseContext, FirebaseContextProps } from '../context/FirebaseContext';

const useDatabase = () => {
  const { database: firebase.database.Database } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);
  return database;
};

export default useDatabase;
