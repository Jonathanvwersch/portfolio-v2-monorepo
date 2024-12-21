import globals from "globals";
import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import nextPlugin from "@next/eslint-plugin-next";
import prettierConfig from "eslint-config-prettier";

const nextConfig = {
  plugins: {
    next: nextPlugin
  },
  rules: {
    ...Object.fromEntries(
      Object.entries(nextPlugin.configs?.recommended?.rules ?? {}).map(([key, value]) => [
        `next/${key}`,
        value
      ])
    )
  }
};

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs}"],
    ignores: ["**/node_modules/**", "**/.next/**", "**/dist/**", "**/.contentlayer/**"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        React: "writable",
        JSX: "writable",
        NodeJS: "writable",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      "react": reactPlugin,
      "react-hooks": reactHooksPlugin,
      "import": importPlugin,
      "next": nextPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: ["./tsconfig.json", "./apps/*/tsconfig.json"]
        },
        node: true
      },
      next: {
        rootDir: ["apps/*/"]
      }
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...importPlugin.configs.recommended.rules,
      ...nextConfig.rules,
      // React rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",
      // TypeScript rules
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true 
      }],
      "@typescript-eslint/ban-ts-comment": "off",
      // Import rules
      "import/no-unresolved": ["error", { 
        "ignore": ["^@/", "katex/dist/katex.css"] 
      }],
      // General rules
      "no-undef": "off", // TypeScript handles this
      "no-unused-vars": "off", // Using @typescript-eslint/no-unused-vars instead
    },
  },
  prettierConfig,
]; 