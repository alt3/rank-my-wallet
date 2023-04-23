import { StyleProps, SystemStyleObject } from "@chakra-ui/system"
import { Theme } from "@chakra-ui/theme"
/**
 * Default properties for styling single part components with working VSCode autosuggest for css
 */
interface StyleOptions {
  theme: Theme
  colorMode: "light" | "dark"
  colorScheme: string
}

type StyleInterpolation =
  | { [part: string]: SystemStyleObject }
  | ((options: StyleOptions) => {
      [part: string]: StyleProps | SystemStyleObject
    })

export default interface StyleConfigMulti {
  parts?: string[]
  baseStyle: StyleInterpolation
  sizes?: { [size: string]: StyleInterpolation }
  variants?: { [variant: string]: StyleInterpolation }
}
