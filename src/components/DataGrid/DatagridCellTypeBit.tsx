import { useMediaQuery } from "@chakra-ui/media-query"
import { Td } from "@chakra-ui/table"

interface Props {
  bit: number | null
}

export const DataGridCellTypeBit = ({ bit }: Props) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  const paddingStart = isMobile ? 0 : "inherit"

  return <Td paddingStart={paddingStart}>{bit}</Td>
}

export default DataGridCellTypeBit
