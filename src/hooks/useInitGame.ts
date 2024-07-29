import { useGameConfig } from '@/context/GameConfigContext';
import { Levels, Question } from '@/types';
import { useEffect } from 'react';

interface GameInitProps {
  questions: Array<Question>;
  levels: Levels;
}

const useInitGame = ({ questions, levels }: GameInitProps) => {
  const { setQuestions, setLevels } = useGameConfig();

  useEffect(() => {
    setQuestions(questions);
    setLevels(levels);
  }, [questions, levels, setQuestions, setLevels]);
};

export default useInitGame;
