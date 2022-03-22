import { Box } from "@chakra-ui/react"
import { Link } from "@components"
import { HiExternalLink } from "react-icons/hi"
import { DataGridField } from "./DataGridField"
import { DataGridValue } from "./DataGridValue"

interface DataGridEntryProps {
  field: string
  value: string
  url?: {
    href: string
    title: string
    isExternal?: boolean
  }
  linkColor?: string
  linkIcon?: boolean
}

export const DataGridEntry = ({ field, value, url, linkColor, linkIcon }: DataGridEntryProps) => {
  if (url) {
    return (
      <>
        <DataGridField>{field}</DataGridField>

        <DataGridValue>
          <Box>
            <Link
              href={url.href}
              title={url.title}
              color={linkColor}
              passHref
              isExternal={url.isExternal}
            >
              {value}{" "}
              {linkIcon && (
                <span>
                  <Box as={HiExternalLink} viewBox="0 0 20 15" />
                </span>
              )}
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
