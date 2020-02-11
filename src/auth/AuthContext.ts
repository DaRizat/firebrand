import { createContext } from 'react';
import firebase from 'firebase/app';

export type AuthContextProps = {
  auth: firebase.auth.Auth,
  uid?: string,
};

export const AuthContext = createContext<Partial<AuthContextProps>>({});
export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;
