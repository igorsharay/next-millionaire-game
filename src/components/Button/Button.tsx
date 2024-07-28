import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  clickHandler?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, clickHandler }) => (
  <button onClick={clickHandler} className={styles.btn}>
    {children}
  </button>
);

export default Button;
