import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  useColorModeValue,
} from "@chakra-ui/react"
import { DataGrid, DataGridEntry, SectionHeader } from "src/components"
import { capitalize } from "src/lib"

export function AddressAccordionItemDetails({ parsedAddress, ...rest }) {
  const accordionIconColor = useColorModeValue("teal.500", "teal.300")

  return (
    <AccordionItem borderStyle="none" marginBottom={{ base: "1rem", sm: "0.5rem" }}>
      <h2>
        <AccordionButton p={0}>
          <Box flex="1" textAlign="left">
            <SectionHeader>Address Details</SectionHeader>
          </Box>
          <Box as="span" verticalAlign="top" minHeight="3rem">
            <AccordionIcon color={accordionIconColor} />
          </Box>
        </AccordionButton>
      </h2>
      <AccordionPanel p={0}>
        <DataGrid marginBottom={{ base: "1.5rem", sm: "1.5rem" }}>
          <DataGridEntry
            field="Address"
            value={parsedAddress.address}
            url={{
              href: `${parsedAddress.blockchain.explorerUrl + parsedAddress.address}`,
              title: `${capitalize(parsedAddress.blockchain.name)} Explorer`,
              isExternal: true,
            }}
          />

          <DataGridEntry
            field="Blockchain"
            value={`${capitalize(parsedAddress.blockchain.name)} (${
              parsedAddress.currency.ticker
            })`}
          />

          {parsedAddress.blockchain.network && (
            <DataGridEntry field="Network" value={capitalize(parsedAddress.blockchain.network)} />
          )}

          {parsedAddress.version && (
            <DataGridEntry field="Version" value={capitalize(parsedAddress.version)} />
          )}

          {parsedAddress.type && (
            <DataGridEntry field="Address Type" value={capitalize(parsedAddress.type.name)} />
          )}
        </DataGrid>
      </AccordionPanel>
    </AccordionItem>
  )
}
export default AddressAccordionItemDetails
