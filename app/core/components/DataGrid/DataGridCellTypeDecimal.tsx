import { Td } from "@chakra-ui/react"
import nextId from "react-id-generator"
import isEqual from "lodash.isequal"

// Simple lookup table to keep sanity
const bitLookup = [
  {
    index: 0,
    binary: 1,
  },
  {
    index: 1,
    binary: 2,
  },
  {
    index: 2,
    binary: 4,
  },
  {
    index: 3,
    binary: 8,
  },
  {
    index: 4,
    binary: 16,
  },
  {
    index: 5,
    binary: 32,
  },
  {
    index: 6,
    binary: 64,
  },
  {
    index: 7,
    binary: 128,
  },
]

interface Props {
  bits: Array<number | null>
  bit: number | null
  i: number
}

export const DataGridCellTypeDecimal = ({ bits, bit, i }: Props) => {
  const styles = {
    td: {
      textAlign: "center" as const,
    },
  }

  let cellText: string | number | null = null

  if (bit === null) {
    cellText = null
  }

  if (bit === 0) {
    cellText = 0
  }

  if (bit === 1) {
    cellText =
      bitLookup.find(({ index }) => isEqual(index, bits.length - 1 - (i ?? 0)))?.binary ?? null
  }

  return (
    <Td key={nextId("td")} {...styles.td}>
      {cellText}
    </Td>
  )
}

export default DataGridCellTypeDecimal
