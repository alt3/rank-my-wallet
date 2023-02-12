import { Box, Center, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react"
import nextId from "react-id-generator"
import { bigToString, capitalize } from "src/lib"
import Big from "big.js"

interface SpeciesTableProps {
  blockchain: "cardano" | "ergo"
  tickerSymbol: "₳" | "Σ"
  species: {
    startsAt: number
    name: string
  }[]
}

export function SpeciesTable({ blockchain, tickerSymbol, species }: SpeciesTableProps) {
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
                <Td
                  {...styles.left}
                  color="gray.500"
                  fontWeight="bolder"
                  maxWidth="10px"
                  whiteSpace="nowrap"
                  paddingRight={{ base: "2rem", sm: 0 }}
                >
                  {i + 1}
                </Td>
                <Td {...styles.left}>{capitalize(element.name)}</Td>
                <Td {...styles.right}>
                  <Box as="span" whiteSpace="nowrap">
                    <Box as="span" {...styles.currency} paddingRight={"0.25rem"}>
                      {tickerSymbol}
                    </Box>{" "}
                    {element.startsAt.toString().match("^(?!([0-9]+$)).*$")
                      ? bigToString(element.startsAt, maximumSignificantDigits)
                      : bigToString(element.startsAt, 0)}{" "}
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
