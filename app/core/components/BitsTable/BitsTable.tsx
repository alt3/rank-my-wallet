import BitsTableMobile from "./BitsTableMobile"
import { useMediaQuery } from "@chakra-ui/react"

interface BitsTableProps {
  caption: string
  bits: Array<number>
  sumLabel?: string
}

export function BitsTable({ caption, bits, sumLabel }: BitsTableProps) {
  const [isMobile] = useMediaQuery("(max-width: 768px)")
  // const reversedBits = [...bits].reverse() // create reversed clone so we can render top-down bits

  if (isMobile) {
    return <BitsTableMobile caption={caption} bits={bits} sumLabel={sumLabel} />
  } else {
    return <h2>No BitsTable for desktop yet</h2>
  }
}

export default BitsTable
