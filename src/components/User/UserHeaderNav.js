import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Contexts/AuthContext';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta">Minha conta</NavLink>
      <NavLink to="/conta/dados">Dados</NavLink>
      <button onClick={handleLogout}>Sair</button>
    </nav>
  );
};

export default UserHeaderNav;
