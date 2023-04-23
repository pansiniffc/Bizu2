import React from 'React';
import {
  useSignInWithEmailAndPassword,
  useCreateUserWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState(null);

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  async function getUser() {
    signInWithEmailAndPassword(emaiil, password);
    setData(user);
  }

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  createUserWithEmailAndPassword(email, password);

  return (
    <UserContext.Provider
      value={{
        signInWithEmailAndPassword,
        createUserWithEmailAndPassword,
        data,
        userLogout,
        error,
        loading,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
