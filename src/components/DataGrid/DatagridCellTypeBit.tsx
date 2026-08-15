import { useColorModeValue, useMediaQuery, Td } from "@chakra-ui/react"

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
