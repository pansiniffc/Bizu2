import React from 'react';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Bizu } from '../Assets/Logo.svg';
import { UserAuth } from '../Contexts/AuthContext';

const Header = () => {
  const { user, logout } = UserAuth();

  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Bizu - Home">
          <Bizu />
        </Link>
        {user ? (
          <Link className={styles.login} to="/conta">
            {user.displayName}
            <button onClick={logout}>Sair</button>
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
