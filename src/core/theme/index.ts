import { extendTheme, ThemeOverride } from "@chakra-ui/theme-utils"
import * as components from "./components"
import { colors } from "./foundations/colors"
import { fonts } from "./foundations/fonts"
import { globalStyles } from "./global/styles"

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
