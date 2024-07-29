import { useGameConfig } from '@/context/GameConfigContext';
import { useGame } from '@/context/GameContext';
import { getGameQuestions, randomizeQuestionsAnswers } from '@/helpers/questionsHelper';
import { useEffect } from 'react';

const useSetGameQuestions = () => {
  const {
    questions,
    levels: { reward },
  } = useGameConfig();
  const { setGameQuestions } = useGame();

  useEffect(() => {
    const levelsCount = reward?.length || 0;
    const gameQuestions = getGameQuestions(questions, levelsCount);

    setGameQuestions(randomizeQuestionsAnswers(gameQuestions));
  }, [questions, reward, setGameQuestions]);
};

export default useSetGameQuestions;
