import { nprogress } from "./nprogress"

export const styles = {
  global: (props) => ({
    html: {},
    body: {
      backgroundColor: props.colorMode === "light" ? "light.900" : "gray.800",
      color: props.colorMode === "light" ? "gray.700" : "whiteAlpha.900",
    },
    ...nprogress,
  }),
}
