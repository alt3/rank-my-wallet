import { dirname } from "node:path"
import { fileURLToPath } from "node:url"

import { FlatCompat } from "@eslint/eslintrc"
import prettier from "eslint-config-prettier"
import stringToLingui from "eslint-plugin-string-to-lingui"
import tseslint from "typescript-eslint"

const __dirname = dirname(fileURLToPath(import.meta.url))
const compat = new FlatCompat({ baseDirectory: __dirname })

const config = [
  // ESLint 9 dropped --ignore-path, so the .gitignore entries that matter for
  // linting are repeated here. Build output, caches and generated files only.
  {
    ignores: [
      "**/node_modules/**",
      ".next/**",
      ".blitz/**",
      ".blitz**",
      ".swc/**",
      ".vitest-preview/**",
      ".yarn/**",
      "public/**",
      "src/translations/locales/**",
      // was ignorePatterns in @blitzjs/next/eslint
      "**/*.d.ts",
    ],
  },

  // @blitzjs/next/eslint, inlined. The preset is three lines of config behind a
  // legacy-format entry point; wrapping it in FlatCompat as well would only add
  // another eslintrc shim. Its `settings.next.rootDir` is dropped: it points at
  // `apps/*/` + `packages/*/`, which is the Blitz monorepo layout, not ours.
  ...compat.extends("eslint-config-next"),
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/no-floating-promises": "error",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": "error",
      "react/display-name": "off",
    },
  },

  // Project rules (was .eslintrc.js).
  {
    plugins: {
      "string-to-lingui": stringToLingui,
    },
    rules: {
      "string-to-lingui/t-call-in-function": 2,
      "string-to-lingui/macro-inside-t-and-i18": 2,
      "string-to-lingui/t-should-be-before-macro": 2,
      "string-to-lingui/no-single-varibles-to-translate": 2,
      "string-to-lingui/forbid-i18n-calls": [
        2,
        {
          rules: [
            {
              handlerName: "number",
              message: "Use formatCurrency or formatNumber instead",
            },
          ],
        },
      ],
    },
  },

  // Must stay last: turns off everything Prettier owns.
  prettier,
]

export default config
