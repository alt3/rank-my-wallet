import { Box, Center, useColorModeValue, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import nextId from "react-id-generator"
import { capitalize } from "app/lib/utils"

interface SpeciesTableProps {
  blockchain: "cardano" | "ergo"
  currencySymbol: "₳" | "Σ"
  species: {
    startsAt: number
    name: string
  }[]
}

export function SpeciesTable({ blockchain, currencySymbol, species }: SpeciesTableProps) {
  const maximumSignificantDigits = blockchain === "cardano" ? 6 : 8

  const styles = {
    caption: {
      color: useColorModeValue("teal.500", "teal.300"),
    },
    currency: {
      color: "gray.500",
    },
    table: {
      width: { base: "100", sm: "100%" },
      marginBottom: "3rem",
    },
    left: {
      textAlign: "left" as const,
      paddingLeft: 0,
    },
    right: {
      textAlign: "right" as const,
      paddingRight: 0,
    },
  }

  return (
    <Center>
      <Table variant="simple" {...styles.table}>
        <Thead>
          <Tr>
            <Th {...styles.left} maxWidth="10px">
              #
            </Th>
            <Th {...styles.left}>Species</Th>
            <Th {...styles.right} textAlign="right">
              Starts At
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {/* One row per specie */}
          {species.map((element, i) => {
            return (
              <Tr key={nextId("tr")}>
                <Td {...styles.left} color="gray.500" fontWeight="bolder" maxWidth="10px">
                  {i + 1}
                </Td>
                <Td {...styles.left}>{capitalize(element.name)}</Td>
                <Td {...styles.right}>
                  <Box as="span" whiteSpace="nowrap">
                    <Box as="span" {...styles.currency}>
                      {currencySymbol}
                    </Box>{" "}
                    {element.startsAt.toLocaleString(undefined, { maximumSignificantDigits })}{" "}
                  </Box>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </Center>
  )
}

export default SpeciesTable
