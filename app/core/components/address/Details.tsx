import { SectionHeader } from "@/components/address"
import { DataGrid, DataGridEntry } from "@/components/data-grid"
import { Box } from "@chakra-ui/react"
import { capitalize } from "app/lib/utils"

export function AddressDetails({ parsedAddress }) {
  return (
    <Box marginBottom="2.5rem">
      <SectionHeader>Address Details</SectionHeader>

      <DataGrid>
        <DataGridEntry field="Address" value={parsedAddress.address} />
        <DataGridEntry field="Blockchain" value={capitalize(parsedAddress.blockchain)} />
        {parsedAddress.version && (
          <DataGridEntry field="Address Version" value={capitalize(parsedAddress.version)} />
        )}
        {parsedAddress.network && (
          <DataGridEntry field="Network" value={capitalize(parsedAddress.network)} />
        )}
        {parsedAddress.type && (
          <DataGridEntry field="Address Type" value={capitalize(parsedAddress.type.name)} />
        )}
      </DataGrid>
    </Box>
  )
}

export default AddressDetails
