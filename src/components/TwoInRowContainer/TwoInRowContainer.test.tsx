import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TwoInRowContainer from './TwoInRowContainer';

describe('TwoInRowContainer component', () => {
  it('Should render children', () => {
    const left = 'left';
    const right = 'right';
    render(<TwoInRowContainer left={left} right={right} />);

    const leftComponent = screen.getByText(left);
    expect(leftComponent).toBeInTheDocument();

    const rightComponent = screen.getByText(right);
    expect(rightComponent).toBeInTheDocument();
  });
});
