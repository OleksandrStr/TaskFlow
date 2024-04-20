import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-shadow': [
        'error',
        {
          hoist: 'all',
        },
      ],
      'arrow-body-style': 'error',
      'no-console': [
        'error',
        {
          allow: ['warn', 'info', 'error'],
        },
      ],
      'no-debugger': 'error',
      'no-irregular-whitespace': 'error',
      'no-var': 'error',
    },
    languageOptions: {
      parserOptions: {
        project: ['client/tsconfig.json', 'server/tsconfig.json'],
      },
      globals: { ...globals.browser, ...globals.node },
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
];
