import { useGameConfig } from '@/context/GameConfigContext';
import { useGame } from '@/context/GameContext';
import { getGameQuestions, randomizeQuestionsAnswers } from '@/helpers/questionsHelper';
import { useEffect } from 'react';

const useSetGameQuestions = () => {
  const { questions, questionsPerGame } = useGameConfig();
  const { setGameQuestions } = useGame();

  useEffect(() => {
    const gameQuestions = getGameQuestions(questions, questionsPerGame);
    setGameQuestions(randomizeQuestionsAnswers(gameQuestions));
  }, [setGameQuestions, questions, questionsPerGame]);
};

export default useSetGameQuestions;
