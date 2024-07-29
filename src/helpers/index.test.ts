import { currencyFormat, getLetter, removeSpaces, shuffle } from '.';

describe('Helper functions', () => {
  it('Should get $ currency', () => {
    const result = currencyFormat(1000, 'USD');
    expect(result).toBe('$1,000');
  });

  it('Should get € currency', () => {
    const result = currencyFormat(1000, 'EUR');
    expect(result).toBe('1.000 €');
  });

  it('Should shuffle array', () => {
    const a = [1, 2, 3, 4, 5];
    const b = shuffle(a);

    expect(a.join()).not.toEqual(b.join());
  });

  it('Should get answer letter B', () => {
    const result = getLetter(1);
    expect(result).toBe('B');
  });

  it('Should get string without spaces', () => {
    const result = removeSpaces('a b c d');
    expect(result).toBe('abcd');
  });
});
