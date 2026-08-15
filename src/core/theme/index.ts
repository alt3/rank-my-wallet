import { createSystem, defaultConfig, defineConfig, defineRecipe } from "@chakra-ui/react"
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
      // Chakra 3 rounds corners one step tighter than Chakra 2 did: components
      // reference l1/l2/l3, and l2 (inputs, buttons) resolves to radii.sm (4px)
      // where Chakra 2 used md (6px). Shifting the scale up restores the old
      // proportions everywhere at once.
      radii: {
        l1: { value: "{radii.sm}" },
        l2: { value: "{radii.md}" },
        l3: { value: "{radii.lg}" },
      },
    },
    recipes: {
      SectionHeader,
      // Chakra 3's Container pads responsively (px 4/6/8 → up to 32px a side);
      // Chakra 2 used a flat 1rem, so every page's content was 32px narrower
      // than production. The full base is restated so this is correct whether
      // recipe overrides merge or replace.
      container: defineRecipe({
        className: "chakra-container",
        base: {
          position: "relative",
          maxWidth: "8xl",
          w: "100%",
          mx: "auto",
          px: "1rem",
        },
      }),
    },
    slotRecipes: {
      DataGrid,
    },
  },
})

export const system = createSystem(defaultConfig, config)

export default system
