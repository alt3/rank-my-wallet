import { extendTheme, ThemeOverride } from "@chakra-ui/react"
import { colors } from "./foundations/colors"
import { fonts } from "./foundations/fonts"
import { styles } from "./foundations/styles"
import SectionHeader from "./components/SectionHeaderStyles"

const extendThemeObj: ThemeOverride = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors,
  fonts,
  styles,
  components: {
    SectionHeader,
  },
}

export type ExtendedTheme = typeof extendThemeObj

export default extendTheme(extendThemeObj)
