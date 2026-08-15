import { Table, useMediaQuery } from "@chakra-ui/react"
import { useColorModeValue } from "src/core/theme/color-mode"

interface Props {
  bit: number | null
}

export const DataGridCellTypeBit = ({ bit }: Props) => {
  const [isMobile] = useMediaQuery(["(max-width: 768px)"])

  const paddingStart = isMobile ? 0 : "inherit"

  const nonZeroBitColor = useColorModeValue("teal.500", "teal.300")
  const color = bit ? nonZeroBitColor : "gray.600"

  return (
    <Table.Cell paddingStart={paddingStart} color={color}>
      {bit}
    </Table.Cell>
  )
}

export default DataGridCellTypeBit
