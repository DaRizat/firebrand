import { useContext } from 'react';
import firebase from 'firebase/app';
import { FirebaseContext, FirebaseContextProps } from '../context/Firebase';

const useDatabase = () => {
  const { database } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);
  return database;
};

export default useDatabase;
