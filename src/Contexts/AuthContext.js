import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function userLogin(email, password) {
    try {
      setError(null);
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/conta');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function createLogin(email, password, displayName) {
    try {
      setError(null);
      setLoading(true);
      const userCredencial = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredencial.user;
      await updateProfile(user, {
        displayName: displayName,
      });
      userLogin(email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const logout = useCallback(
    async function logout() {
      setUser(null);
      setError(null);
      setLoading(false);
      signOut(auth);
      navigate('/login');
    },
    [navigate],
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ user, logout, userLogin, loading, error, createLogin }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
