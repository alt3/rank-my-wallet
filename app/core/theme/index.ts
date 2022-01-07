import { extendTheme, ThemeOverride } from "@chakra-ui/react"
import { colors } from "./foundations/colors"
import { fonts } from "./foundations/fonts"

const extendThemeObj: ThemeOverride = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors,
  fonts,
  components: {},
}

export type ExtendedTheme = typeof extendThemeObj

export default extendTheme(extendThemeObj)
