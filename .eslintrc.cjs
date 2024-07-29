module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'react-refresh', 
    '@stylistic/eslint-plugin-ts', 
    '@stylistic/jsx',
    'plugins'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@stylistic/ts/block-spacing': 'error',
    '@stylistic/ts/semi': 'error',
    '@stylistic/ts/brace-style': 'error',
    '@stylistic/ts/comma-dangle': ['error', 'never'],
    '@stylistic/ts/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@stylistic/ts/function-call-spacing': ['error', 'never'],
    '@stylistic/ts/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
        align: {
          beforeColon: true,
          afterColon: true,
          on: 'colon',
        },
      },
    ],
    '@stylistic/ts/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    '@stylistic/ts/member-delimiter-style': 'error',
    '@stylistic/ts/no-extra-semi': 'error',
    '@stylistic/ts/object-curly-spacing': ['error', 'never'],
    '@stylistic/ts/padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
    ],
    '@stylistic/ts/space-before-blocks': 'error',
    '@stylistic/ts/space-before-function-paren': 'error',
    '@stylistic/ts/space-infix-ops': 'error',
    '@stylistic/ts/type-annotation-spacing': 'error',
    '@stylistic/jsx/jsx-indent': ['error', 2],
    '@stylistic/jsx/jsx-closing-bracket-location': 1,
    '@stylistic/jsx/jsx-closing-tag-location': true,
    "react/jsx-uses-react": "warn",
    "react/jsx-uses-vars": "warn",
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};