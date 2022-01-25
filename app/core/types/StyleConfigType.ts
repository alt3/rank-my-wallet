import { SystemStyleObject, Theme, StyleProps } from "@chakra-ui/react"

/**
 * Default properties for styling single part components with working VSCode autosuggest for css
 */
type StyleInterpolation = ((options: StyleOptions) => StyleProps) | SystemStyleObject

interface StyleOptions {
  theme: Theme
  colorMode: "light" | "dark"
  colorScheme: string
}

export default interface StyleConfigType {
  baseStyle?: StyleInterpolation
  sizes?: { [size: string]: StyleInterpolation }
  variants?: { [variant: string]: StyleInterpolation }
}
