import globals from 'globals';
import pluginJs from '@eslint/js';
import functional from 'eslint-plugin-functional';

/** @type {import("eslint").Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  functional.configs.externalVanillaRecommended,
  functional.configs.recommended,
  functional.configs.stylistic,
  functional.configs.disableTypeChecked,
  {
    'rules': {
      'quotes': ['error', 'single'],
      'eol-last': ['error', 'always'],
      'indent': ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'import/prefer-default-export': 'off',
      'import/no-unresolved': 'off',
      'no-confusing-arrow': 'off',
      'function-paren-newline': ['error', 'consistent'],
    },
  },
];
