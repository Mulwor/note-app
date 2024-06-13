module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@stylistic/eslint-plugin-ts'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    // For TypeScript
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
    "@stylistic/ts/key-spacing": [
      "error",
      {
        beforeColon: false,
        afterColon: true,
        mode: "strict",
        align: {
          beforeColon: true,
          afterColon: true,
          on: "colon",
        },
      },
    ],
    "@stylistic/ts/keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    '@stylistic/ts/member-delimiter-style': 'error',
    '@stylistic/ts/no-extra-semi': 'error',
    "@stylistic/ts/object-curly-spacing": ["error", "never"],
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
    '@stylistic/ts/semi': ['error', 'always'],
    '@stylistic/ts/space-before-blocks': 'error',
    '@stylistic/ts/space-before-function-paren': "error",
    '@stylistic/ts/space-infix-ops': 'error',
    '@stylistic/ts/type-annotation-spacing': 'error',
  },
};
