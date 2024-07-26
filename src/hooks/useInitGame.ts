import { useGameConfig } from '@/context/GameConfigContext';
import { Question } from '@/types';
import { useEffect } from 'react';

interface GameInitProps {
  questions: Array<Question>;
  questionsPerGame: number;
  prize: number;
  prizeMultiplier: number;
}

export const useInitGame = ({
  questions,
  questionsPerGame,
  prize,
  prizeMultiplier,
}: GameInitProps) => {
  const {
    setPrize, setPrizeMultiplier, setQuestions, setQuestionsPerGame,
  } = useGameConfig();

  useEffect(() => {
    setPrize(prize);
    setPrizeMultiplier(prizeMultiplier);
    setQuestionsPerGame(questionsPerGame);
    setQuestions(questions);
  }, [
    prize,
    prizeMultiplier,
    questionsPerGame,
    questions,
    setPrize,
    setPrizeMultiplier,
    setQuestionsPerGame,
    setQuestions,
  ]);
};
