import { Table, Tbody, Td, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react"
import { Link } from "@components"
import { abbreviateAddress, bigToString, nanoToTicker } from "app/lib/utils"
import nextId from "react-id-generator"

interface RankingsTableProps {
  rankings: Array<{
    address: string
    balance: number
    rank: number
    position: string
  }>
  currencySymbol: "₳" | "Σ"
}

export function RankingsTableDesktop({ rankings, currencySymbol }: RankingsTableProps) {
  const currentAddressColor = useColorModeValue("teal.600", "teal.500")

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
  }

  return (
    <Table variant="simple" {...styles.table}>
      <Thead>
        <Tr>
          <Th {...styles.left} maxWidth="10px">
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
                color={element.position === "current" ? currentAddressColor : "inherit"}
              >
                {bigToString(element.rank, 0)}
              </Td>

              <Td
                {...styles.left}
                color={element.position === "current" ? currentAddressColor : "inherit"}
              >
                <Link
                  href={`https://explorer.ergoplatform.com/en/addresses/${element.address}`}
                  title={"Ergo Explorer"}
                  passHref
                  isExternal
                >
                  {abbreviateAddress(element.address)}
                </Link>
              </Td>

              <Td
                {...styles.right}
                whiteSpace="nowrap"
                color={element.position === "current" ? currentAddressColor : "inherit"}
              >
                {currencySymbol + " " + bigToString(nanoToTicker(element.balance.toString(), 9), 9)}
              </Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
}

export default RankingsTableDesktop
