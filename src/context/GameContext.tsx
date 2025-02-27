'use client';

import { Question } from '@/types';
import React, { createContext, useContext, useMemo, useState } from 'react';

interface GameContextType {
  isGameStarted: boolean;
  isGameOver: boolean;
  currentLevel: number;
  gameQuestions: Array<Question> | null;
  setCurrentLevel: (v: number) => void;
  setGameQuestions: (q: Array<Question>) => void;
  startGame: () => void;
  endGame: () => void;
  resetGame: () => void;
}

interface GameProviderProps {
  children: React.ReactNode;
}

const gameDefaults = {
  isGameStarted: false,
  isGameOver: false,
  currentLevel: 0,
  gameQuestions: null,
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [isGameStarted, setGameStarted] = useState(gameDefaults.isGameStarted);
  const [isGameOver, setIsGameOver] = useState(gameDefaults.isGameOver);
  const [currentLevel, setCurrentLevel] = useState(gameDefaults.currentLevel);
  const [gameQuestions, setGameQuestions] = useState<Array<Question> | null>(
    gameDefaults.gameQuestions,
  );

  const startGame = () => {
    setGameStarted(true);
    setIsGameOver(false);
  };

  const endGame = () => {
    setGameStarted(true);
    setIsGameOver(true);
  };

  const resetGame = () => {
    setCurrentLevel(gameDefaults.currentLevel);
    setGameQuestions(gameDefaults.gameQuestions);
    setGameStarted(true);
    setIsGameOver(false);
  };

  const value = useMemo(
    () => ({
      isGameStarted,
      isGameOver,
      currentLevel,
      gameQuestions,
      setCurrentLevel,
      setGameQuestions,
      startGame,
      resetGame,
      endGame,
    }),
    [currentLevel, gameQuestions, isGameOver, isGameStarted],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }

  return context;
};
