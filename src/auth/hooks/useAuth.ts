import { useContext } from 'react';
import { AuthContext, AuthContextProps } from '../AuthContext';

const useAuth = () => {
  const { auth } = useContext<Partial<AuthContextProps>>(AuthContext);
  return auth;
};

export default useAuth;
