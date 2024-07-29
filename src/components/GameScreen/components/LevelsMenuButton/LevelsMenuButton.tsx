'use client';

import Image from 'next/image';
import React from 'react';
import styles from './LevelsMenuButton.module.css';

interface LevelsMenuButtonProps {
  isOpen: boolean;
  clickHandler: () => void;
}

const LevelsMenuButton: React.FC<LevelsMenuButtonProps> = ({ isOpen, clickHandler }) => (
  <button type="button" className={styles.menuContainer} onClick={clickHandler}>
    {isOpen ? (
      <Image
        className={styles.icon}
        src="/images/close.svg"
        alt="Close icon"
        width={24}
        height={24}
      />
    ) : (
      <Image
        className={styles.icon}
        src="/images/menu.svg"
        alt="Menu icon"
        width={24}
        height={24}
      />
    )}
  </button>
);

export default LevelsMenuButton;
