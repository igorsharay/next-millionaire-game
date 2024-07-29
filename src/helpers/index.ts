export const currencyFormat = (sum: number, currency: string) => {
  const contries: { [key: string]: string } = { USD: 'en-US', EUR: 'de-DE' };
  const contry = contries[currency] || contries.USD;

  const { format } = new Intl.NumberFormat(contry, {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  });

  return format(sum);
};

export const shuffle = (array: unknown[]) => {
  const shuffled = [...array];
  let currentIndex = shuffled.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[currentIndex],
    ];
  }

  return shuffled;
};

export const getLetter = (index: number) => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  if (index > letters.length) {
    return letters[letters.length - 1];
  }

  return letters[index];
};

export const removeSpaces = (str: string) => {
  return str.replaceAll(' ', '');
};
