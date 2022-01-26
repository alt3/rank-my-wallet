import { Td } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react"

interface Props {
  bit: number | null
}

export const DataGridCellTypeBit = ({ bit }: Props) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  const paddingLeft = isMobile ? 0 : "inherit"

  return <Td paddingLeft={paddingLeft}>{bit}</Td>
}

export default DataGridCellTypeBit
