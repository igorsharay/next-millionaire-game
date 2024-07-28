'use client';

import LevelsList from '@/components/LevelsList/LevelsList';
import Question from '@/components/Question/Question';
import useSetGameQuestions from '@/hooks/useSetGameQuestions';
import useWindowDimensions from '@/hooks/useWindowDimentions';
import { useMemo, useState } from 'react';
import ShowLevelsButton from '../ShowLevelsButton/ShowLevelsButton';
import styles from './GameScreen.module.css';

const showLevelsFromWidth = 768;

function GameScreen() {
  const [isShowLevels, setIsShowLevels] = useState(false);
  const { width } = useWindowDimensions();

  useSetGameQuestions();

  const levelsListClasses = `${styles.levelsListContainer} ${
    width <= showLevelsFromWidth ? styles.mobLevelsListContainer : ''
  }`;

  const isRenderLevelsBtn = useMemo(() => width <= showLevelsFromWidth, [width]);

  const isRenderLevels = useMemo(
    () => width > showLevelsFromWidth || isShowLevels,
    [isShowLevels, width],
  );

  return (
    <div className={styles.container}>
      <div className={styles.questionOuterContainer}>
        {isRenderLevelsBtn && (
          <ShowLevelsButton
            isShowLevels={isShowLevels}
            clickHandler={() => setIsShowLevels((prev) => !prev)}
          />
        )}

        <Question />
      </div>
      {isRenderLevels && (
        <div className={levelsListClasses}>
          <LevelsList />
        </div>
      )}
    </div>
  );
}

export default GameScreen;
