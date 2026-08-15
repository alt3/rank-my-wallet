// `@next/env` is CommonJS and Node cannot statically detect its named exports,
// so this file (real ESM, as .mts) has to go through the default export.
import nextEnv from "@next/env"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

const projectDir = process.cwd()
nextEnv.loadEnvConfig(projectDir)

// Tests transform Lingui macros with the Babel plugin rather than
// `@lingui/swc-plugin`. The SWC plugin is a Wasm binary tied to a specific
// swc_core version, and the one Next 15 can load is older than the @swc/core
// that Vite ships -- loading it here aborts the run. Babel has no such
// coupling, and the extra cost is irrelevant for this suite.
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Plain .ts files call the `t` macro too, and by default this plugin
      // only runs Babel where it expects JSX. Without them the macro reaches
      // runtime untransformed and throws inside address-class constructors.
      include: /\.(jsx?|tsx?)$/,
      babel: { plugins: ["@lingui/babel-plugin-lingui-macro"] },
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    dir: "./",
    css: true,
    globals: true,
    setupFiles: "./test/setup.ts",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
})
