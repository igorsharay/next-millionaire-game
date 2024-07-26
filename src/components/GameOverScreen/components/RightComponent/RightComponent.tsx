'use client';

import { useGame } from '@/context/GameContext';
import Button from '@/components/Button/Button';
import { currencyFormat } from '@/helpers';
import styles from './RightComponent.module.css';

function RightComponent() {
  const { earnedAmount, resetGame } = useGame();

  const resetGameHandler = () => {
    resetGame();
  };

  return (
    <>
      <div>
        <h4 className={styles.h4}>Total score:</h4>
        <h1>
          <span>{currencyFormat(earnedAmount)}</span>
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
