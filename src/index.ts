import { FirebaseContext, FirebaseConsumer, FirebaseProvider } from './context/Firebase';
import firebaseConfig from './config/firebase';
import useDatabase from './hooks/useDatabase';
import useOn from './hooks/useOn';
import useOnce from './hooks/useOn';
import useQuery from './hooks/useQuery';
import useUpdate from './hooks/useUpdate';

export {
  firebaseConfig,
  FirebaseContext,
  FirebaseConsumer,
  FirebaseProvider,
  useDatabase,
  useOn,
  useOnce,
  useUpdate,
  useQuery,
};
