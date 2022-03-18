import { useMediaQuery } from "@chakra-ui/react"
import RankingsTableDesktop from "./RankingsTableDesktop"
import RankingsTableMobile from "./RankingsTableMobile"

interface RankingsTableProps {
  rankings: Array<{
    address: string
    balance: number
    rank: number
    position: string
  }>
}

export function RankingsTable({ rankings }: RankingsTableProps) {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  if (isMobile) {
    return <RankingsTableMobile rankings={rankings} tickerSymbol={"Σ"} />
  } else {
    return <RankingsTableDesktop rankings={rankings} tickerSymbol={"Σ"} />
  }
}

export default RankingsTable
