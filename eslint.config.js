import globals from "globals";
import pluginJs from "@eslint/js";
import functional from "eslint-plugin-functional";

/** @type {import("eslint").Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  functional.configs.externalVanillaRecommended,
  functional.configs.recommended,
  functional.configs.stylistic,
  functional.configs.disableTypeChecked
];
