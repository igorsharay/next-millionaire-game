'use client';

import Question from '@/components/Question/Question';
import useSetGameQuestions from '@/hooks/useSetGameQuestions';
import Levels from './components/Levels/Levels';
import styles from './GameScreen.module.css';

function GameScreen() {
  useSetGameQuestions();

  return (
    <div className={styles.container}>
      <div className={styles.questionOuterContainer}>
        <Question />
      </div>

      <Levels />
    </div>
  );
}

export default GameScreen;
