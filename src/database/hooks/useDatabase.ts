import { useContext } from 'react';
import { FirebaseContext, FirebaseContextProps } from '../../app/FirebaseContext';

const useDatabase = () => {
  const { database } = useContext<Partial<FirebaseContextProps>>(FirebaseContext);
  return database;
};

export default useDatabase;
