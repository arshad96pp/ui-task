// .eslintrc.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // You can also add custom rules here
  {
    rules: {
      // Example of a custom rule
      "react/no-unescaped-entities": "off", // Disable this rule globally
      "@typescript-eslint/no-explicit-any": "warn", // Warn about `any` usage
    },
  },
];

export default eslintConfig;
