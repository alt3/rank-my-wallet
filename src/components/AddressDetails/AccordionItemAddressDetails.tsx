import { SectionHeader } from "@/components/AddressDetails/SectionHeader"
import { DataGrid } from "@/components/DataGrid"
import { DataGridEntry } from "@/components/DataGridEntry"
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/accordion"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box } from "@chakra-ui/layout"
import { Trans, t } from "@lingui/macro"
import { useLingui } from "@lingui/react"

export function AccordionItemAddressDetails({ parsedAddress, ...rest }) {
  useLingui()

  const accordionIconColor = useColorModeValue("teal.500", "teal.300")

  return (
    <AccordionItem borderStyle="none" marginBottom={{ base: "1rem", md: "0.5rem" }}>
      <h2>
        <AccordionButton p={0}>
          <Box flex="1" textAlign="left">
            <SectionHeader>
              <Trans>Address Details</Trans>
            </SectionHeader>
          </Box>
          <Box as="span" verticalAlign="top" minHeight="3rem">
            <AccordionIcon color={accordionIconColor} />
          </Box>
        </AccordionButton>
      </h2>
      <AccordionPanel p={0}>
        <DataGrid marginBottom={{ base: "1.5rem", sm: "1.5rem" }}>
          <DataGridEntry
            field={t`Address`}
            value={parsedAddress.address}
            url={{
              href: `${parsedAddress.blockchain.explorerUrl + parsedAddress.address}`,
              isExternal: true,
            }}
          />

          <DataGridEntry
            field={t`Blockchain`}
            value={`${parsedAddress.blockchain.name} (${parsedAddress.currency.ticker})`}
          />

          {parsedAddress.blockchain.network && (
            <DataGridEntry field={t`Network`} value={parsedAddress.blockchain.network} />
          )}

          {parsedAddress.version && (
            <DataGridEntry field={t`Version`} value={parsedAddress.version} />
          )}

          {parsedAddress.type && (
            <DataGridEntry field={t`Address Type`} value={parsedAddress.type.name} />
          )}
        </DataGrid>
      </AccordionPanel>
    </AccordionItem>
  )
}
export default AccordionItemAddressDetails
