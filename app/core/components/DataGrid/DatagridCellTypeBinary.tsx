import { Td } from "@chakra-ui/react"

interface Props {
  binary: number
  bit?: number | null
}

export const DataGridCellTypeBinary = ({ binary, bit }: Props) => {
  const styles = {
    td: {
      textAlign: "center" as const,
      color: "inherit",
      fontWeight: "inherit",
    },
  }

  if (bit === null) {
    styles.td.color = "gray.600"
    styles.td.fontWeight = "bold"
  }

  return <Td {...styles.td}>{binary}</Td>
}

export default DataGridCellTypeBinary
