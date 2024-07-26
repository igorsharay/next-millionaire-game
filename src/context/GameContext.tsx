'use client';

import { Question } from '@/types';
import React, { createContext, useContext, useState } from 'react';

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

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [isGameStarted, setGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [earnedAmount, setEarnedAmount] = useState(0);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [gameQuestions, setGameQuestions] = useState<Array<Question>>([]);

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
    setIsGameOver(false);
    setEarnedAmount(0);
    setCurrentLevel(0);
    setGameQuestions([]);
  };

  return (
    <GameContext.Provider
      value={{
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }

  return context;
};
