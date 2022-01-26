import { GridItem, useMultiStyleConfig } from "@chakra-ui/react"

export const DataGridValue = (props) => {
  const { size, variant, children, ...rest } = props
  const styles = useMultiStyleConfig("DataGrid", { size, variant })

  return (
    <GridItem __css={styles.DataGridValue} {...rest}>
      {children}
    </GridItem>
  )
}

export default DataGridValue
