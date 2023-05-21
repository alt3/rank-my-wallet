import { useColorModeValue } from "@chakra-ui/color-mode"
import { useMediaQuery } from "@chakra-ui/media-query"
import { Td } from "@chakra-ui/table"

interface Props {
  bit: number | null
}

export const DataGridCellTypeBit = ({ bit }: Props) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  const paddingStart = isMobile ? 0 : "inherit"

  const nonZeroBitColor = useColorModeValue("teal.500", "teal.300")
  const color = bit ? nonZeroBitColor : "gray.600"

  return (
    <Td paddingStart={paddingStart} color={color}>
      {bit}
    </Td>
  )
}

export default DataGridCellTypeBit
