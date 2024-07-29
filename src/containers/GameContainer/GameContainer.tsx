'use client';

import GameOverScreen from '@/components/GameOverScreen/GameOverScreen';
import GameScreen from '@/components/GameScreen/GameScreen';
import StartGameScreen from '@/components/StartGameScreen/StartGameScreen';
import { useGame } from '@/context/GameContext';
import useInitGame from '@/hooks/useInitGame';
import { Levels, Question } from '@/types';

interface GameContainerProps {
  questions: Array<Question>;
  levels: Levels;
}

const GameContainer: React.FC<GameContainerProps> = ({ questions, levels }) => {
  const { isGameStarted, isGameOver } = useGame();

  useInitGame({
    questions,
    levels,
  });

  if (!isGameStarted) {
    return <StartGameScreen />;
  }

  if (isGameOver) {
    return <GameOverScreen />;
  }

  return <GameScreen />;
};

export default GameContainer;
