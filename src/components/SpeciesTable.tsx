import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, Center } from "@chakra-ui/layout"
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table"
import { MessageDescriptor } from "@lingui/core"
import { Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import nextId from "react-id-generator"
import { bigToString } from "src/lib/bigToString"
import { getRTL } from "src/translations/utils"

interface SpeciesTableProps {
  blockchain: "Cardano" | "Ergo"
  tickerSymbol: "₳" | "Σ"
  species: {
    startsAt: number
    name: MessageDescriptor
  }[]
}

export function SpeciesTable({ blockchain, tickerSymbol, species }: SpeciesTableProps) {
  const { i18n } = useLingui()
  const rtl = getRTL(i18n.locale)

  const maximumSignificantDigits = blockchain === "Cardano" ? 6 : 8

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
    th: {
      fontSize: "sm",
    },
    left: {
      paddingStart: 0,
    },
    right: {
      paddingEnd: 0,
    },
  }

  return (
    <Center>
      <Table variant="simple" {...styles.table}>
        <Thead>
          <Tr>
            <Th {...styles.th} {...styles.left} textAlign={rtl.left} maxWidth="10px">
              #
            </Th>
            <Th {...styles.th} {...styles.left} textAlign={rtl.left}>
              <Trans context="Singular">Species</Trans>
            </Th>
            <Th {...styles.th} {...styles.right} textAlign={rtl.right}>
              <Trans>Starts At</Trans>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {/* One row per species */}
          {species.map((element, i) => {
            return (
              <Tr key={nextId("tr")}>
                <Td
                  {...styles.left}
                  textAlign={rtl.left}
                  color="gray.500"
                  fontWeight="bolder"
                  maxWidth="10px"
                  whiteSpace="nowrap"
                  paddingEnd={{ base: "2rem", sm: 0 }}
                >
                  {i + 1}
                </Td>
                <Td {...styles.left} textAlign={rtl.left}>
                  {i18n._(element.name)}
                </Td>
                <Td {...styles.right} textAlign={rtl.right}>
                  <Box as="span" whiteSpace="nowrap">
                    <Box as="span" {...styles.currency} paddingEnd={"0.25rem"}>
                      {tickerSymbol}
                    </Box>{" "}
                    {element.startsAt.toString().match("^(?!([0-9]+$)).*$")
                      ? bigToString(element.startsAt, i18n.locale, maximumSignificantDigits)
                      : bigToString(element.startsAt, i18n.locale, 0)}{" "}
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
