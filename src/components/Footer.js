import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p style={{ textAlign: 'center' }}>
        Bizu © 2023 . Todos os direitos reservados.{' '}
      </p>
    </div>
  );
};

export default Footer;
