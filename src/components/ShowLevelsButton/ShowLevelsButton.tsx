'use client';

import Image from 'next/image';
import React from 'react';
import styles from './ShowLevelsButton.module.css';

interface ShowLevelsButtonProps {
  isShowLevels: boolean;
  clickHandler: () => void;
}

const ShowLevelsButton: React.FC<ShowLevelsButtonProps> = ({ isShowLevels, clickHandler }) => (
  <button type="button" className={styles.menuContainer} onClick={clickHandler}>
    {isShowLevels ? (
      <Image
        className={styles.levelBgImage}
        src="/images/close.svg"
        alt="Close icon"
        width={24}
        height={24}
      />
    ) : (
      <Image
        className={styles.levelBgImage}
        src="/images/menu.svg"
        alt="Menu icon"
        width={24}
        height={24}
      />
    )}
  </button>
);

export default ShowLevelsButton;
