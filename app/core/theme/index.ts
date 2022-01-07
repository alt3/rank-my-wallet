import { extendTheme, ThemeOverride } from "@chakra-ui/react"
import { fonts } from "./foundations/fonts"

const extendThemeObj: ThemeOverride = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts,
  components: {},
}

export type ExtendedTheme = typeof extendThemeObj

export default extendTheme(extendThemeObj)
