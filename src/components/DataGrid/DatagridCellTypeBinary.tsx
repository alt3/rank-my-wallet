import { Table, useMediaQuery } from "@chakra-ui/react"

interface Props {
  binary: number
  bit?: number | null
}

export const DataGridCellTypeBinary = ({ binary, bit }: Props) => {
  const [isMobile] = useMediaQuery(["(max-width: 768px)"])

  const styles = {
    td: {
      color: "inherit",
      fontWeight: "inherit",
    },
  }

  if (bit === null) {
    styles.td.color = "gray.600"
    styles.td.fontWeight = "bold"
  }

  const paddingStart = isMobile ? 0 : "inherit"

  return (
    <Table.Cell {...styles.td} paddingStart={paddingStart}>
      {binary}{" "}
    </Table.Cell>
  )
}

export default DataGridCellTypeBinary
