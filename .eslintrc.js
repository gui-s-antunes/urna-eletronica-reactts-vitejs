export const env = {
  browser: true,
  es2021: true,
  jest: true,
  node: true,
};
export const extends = [
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
  'plugin:prettier/recommended',
  'plugin:storybook/recommended',
];
export const globals = {
  Atomics: 'readonly',
  SharedArrayBuffer: 'readonly',
};
export const parser = '@babel/eslint-parser';
export const parserOptions = {
  ecmaFeatures: {
    jsx: true,
  },
  ecmaVersion: 'latest',
  sourceType: 'module',
};
export const plugins = ['react', 'prettier', 'react-hooks'];
export const settings = {
  react: {
    version: 'detect',
  },
};
export const rules = {
  'react/react-in-jsx-scope': 'off',
};
