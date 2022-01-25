import { SystemStyleObject, Theme, StyleProps } from "@chakra-ui/react"

/**
 * Default properties for styling single part components with working VSCode autosuggest for css
 */
interface StyleOptions {
  theme: Theme
  colorMode: "light" | "dark"
  colorScheme: string
}

type StyleInterpolation =
  | { [part: string]: StyleProps }
  | ((options: StyleOptions) => { [part: string]: SystemStyleObject })

export default interface StyleConfigMulti {
  parts?: string[]
  baseStyle: StyleInterpolation
  sizes?: { [size: string]: StyleInterpolation }
  variants?: { [variant: string]: StyleInterpolation }
  defaultProps?: {
    size?: string
    variant?: string
  }
}
