import { Box, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react"
import { Link, TickerString } from "@components"
import { abbreviateAddress, bigToString, nanoToTicker } from "app/lib/utils"
import nextId from "react-id-generator"

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
  const fractionsColor = useColorModeValue("gray.300", "gray.500")

  const styles = {
    table: {
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
            Rank
          </Th>
          <Th {...styles.left}>Address</Th>
          <Th {...styles.right} textAlign="right">
            Balance
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
                {bigToString(element.rank, 0)}

                {element.position === "current" && (
                  <Box as="span" {...styles.asterisk} title="Your rank">
                    *
                  </Box>
                )}
              </Td>

              <Td {...styles.left} whiteSpace="nowrap">
                <Link
                  href={`https://explorer.ergoplatform.com/en/addresses/${element.address}`}
                  title={"Ergo Explorer"}
                  passHref
                  isExternal
                  whiteSpace="nowrap"
                >
                  {abbreviateAddress(element.address)}
                </Link>
              </Td>

              <Td {...styles.right}>
                <TickerString
                  ticker={bigToString(nanoToTicker(element.balance.toString(), 9), 9)}
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
