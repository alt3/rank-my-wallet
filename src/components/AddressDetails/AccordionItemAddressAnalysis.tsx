import { SectionHeader } from "@/components/AddressDetails/SectionHeader"
import { BitsTable } from "@/components/BitsTable"
import { DataGrid } from "@/components/DataGrid"
import { DataGridEntry } from "@/components/DataGridEntry"
import { Accordion, Box, Grid, GridItem, Text } from "@chakra-ui/react"
import { useColorModeValue } from "src/core/theme/color-mode"
import { t } from "@lingui/core/macro"
import { Trans } from "@lingui/react/macro"
import { useLingui } from "@lingui/react"
import nextId from "react-id-generator"
import { getRTL } from "src/translations/utils"

export function AccordionItemAddressAnalysis({ parsedAddress }) {
  const { i18n } = useLingui()
  const rtl = getRTL(i18n.locale)

  const accordionIconColor = useColorModeValue("teal.500", "teal.300")

  return (
    <Accordion.Item value="address-analysis" borderStyle="none" marginBottom={{ base: "1rem", md: "0.5rem" }}>
      <Accordion.ItemTrigger p={0}>
        <Box flex="1" textAlign={rtl.left}>
          <SectionHeader>
            <Trans>Address Analysis</Trans>
          </SectionHeader>
        </Box>
        <Box as="span" verticalAlign="top" minHeight="3rem">
          <Accordion.ItemIndicator color={accordionIconColor} />
        </Box>
      </Accordion.ItemTrigger>

      <Accordion.ItemContent p={0} pb={4}>
        <DataGrid>
          <DataGridEntry field={t`Encoding`} value={parsedAddress.encoding} />
          {parsedAddress.decoded !== undefined && parsedAddress.decoded.prefix !== undefined && (
            <DataGridEntry field="Decoded Prefix" value={parsedAddress.decoded.prefix} />
          )}

          {parsedAddress.payload.prefix !== undefined && (
            <DataGridEntry field={t`Prefix Byte`} value={parsedAddress.payload.prefix.byte} />
          )}

          {parsedAddress.payload.checksum !== undefined && (
            <DataGridEntry field={t`Checksum`} value={parsedAddress.payload.checksum.hex} />
          )}

          {parsedAddress.payload.content !== undefined && (
            <DataGridEntry field={t`Content`} value={parsedAddress.payload.content.hex} />
          )}
        </DataGrid>

        <Text color={useColorModeValue("teal.500", "teal.300")} marginBottom="0.25rem">
          <Trans>Decoded Bytes:</Trans>
        </Text>
        <Grid
          templateColumns={{ base: "repeat(4, 1fr)", sm: "repeat(6, 1fr)" }}
          paddingBottom="1.5rem"
        >
          {parsedAddress.decoded.bytes.map((byte) => (
            <GridItem key={nextId("byte")}>{byte}</GridItem>
          ))}
        </Grid>

        {parsedAddress.payload.prefix !== undefined && (
          <>
            <BitsTable
              caption={t`Prefix Bits:`}
              bits={parsedAddress.payload.prefix.bits}
              sumLabel={t`Prefix Byte`}
            ></BitsTable>

            <BitsTable
              caption={t`Leading Prefix Bits:`}
              bits={parsedAddress.payload.prefix.leading.bits}
              sumLabel={i18n._(parsedAddress.payload.prefix.leading.type)}
            ></BitsTable>

            <BitsTable
              caption={t`Trailing Prefix Bits:`}
              bits={parsedAddress.payload.prefix.trailing.bits}
              sumLabel={i18n._(parsedAddress.payload.prefix.trailing.type)}
            ></BitsTable>
          </>
        )}
      </Accordion.ItemContent>
    </Accordion.Item>
  )
}
export default AccordionItemAddressAnalysis
