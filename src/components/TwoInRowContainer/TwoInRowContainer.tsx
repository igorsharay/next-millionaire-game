import React from 'react';
import styles from './TwoInRowContainer.module.css';

interface TwoInRowContainerProps {
  left: React.ReactNode;
  right: React.ReactNode;
  backgroundClass?: string;
}

const TwoInRowContainer: React.FC<TwoInRowContainerProps> = ({
  left,
  right,
  backgroundClass = '',
}) => (
  <div className={`${styles.container} ${backgroundClass}`}>
    <div className={styles.half}>{left}</div>
    <div className={styles.half}>{right}</div>
  </div>
);

export default TwoInRowContainer;
