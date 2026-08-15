import { GridItem, useSlotRecipe } from "@chakra-ui/react"

export const DataGridField = (props) => {
  const { size, variant, children, ...rest } = props
  const recipe = useSlotRecipe({ key: "DataGrid" })
  const styles = recipe({ size, variant })

  return (
    <GridItem css={styles.DataGridField} {...rest}>
      {children}
    </GridItem>
  )
}

export default DataGridField
