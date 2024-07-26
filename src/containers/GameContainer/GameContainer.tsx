'use client';

import GameOverScreen from '@/components/GameOverScreen/GameOverScreen';
import GameScreen from '@/components/GameScreen/GameScreen';
import StartGameScreen from '@/components/StartGameScreen/StartGameScreen';
import { useGame } from '@/context/GameContext';
import useInitGame from '@/hooks/useInitGame';
import { Question } from '@/types';

interface GameContainerProps {
  questions: Array<Question>;
  questionsPerGame: number;
  prize: number;
  prizeMultiplier: number;
}

const GameContainer: React.FC<GameContainerProps> = ({
  questions,
  questionsPerGame,
  prize,
  prizeMultiplier,
}) => {
  const { isGameStarted, isGameOver } = useGame();

  useInitGame({
    questions,
    questionsPerGame,
    prize,
    prizeMultiplier,
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
