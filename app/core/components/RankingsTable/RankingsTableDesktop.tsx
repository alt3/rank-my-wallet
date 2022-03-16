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
  const styles = {
    caption: {
      color: useColorModeValue("teal.500", "teal.300"),
    },
    table: {
      marginBottom: "3rem",
    },
    currentAddress: {
      color: useColorModeValue("teal.600", "teal.500"),
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
    <>
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
          {/* One row per specie */}
          {rankings.map((element) => {
            return (
              <Tr key={nextId("tr")}>
                <Td {...styles.left} maxWidth="80px" whiteSpace="nowrap">
                  {bigToString(element.rank, 0)}
                </Td>

                {element.position === "current" && (
                  <Td {...styles.left} {...styles.currentAddress}>
                    Your address
                  </Td>
                )}
                {element.position !== "current" && (
                  <Td {...styles.left}>
                    <Link
                      href={`https://explorer.ergoplatform.com/en/addresses/${element.address}`}
                      title={"Ergo Explorer"}
                      passHref
                      isExternal
                    >
                      {abbreviateAddress(element.address)}
                    </Link>
                  </Td>
                )}

                <Td {...styles.right} whiteSpace="nowrap">
                  {currencySymbol +
                    " " +
                    bigToString(nanoToTicker(element.balance.toString(), 9), 9)}
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </>
  )
}

export default RankingsTableDesktop
