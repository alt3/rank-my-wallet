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
      // Chakra 3 dropped the `container.*` sizes. Five components (including
      // ContentContainer, which wraps every page) use `maxW="container.md"`,
      // so without these the whole site loses its max width. Values are
      // Chakra 2's.
      sizes: {
        container: {
          sm: { value: "640px" },
          md: { value: "768px" },
          lg: { value: "1024px" },
          xl: { value: "1280px" },
        },
      },
    },
    semanticTokens: {
      colors: {
        // Chakra 2's solid button flipped to the light end of the scale in
        // dark mode (teal.200 on dark text). Chakra 3 uses one solid colour
        // for both modes, which turned the primary buttons dark teal with
        // white text. This restores the production look.
        teal: {
          solid: { value: { base: "{colors.teal.500}", _dark: "{colors.teal.200}" } },
          contrast: { value: { base: "white", _dark: "{colors.gray.800}" } },
          fg: { value: { base: "{colors.teal.700}", _dark: "{colors.teal.300}" } },
          muted: { value: { base: "{colors.teal.100}", _dark: "{colors.teal.900}" } },
        },
      },
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
