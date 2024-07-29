const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  // Type check TypeScript files
  './src/*.(ts|tsx)': () => 'tsc --noEmit',
  './src/*.{js,jsx,ts,tsx,json,md,prettierrc,css,scss}':
    'prettier --write --config .prettierrc.json',
  './src/*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
