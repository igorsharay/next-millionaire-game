import useWindowDimensions from '@/hooks/useWindowDimentions';
import LevelMobImage from '@/images/level-mob.svg';
import LevelImage from '@/images/level.svg';
import React from 'react';
import styles from './LevelItem.module.css';

interface LevelItemProps {
  text: string;
  isActive?: boolean;
  isDisabled?: boolean;
}

const mobBrakePoint = 768;

const LevelItem: React.FC<LevelItemProps> = ({ text, isActive = false, isDisabled = false }) => {
  const { width } = useWindowDimensions();
  const isMobile = width < mobBrakePoint;

  return (
    <div
      className={`${styles.levelItem} ${isActive ? styles.active : ''} ${
        isDisabled ? styles.disabled : ''
      }`}
    >
      {isMobile ? (
        <LevelMobImage className={styles.levelBgImage} />
      ) : (
        <LevelImage className={styles.levelBgImage} />
      )}

      <div className={styles.levelText}>{text}</div>
    </div>
  );
};

export default LevelItem;
