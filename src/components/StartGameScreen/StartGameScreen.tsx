import TwoInRowContainer from '@/components/TwoInRowContainer/TwoInRowContainer';
import LeftComponent from './components/LeftComponent/LeftComponent';
import RightComponent from './components/RightComponent/RightComponent';
import styles from './StartGameScreen.module.css';

function StartGameScreen() {
  return (
    <TwoInRowContainer
      left={<LeftComponent />}
      right={<RightComponent />}
      backgroundClass={styles.containerBg}
    />
  );
}

export default StartGameScreen;
