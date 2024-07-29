import React, { useMemo, useRef, useState } from 'react';
import useWindowDimentions from '@/hooks/useWindowDimentions';
import LevelsList from '@/components/LevelsList/LevelsList';
import styles from './Levels.module.css';
import LevelsMenuButton from '../LevelsMenuButton/LevelsMenuButton';

const levelsMenuFromWidth = 768;

const Levels = () => {
  const [isOpenLevels, setIsOpenLevels] = useState(false);
  const { width } = useWindowDimentions();
  const hasMenuToggled = useRef(false);

  const isMob = useMemo(() => width <= levelsMenuFromWidth, [width]);

  const mobStyles = useMemo(() => {
    const animation = isOpenLevels ? styles.slideIn : styles.slideOut;

    return isMob
      ? `${styles.mobLevelsListContainer} ${hasMenuToggled.current ? animation : ''}`
      : '';
  }, [isMob, isOpenLevels]);

  const clickMenuHandler = () => {
    hasMenuToggled.current = true;
    setIsOpenLevels((prev) => !prev);
  };

  return (
    <>
      {isMob && <LevelsMenuButton isOpen={isOpenLevels} clickHandler={clickMenuHandler} />}

      <div className={`${styles.levelsListContainer} ${mobStyles}`}>
        <LevelsList />
      </div>
    </>
  );
};

export default Levels;
