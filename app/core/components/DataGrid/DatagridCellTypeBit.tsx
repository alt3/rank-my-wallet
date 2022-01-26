import { Td } from "@chakra-ui/react"

interface Props {
  bit: number | null
}

export const DataGridCellTypeBit = ({ bit }: Props) => {
  const styles = {
    td: {
      textAlign: "center" as const,
    },
  }

  return <Td {...styles.td}>{bit}</Td>
}

export default DataGridCellTypeBit
