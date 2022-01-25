import { DataGridField } from "./DataGridField"
import { DataGridValue } from "./DataGridValue"

interface DataGridEntryProps {
  field: string
  value: string
}

export const DataGridEntry = ({ field, value }: DataGridEntryProps) => {
  return (
    <>
      <DataGridField>{field}</DataGridField>
      <DataGridValue>{value}</DataGridValue>
    </>
  )
}

export default DataGridEntry
