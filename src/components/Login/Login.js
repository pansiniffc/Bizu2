import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import styles from './Login.module.css';
import { UserAuth } from '../../Contexts/AuthContext';

const Login = () => {
  const { user } = UserAuth();
  if (user) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
      </Routes>
    </section>
  );
};

export default Login;
