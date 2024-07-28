import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('Should render with onclick', () => {
    const child = 'Click me';
    render(<Button clickHandler={jest.fn()}>{child}</Button>);

    const btn = screen.getByRole('button');

    expect(btn).toBeInTheDocument();
    expect(btn).toContainHTML(child);
  });

  it('Should render without onclick', () => {
    const child = 'Not click me';
    render(<Button>{child}</Button>);

    const btn = screen.getByRole('button');

    expect(btn).toBeInTheDocument();
    expect(btn).toContainHTML(child);
  });

  it('Should be clicked 1 time', () => {
    const clickHandler = jest.fn();
    render(<Button clickHandler={clickHandler}>Click me</Button>);

    const btn = screen.getByRole('button');
    fireEvent.click(btn);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
