import React from 'react';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Bizu } from '../Assets/Logo.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Bizu - Home">
          <Bizu />
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link className={styles.contato} to="/contato">
              Contato
            </Link>
          </li>
          <li>
            <Link className={styles.login} to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
