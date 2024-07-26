import TwoInRowContainer from '@/components/TwoInRowContainer/TwoInRowContainer';
import LeftComponent from './components/LeftComponent/LeftComponent';
import RightComponent from './components/RightComponent/RightComponent';

function GameOverScreen() {
  return <TwoInRowContainer left={<LeftComponent />} right={<RightComponent />} />;
}

export default GameOverScreen;
