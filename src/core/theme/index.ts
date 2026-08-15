import { createSystem, defaultConfig, defineConfig, defineRecipe } from "@chakra-ui/react"
import DataGrid from "@/components/DataGrid/DataGrid.styles"
import SectionHeader from "@/components/AddressDetails/SectionHeader.styles"
import { colors } from "./foundations/colors"
import { fonts } from "./foundations/fonts"
import { globalStyles } from "./global/styles"
import * as chakra2 from "./recipes/chakra2"

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
        // Chakra 3's `bg` is pure white/black; the page background here is
        // white/gray.800 (see global/styles.ts). Components that paint with
        // `bg` (table rows, the selected tab's bottom edge) would otherwise
        // stand out as black boxes in dark mode.
        bg: {
          DEFAULT: { value: { base: "white", _dark: "{colors.gray.800}" } },
        },
        // Chakra 2's global border colour (`chakra-border-color`), which
        // every `borderColor: inherit` — tabs, accordions, dividers — resolves
        // to. Chakra 3's `border` is gray.800 in dark mode: invisible on a
        // gray.800 page.
        border: {
          DEFAULT: { value: { base: "{colors.gray.200}", _dark: "{colors.whiteAlpha.300}" } },
        },
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
        // Chakra 2's default (gray) buttons: a light grey / translucent white
        // fill with the body text colour, and a translucent hover for the
        // ghost variant. Chakra 3's are near-black / white with inverted text.
        gray: {
          solid: { value: { base: "{colors.gray.100}", _dark: "{colors.whiteAlpha.200}" } },
          contrast: { value: { base: "{colors.gray.800}", _dark: "{colors.whiteAlpha.900}" } },
          subtle: { value: { base: "{colors.gray.100}", _dark: "{colors.whiteAlpha.200}" } },
          muted: { value: { base: "{colors.gray.200}", _dark: "{colors.whiteAlpha.300}" } },
        },
      },
      // Chakra 3's shadows are heavier and, in dark mode, add a light inset
      // ring that reads as a border. Chakra 2's were the same in both modes.
      shadows: {
        xs: { value: "0 0 0 1px rgba(0, 0, 0, 0.05)" },
        sm: { value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
        md: { value: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
        lg: { value: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" },
        xl: {
          value: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        },
        "2xl": { value: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" },
        inner: { value: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)" },
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
      // Chakra 2 component styling restated on top of Chakra 3's recipes;
      // see recipes/chakra2.ts for what changed and why.
      button: chakra2.button,
      link: chakra2.link,
      heading: chakra2.heading,
      input: chakra2.input,
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
      tabs: chakra2.tabs,
      table: chakra2.table,
      accordion: chakra2.accordion,
      list: chakra2.list,
    },
  },
})

export const system = createSystem(defaultConfig, config)

export default system
