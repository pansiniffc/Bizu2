import React from 'react';
import styles from './UserHeader.module.css';
import UserHeaderNav from './UserHeaderNav';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const location = useLocation();
  console.log(location);

  return (
    <header className={styles.header}>
      <h1>title</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
