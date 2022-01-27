export const styles = {
  global: (props) => ({
    html: {},
    body: {
      backgroundColor: props.colorMode === "light" ? "light.900" : "gray.800",
      fontWeight: props.colorMode === "light" ? "bolder" : "normal",
      color: props.colorMode === "light" ? "gray.700" : "whiteAlpha.900",
    },
  }),
}
