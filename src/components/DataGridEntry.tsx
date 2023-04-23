import { DataGridField } from "@/components/DataGridField"
import { DataGridValue } from "@/components/DataGridValue"
import { ExternalLinkIcon } from "@/components/ExternalLinkIcon"
import { Link } from "@/components/Link"
import { Box } from "@chakra-ui/layout"

interface DataGridEntryProps {
  field: string
  value: string
  url?: {
    href: string
    isExternal?: boolean
  }
  linkColor?: string
}

export const DataGridEntry = ({ field, value, url, linkColor }: DataGridEntryProps) => {
  if (url) {
    return (
      <>
        <DataGridField>{field}</DataGridField>

        <DataGridValue>
          <Box>
            <Link href={url.href} color={linkColor} passHref isExternal={url.isExternal}>
              {value} {url.isExternal && <ExternalLinkIcon />}
            </Link>
          </Box>
        </DataGridValue>
      </>
    )
  }

  return (
    <>
      <DataGridField>{field}</DataGridField>
      <DataGridValue>{value}</DataGridValue>
    </>
  )
}

export default DataGridEntry
