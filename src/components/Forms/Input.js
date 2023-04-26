import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name, value, id, error, onChange, onBlur }) => {
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
        onBlur={onBlur}
      />
      {{ error } && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
