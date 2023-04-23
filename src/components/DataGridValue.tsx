import { GridItem } from "@chakra-ui/layout"
import { useMultiStyleConfig } from "@chakra-ui/system"

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
