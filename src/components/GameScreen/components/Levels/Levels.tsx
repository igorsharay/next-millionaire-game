import React, { useMemo } from 'react';
import LevelsList from '@/components/LevelsList/LevelsList';
import useLevelsMenu from '@/hooks/useLevelsMenu';
import styles from './Levels.module.css';

const Levels = () => {
  const { isMob, isOpenLevels, hasLevelsToggled, renderLevelsMenuButton } = useLevelsMenu();

  const mobStyles = useMemo(() => {
    const animation = isOpenLevels ? styles.slideIn : styles.slideOut;

    return isMob ? `${styles.mobLevelsListContainer} ${hasLevelsToggled ? animation : ''}` : '';
  }, [isMob, isOpenLevels, hasLevelsToggled]);

  return (
    <>
      {renderLevelsMenuButton}

      <div className={`${styles.levelsListContainer} ${mobStyles}`}>
        <LevelsList />
      </div>
    </>
  );
};

export default Levels;
