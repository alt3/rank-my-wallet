import { GridItem, useSlotRecipe } from "@chakra-ui/react"

export const DataGridValue = (props) => {
  const { size, variant, children, ...rest } = props
  const recipe = useSlotRecipe({ key: "DataGrid" })
  const styles = recipe({ size, variant })

  return (
    <GridItem css={styles.DataGridValue} {...rest}>
      {children}
    </GridItem>
  )
}

export default DataGridValue
