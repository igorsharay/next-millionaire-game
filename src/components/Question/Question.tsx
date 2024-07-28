import React from 'react';
import AnswersList from '@/components/AnswersList/AnswersList';
import { useGame } from '@/context/GameContext';
import { removeSpaces } from '@/helpers';
import styles from './Question.module.css';

const Question = () => {
  const { gameQuestions, currentLevel } = useGame();

  if (!gameQuestions.length) {
    return <h4>No questions</h4>;
  }

  return (
    <div key={removeSpaces(gameQuestions[currentLevel].text)} className={styles.questionContainer}>
      <div className={styles.question}>
        <h4>{gameQuestions[currentLevel].text}</h4>
      </div>
      <div className={styles.answersListContainer}>
        <AnswersList answers={gameQuestions[currentLevel].answers} />
      </div>
    </div>
  );
};

export default Question;
