import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier'; // Імпорт плагіна Prettier

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended
    ],
    files: ['**/*.{js,ts}'],
    languageOptions: {
        ecmaVersion: 2020,
        globals: {
         ...globals.browser,
         ...globals.node,
        },
        parserOptions: {
         project: ['tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json'],
        },
       },
    plugins: {
      prettier, // Установка плагіна Prettier
    },
    rules: {
      'prettier/prettier': 'error', // Визначення правил які ми встановили для Prettier
      'prefer-const': 'warn', // Попередження при використанні let// Тут ви можете додати будь-які інші правила для JavaScript
      'no-console': ['error', { allow: ['error', 'warn'] }],
    },
  }
);