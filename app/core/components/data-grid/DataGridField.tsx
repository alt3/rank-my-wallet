import { GridItem, useMultiStyleConfig } from "@chakra-ui/react"

export const DataGridField = (props) => {
  const { size, variant, children, ...rest } = props
  const styles = useMultiStyleConfig("DataGrid", { size, variant })

  return (
    <GridItem __css={styles.DataGridField} {...rest}>
      {children}
    </GridItem>
  )
}

export default DataGridField
