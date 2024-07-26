import LevelImage from '@/images/level.svg';
import React from 'react';
import styles from './LevelItem.module.css';

interface LevelItemProps {
  text: string;
  isActive?: boolean;
  isDisabled?: boolean;
}

const LevelItem: React.FC<LevelItemProps> = ({ text, isActive = false, isDisabled = false }) => (
  <div
    className={`${styles.levelItem} ${isActive ? styles.active : ''} ${
      isDisabled ? styles.disabled : ''
    }`}
  >
    <LevelImage className={styles.levelBgImage} />
    <div className={styles.levelText}>{text}</div>
  </div>
);

export default LevelItem;
