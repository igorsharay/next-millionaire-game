import { useGameConfig } from '@/context/GameConfigContext';
import { useGame } from '@/context/GameContext';
import { checkCorrectAnswers, getCorrectAnswersCount } from '@/helpers/questionsHelper';
import { useEffect, useState } from 'react';

export const useCheckAnswer = (delay: number) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number[]>([]);

  const { prize, prizeMultiplier } = useGameConfig();

  const { gameQuestions, endGame, currentLevel, earnedAmount, setCurrentLevel, setEarnedAmount } =
    useGame();

  useEffect(() => {
    let timeout = null;

    const answers = gameQuestions ? gameQuestions[currentLevel]?.answers : [];
    const isAllAnswersSelected = getCorrectAnswersCount(answers) === selectedAnswer.length;

    if (isAllAnswersSelected) {
      timeout = setTimeout(() => {
        if (checkCorrectAnswers(answers, selectedAnswer)) {
          const newAmount = earnedAmount > 0 ? earnedAmount * prizeMultiplier : prize;

          setEarnedAmount(newAmount);
          setSelectedAnswer([]);

          if (gameQuestions && currentLevel < gameQuestions.length - 1) {
            setCurrentLevel(currentLevel + 1);
          } else {
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
  }, [
    selectedAnswer,
    delay,
    gameQuestions,
    currentLevel,
    setCurrentLevel,
    setEarnedAmount,
    earnedAmount,
    prizeMultiplier,
    prize,
    endGame,
  ]);

  return { selectedAnswer, setSelectedAnswer };
};

export default useCheckAnswer;
