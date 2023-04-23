import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, id, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        className={styles.input}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
