import { DataGridField } from "./DataGridField"
import { DataGridValue } from "./DataGridValue"
import { Link } from "@components"

interface DataGridEntryProps {
  field: string
  value: string
  url?: {
    href: string
    title: string
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
          <Link
            href={url.href}
            title={url.title}
            color={linkColor}
            passHref
            isExternal={url.isExternal}
          >
            {value}
          </Link>
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
