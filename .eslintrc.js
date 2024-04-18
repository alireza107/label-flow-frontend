module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier', 'plugin:storybook/recommended'],
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
    next: {
      rootDir: './src',
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'newline-before-return': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-console': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 1,
  },
}
