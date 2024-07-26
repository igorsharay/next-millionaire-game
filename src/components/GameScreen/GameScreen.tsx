'use client';

import AnswersList from '@/components/AnswersList/AnswersList';
import LevelsList from '@/components/LevelsList/LevelsList';
import { useGame } from '@/context/GameContext';
import useSetGameQuestions from '@/hooks/useSetGameQuestions';
import useWindowDimensions from '@/hooks/useWindowDimentions';
import { useState } from 'react';
import ShowLevelsButton from '../ShowLevelsButton/ShowLevelsButton';
import styles from './GameScreen.module.css';

const showLevelsFromWidth = 1024;

function GameScreen() {
  const [isShowLevels, setIsShowLevels] = useState(false);
  const { width } = useWindowDimensions();
  const { gameQuestions, currentLevel } = useGame();

  useSetGameQuestions();

  return (
    <div className={styles.container}>
      <div className={styles.questionOuterContainer}>
        {width <= showLevelsFromWidth ? (
          <ShowLevelsButton
            isShowLevels={isShowLevels}
            clickHandler={() => setIsShowLevels((prev) => !prev)}
          />
        ) : null}

        <div className={styles.questionContainer}>
          <div className={styles.question}>
            <h4>{gameQuestions.length ? gameQuestions[currentLevel].text : 'No questions'}</h4>
          </div>
          <div className={styles.answersListContainer}>
            <AnswersList
              answers={gameQuestions.length ? gameQuestions[currentLevel].answers : []}
            />
          </div>
        </div>
      </div>
      {(width > showLevelsFromWidth || isShowLevels) && (
        <div
          className={`${styles.levelsListContainer} ${
            width <= showLevelsFromWidth ? styles.mobLevelsListContainer : ''
          }`}
        >
          <LevelsList />
        </div>
      )}
    </div>
  );
}

export default GameScreen;
