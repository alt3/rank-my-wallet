import { Grid, useSlotRecipe } from "@chakra-ui/react"

export const DataGrid = (props) => {
  const { size, variant, children, ...rest } = props
  // Chakra 3 replaces useMultiStyleConfig/createStylesContext with slot
  // recipes. Each slot resolves its own style object, so the sub-components
  // look their own slot up rather than reading it from a styles context.
  const recipe = useSlotRecipe({ key: "DataGrid" })
  const styles = recipe({ size, variant })

  return (
    <Grid css={styles.DataGrid} {...rest}>
      {children}
    </Grid>
  )
}

export default DataGrid
