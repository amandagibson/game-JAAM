'use strict';

module.exports = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  printWidth: 80,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.{js,ts}',
      options: {
        singleQuote: true,
      },
    },
  ],
};
