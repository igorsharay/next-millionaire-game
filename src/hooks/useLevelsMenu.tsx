import { useEffect, useMemo, useRef, useState } from 'react';
import LevelsMenuButton from '@/components/GameScreen/components/LevelsMenuButton/LevelsMenuButton';
import useWindowDimentions from './useWindowDimentions';

const levelsMenuFromWidth = 768;

const useLevelsMenu = () => {
  const [isOpenLevels, setIsOpenLevels] = useState(false);
  const hasLevelsToggled = useRef(false);
  const { width } = useWindowDimentions();

  const isMob = useMemo(() => width <= levelsMenuFromWidth, [width]);

  const clickMenuHandler = () => {
    hasLevelsToggled.current = true;
    setIsOpenLevels((prev) => !prev);
  };

  const renderLevelsMenuButton = isMob && (
    <LevelsMenuButton isOpen={isOpenLevels} clickHandler={clickMenuHandler} />
  );

  useEffect(() => {
    if (!isMob) {
      hasLevelsToggled.current = false;
    }
  }, [isMob]);

  return {
    isMob,
    isOpenLevels,
    hasLevelsToggled: hasLevelsToggled.current,
    renderLevelsMenuButton,
  };
};

export default useLevelsMenu;
