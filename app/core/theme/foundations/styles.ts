export const styles = {
  global: (props) => ({
    html: {},
    body: {
      backgroundColor: props.colorMode === "light" ? "light.900" : "gray.800",
    },
  }),
}
