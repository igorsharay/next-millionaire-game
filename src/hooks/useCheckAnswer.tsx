import { useGame } from '@/context/GameContext';
import { checkCorrectAnswers, getCorrectAnswersCount } from '@/helpers/questionsHelper';
import { useEffect, useState } from 'react';

export const useCheckAnswer = (delay: number) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number[]>([]);

  const { gameQuestions, currentLevel, setCurrentLevel, endGame } = useGame();

  useEffect(() => {
    let timeout = null;

    const answers = gameQuestions ? gameQuestions[currentLevel]?.answers : [];
    const isAllAnswersSelected = getCorrectAnswersCount(answers) === selectedAnswer.length;

    if (isAllAnswersSelected) {
      timeout = setTimeout(() => {
        if (checkCorrectAnswers(answers, selectedAnswer)) {
          setSelectedAnswer([]);
          setCurrentLevel(currentLevel + 1);

          if (gameQuestions && currentLevel + 1 === gameQuestions.length) {
            endGame();
          }
        } else {
          endGame();
        }
      }, delay);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [selectedAnswer, delay, gameQuestions, currentLevel, setCurrentLevel, endGame]);

  return { selectedAnswer, setSelectedAnswer };
};

export default useCheckAnswer;
