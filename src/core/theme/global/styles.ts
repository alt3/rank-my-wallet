import { nprogress } from "./nprogress"

/**
 * Chakra 3 replaces the `styles.global(props)` function with a static
 * `globalCss` object, so the colour-mode branches become `_dark` conditions.
 */
export const globalStyles = {
  html: {},
  body: {
    backgroundColor: "light.900",
    color: "gray.700",
    _dark: {
      backgroundColor: "gray.800",
      color: "whiteAlpha.900",
    },
  },
  ...nprogress,
}
