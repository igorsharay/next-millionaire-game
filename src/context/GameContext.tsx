'use client';

import { Question } from '@/types';
import React, { createContext, useContext, useMemo, useState } from 'react';

interface GameContextType {
  isGameStarted: boolean;
  isGameOver: boolean;
  earnedAmount: number;
  currentLevel: number;
  gameQuestions: Array<Question>;
  setEarnedAmount: (v: number) => void;
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
  earnedAmount: 0,
  currentLevel: 0,
  gameQuestions: [],
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [isGameStarted, setGameStarted] = useState(gameDefaults.isGameStarted);
  const [isGameOver, setIsGameOver] = useState(gameDefaults.isGameOver);
  const [earnedAmount, setEarnedAmount] = useState(gameDefaults.earnedAmount);
  const [currentLevel, setCurrentLevel] = useState(gameDefaults.currentLevel);
  const [gameQuestions, setGameQuestions] = useState<Array<Question>>(gameDefaults.gameQuestions);

  const startGame = () => {
    setGameStarted(true);
    setIsGameOver(false);
  };

  const endGame = () => {
    setGameStarted(true);
    setIsGameOver(true);
  };

  const resetGame = () => {
    setGameStarted(true);
    setIsGameOver(gameDefaults.isGameOver);
    setEarnedAmount(gameDefaults.earnedAmount);
    setCurrentLevel(gameDefaults.currentLevel);
    setGameQuestions(gameDefaults.gameQuestions);
  };

  const value = useMemo(
    () => ({
      isGameStarted,
      isGameOver,
      earnedAmount,
      currentLevel,
      gameQuestions,
      setEarnedAmount,
      setCurrentLevel,
      setGameQuestions,
      startGame,
      endGame,
      resetGame,
    }),
    [currentLevel, earnedAmount, gameQuestions, isGameOver, isGameStarted],
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
