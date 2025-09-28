import nextPlugin from "eslint-config-next";

const eslintConfig = [
  nextPlugin.configs.recommended,
  {
    ignores: ["dist", "build"],
  },
];

export default eslintConfig;
