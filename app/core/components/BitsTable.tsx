import { Text, useColorModeValue, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import nextId from "react-id-generator"
import isEqual from "lodash.isequal"
import { bitsToByte } from "app/lib/utils"

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

interface BitsTableProps {
  caption: string
  bits: Array<number>
  sumLabel?: string
}

export function BitsTable({ caption, bits, sumLabel }: BitsTableProps) {
  const reversedBits = [...bits].reverse() // create reversed clone so we can render top-down bits

  const styles = {
    caption: {
      color: useColorModeValue("teal.500", "teal.300"),
    },
    table: {
      marginBottom: "3rem",
      maxWidth: "400px",
    },
    th: {
      textAlign: "center" as const,
    },
    td: {
      textAlign: "center" as const,
    },
    tdSum: {
      fontWeight: "extrabold",
      color: useColorModeValue("teal.500", "teal.300"),
    },
    tdSumLabel: {
      colSpan: 2,
      textAlign: "right" as const,
      color: useColorModeValue("gray.600", "gray.400"),
      fontSize: "xs",
      fontFamily: "heading",
      textTransform: "uppercase" as const,
      letterSpacing: "wider",
    },
  }

  return (
    <>
      <Text as="h3" {...styles.caption} marginBottom=".5rem">
        {caption}
      </Text>
      <Table variant="simple" {...styles.table}>
        <Thead>
          <Tr>
            <Th {...styles.th}>Bin</Th>
            <Th {...styles.th}>Bit</Th>
            <Th {...styles.th}>Dec</Th>
          </Tr>
        </Thead>

        <Tbody>
          {/* One row per bit */}
          {reversedBits.map((bit, i) => (
            <Tr key={nextId("tr")}>
              <Td key={nextId("td")} {...styles.td}>
                {bitLookup.find(({ index }) => isEqual(index, bits.length - 1 - i))?.binary}
              </Td>
              <Td {...styles.td}>{bit}</Td>
              <Td {...styles.td}>
                {bit === 0
                  ? 0
                  : bitLookup.find(({ index }) => isEqual(index, bits.length - 1 - i))?.binary}
              </Td>
            </Tr>
          ))}

          {/* Summary row */}
          <Tr border={"none"}>
            <Td {...styles.tdSumLabel}>{sumLabel}</Td>
            <Td {...styles.td} {...styles.tdSum}>
              {bitsToByte(bits)}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  )
}

export default BitsTable
