import { currencyFormat, getLetter, removeSpaces, shuffle } from '.';

describe('Helper functions', () => {
  it('Should get $ currency', () => {
    const { format } = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    });

    const sum = 1000;

    const test = format(sum);
    const result = currencyFormat(sum, 'USD');
    expect(result).toBe(test);
  });

  it('Should get € currency', () => {
    const { format } = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    });

    const sum = 1000;

    const test = format(sum);
    const result = currencyFormat(sum, 'EUR');
    expect(result).toBe(test);
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
