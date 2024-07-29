'use client';

import { useGame } from '@/context/GameContext';
import Button from '@/components/Button/Button';
import { currencyFormat } from '@/helpers';
import { useGameConfig } from '@/context/GameConfigContext';
import { useMemo } from 'react';
import styles from './RightComponent.module.css';

function RightComponent() {
  const {
    levels: { currency, reward },
  } = useGameConfig();
  const { currentLevel, resetGame } = useGame();

  const earnedReward = useMemo(
    () => (currentLevel ? reward[currentLevel - 1] : 0),
    [reward, currentLevel],
  );

  const resetGameHandler = () => {
    resetGame();
  };

  return (
    <>
      <div>
        <h4 className={styles.h4}>Total score:</h4>
        <h1>
          <span>{currencyFormat(earnedReward, currency)}</span>
          &nbsp;earned
        </h1>
      </div>
      <div className={styles.btnContainer}>
        <Button clickHandler={resetGameHandler}>Try again</Button>
      </div>
    </>
  );
}

export default RightComponent;
