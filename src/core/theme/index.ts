import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import DataGrid from "@/components/DataGrid/DataGrid.styles"
import SectionHeader from "@/components/AddressDetails/SectionHeader.styles"
import { colors } from "./foundations/colors"
import { fonts } from "./foundations/fonts"
import { globalStyles } from "./global/styles"

/**
 * Chakra 3 replaces `extendTheme` with `createSystem`. The differences that
 * matter here:
 *
 * - tokens are `{ value }` objects and live under `theme.tokens`
 * - `styles.global` (a function of props) becomes a static `globalCss` object
 * - single-part style configs become `recipes`, multipart ones `slotRecipes`
 * - `config.initialColorMode` is gone; colour mode is next-themes' job now and
 *   the default is set on ColorModeProvider in src/core/theme/color-mode.tsx
 */
const config = defineConfig({
  globalCss: globalStyles,
  theme: {
    tokens: {
      colors,
      fonts,
    },
    recipes: {
      SectionHeader,
    },
    slotRecipes: {
      DataGrid,
    },
  },
})

export const system = createSystem(defaultConfig, config)

export default system
