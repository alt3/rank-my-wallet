import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  useColorModeValue,
} from "@chakra-ui/react"
import { t, Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { DataGrid, DataGridEntry, SectionHeader } from "src/components"

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
            value={`${t({ id: parsedAddress.blockchain.name })} (${parsedAddress.currency.ticker})`}
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
