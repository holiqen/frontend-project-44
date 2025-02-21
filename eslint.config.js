import globals from 'globals';
import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';

/** @type {import("eslint").Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    rules: {
      quotes: ['error', 'single'],
      'eol-last': ['error', 'always'],
      indent: ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'import/prefer-default-export': 'error',
      'import/no-unresolved': ['error', { commonjs: true, amd: true }],
      'function-paren-newline': ['error', 'consistent'],
      'quote-props': ['error', 'as-needed'],
      'no-confusing-arrow': ['error', { allowParens: true }],
      'implicit-arrow-linebreak': ['error', 'beside'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'consistent-return': 'error',
      'max-len': ['error', { code: 100, tabWidth: 2, ignoreUrls: true }],
    },
  },
];
