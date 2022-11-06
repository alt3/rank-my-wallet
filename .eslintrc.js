// module.exports = {
//   plugins: ["@typescript-eslint/eslint-plugin", "eslint-plugin-tsdoc"],
//   extends: ["blitz", "plugin:@typescript-eslint/recommended"],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     // project: "./tsconfig.json",
//     tsconfigRootDir: __dirname,
//     ecmaVersion: 2018,
//     sourceType: "module",
//   },
//   rules: {
//     "tsdoc/syntax": "warn",
//   },
// }

module.exports = require("@blitzjs/next/eslint")

// module.exports = {
//   plugins: ["@typescript-eslint/eslint-plugin", "eslint-plugin-tsdoc"],
//   extends: ["next"],
//   // parser: "@typescript-eslint/parser",
//   // parserOptions: {
//   //   project: "./tsconfig.json",
//   //   tsconfigRootDir: __dirname,
//   //   ecmaVersion: 2018,
//   //   sourceType: "module",
//   // },
//   rules: {
//     "tsdoc/syntax": "warn",
//   },
// }
