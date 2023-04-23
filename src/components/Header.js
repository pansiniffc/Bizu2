import React from 'react';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Bizu } from '../Assets/Logo.svg';
import { UserAuth } from '../Contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Bizu - Home">
          <Bizu />
        </Link>
        {user ? (
          <Link className={styles.login} to="/conta">
            {user.email}
            <button onClick={handleLogout}>Sair</button>
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
