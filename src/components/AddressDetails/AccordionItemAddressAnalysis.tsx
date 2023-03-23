import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { t, Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import nextId from "react-id-generator"
import { BitsTable, DataGrid, DataGridEntry, SectionHeader } from "src/components"

export function AccordionItemAddressAnalysis({ parsedAddress, ...rest }) {
  const { i18n } = useLingui()

  const accordionIconColor = useColorModeValue("teal.500", "teal.300")

  return (
    <AccordionItem borderStyle="none" marginBottom={{ base: "1rem", md: "0.5rem" }}>
      <AccordionButton p={0}>
        <Box flex="1" textAlign="left">
          <SectionHeader>
            <Trans>Address Analysis</Trans>
          </SectionHeader>
        </Box>
        <Box as="span" verticalAlign="top" minHeight="3rem">
          <AccordionIcon color={accordionIconColor} />
        </Box>
      </AccordionButton>

      <AccordionPanel p={0} pb={4}>
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
      </AccordionPanel>
    </AccordionItem>
  )
}
export default AccordionItemAddressAnalysis
