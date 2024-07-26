import React from 'react';
import AnswersList from '@/components/AnswersList/AnswersList';
import { useGame } from '@/context/GameContext';
import styles from './Question.module.css';

const Question = () => {
  const { gameQuestions, currentLevel } = useGame();

  return (
    <div className={styles.questionContainer}>
      <div className={styles.question}>
        <h4>{gameQuestions.length ? gameQuestions[currentLevel].text : 'No questions'}</h4>
      </div>
      <div className={styles.answersListContainer}>
        <AnswersList answers={gameQuestions.length ? gameQuestions[currentLevel].answers : []} />
      </div>
    </div>
  );
};

export default Question;
