import BitsTableDesktop from "@/components/BitsTable/BitsTableDesktop"
import BitsTableMobile from "@/components/BitsTable/BitsTableMobile"
import { useMediaQuery } from "@chakra-ui/media-query"

interface BitsTableProps {
  caption: string
  bits: Array<number>
  sumLabel?: string
}

export function BitsTable({ caption, bits, sumLabel }: BitsTableProps) {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  if (isMobile) {
    return <BitsTableMobile caption={caption} bits={bits} sumLabel={sumLabel} />
  } else {
    return <BitsTableDesktop caption={caption} bits={bits} sumLabel={sumLabel} />
  }
}

export default BitsTable
