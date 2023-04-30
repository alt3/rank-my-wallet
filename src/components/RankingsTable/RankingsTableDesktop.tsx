import { ExternalLinkIcon } from "@/components/ExternalLinkIcon"
import { Link } from "@/components/Link"
import { TickerString } from "@/components/TickerString"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box } from "@chakra-ui/layout"
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table"
import { Trans, t } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import nextId from "react-id-generator"
import { abbreviateAddress } from "src/lib/abbreviateAddress"
import { bigToString } from "src/lib/bigToString"
import { nanoToTicker } from "src/lib/nanoToTicker"

interface RankingsTableProps {
  rankings: Array<{
    address: string
    balance: number
    rank: number
    position: string
  }>
  tickerSymbol: "₳" | "Σ"
}

export function RankingsTableDesktop({ rankings, tickerSymbol }: RankingsTableProps) {
  const { i18n } = useLingui()

  const fractionsColor = useColorModeValue("gray.300", "gray.500")

  const styles = {
    table: {
      marginBottom: "3rem",
    },
    left: {
      textAlign: "left" as const,
      paddingStart: 0,
    },
    right: {
      textAlign: "right" as const,
      paddingEnd: 0,
    },
    asterisk: {
      verticalAlign: "super",
      fontSize: "smaller",
      lineHeight: "normal",
    },
  }

  return (
    <Table variant="simple" {...styles.table}>
      <Thead>
        <Tr>
          <Th {...styles.left} maxWidth="10px" whiteSpace="nowrap">
            <Trans>Rank</Trans>
          </Th>
          <Th {...styles.left}>
            <Trans>Address</Trans>
          </Th>
          <Th {...styles.right} textAlign="right">
            <Trans>Balance</Trans>
          </Th>
        </Tr>
      </Thead>

      <Tbody>
        {/* One row per competitor */}
        {rankings.map((element) => {
          return (
            <Tr key={nextId("tr")}>
              <Td
                {...styles.left}
                maxWidth="80px"
                whiteSpace="nowrap"
                fontFamily="Inter, monospace"
              >
                {bigToString(element.rank, i18n.locale, 0)}

                {element.position === "current" && (
                  <Box as="span" {...styles.asterisk} title={t`Your Rank`}>
                    *
                  </Box>
                )}
              </Td>

              <Td {...styles.left} whiteSpace="nowrap">
                <Link
                  href={`https://explorer.ergoplatform.com/en/addresses/${element.address}`}
                  passHref
                  isExternal
                  whiteSpace="nowrap"
                >
                  {abbreviateAddress(element.address)} <ExternalLinkIcon />
                </Link>
              </Td>

              <Td {...styles.right}>
                <TickerString
                  ticker={bigToString(nanoToTicker(element.balance.toString(), 9), i18n.locale, 9)}
                  tickerSymbol={tickerSymbol}
                  fractionsColor={fractionsColor}
                ></TickerString>
              </Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default RankingsTableDesktop
