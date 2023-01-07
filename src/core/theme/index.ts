import { extendTheme, ThemeOverride } from "@chakra-ui/react"
import { colors } from "./foundations/colors"
import { fonts } from "./foundations/fonts"
import { globalStyles } from "./global/styles"
import * as components from "./components"

const extendThemeObj: ThemeOverride = {
  config: {
    initialColorMode: "dark",
    // useSystemColorMode: false,
  },
  colors,
  fonts,
  styles: globalStyles,
  components: { ...components },
}

export type ExtendedTheme = typeof extendThemeObj

export default extendTheme(extendThemeObj)
