import { ComponentSingleStyleConfig, StyleProps } from "@chakra-ui/react"

/**
 * Default properties for styling single part components with working VSCode autosuggest for css
 */
export default interface SinglePartComponentStyleProps extends ComponentSingleStyleConfig {
  baseStyle: StyleProps
  sizes?: { [size: string]: StyleProps }
  variants?: { [variant: string]: StyleProps }
}
