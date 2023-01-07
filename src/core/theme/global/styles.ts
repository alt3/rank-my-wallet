import { Styles } from "@chakra-ui/theme-tools"
import { nprogress } from "./nprogress"

export const globalStyles: Styles = {
  global: (props) => ({
    html: {},
    body: {
      backgroundColor: props.colorMode === "light" ? "light.900" : "gray.800",
      color: props.colorMode === "light" ? "gray.700" : "whiteAlpha.900",
    },
    ...nprogress(props),
  }),
}
