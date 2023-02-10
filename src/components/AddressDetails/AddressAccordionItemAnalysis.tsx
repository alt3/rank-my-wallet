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
import nextId from "react-id-generator"
import { BitsTable, DataGrid, DataGridEntry, SectionHeader } from "src/components"
import { capitalize } from "src/lib"

export function AddressAccordionItemAnalysis({ parsedAddress, ...rest }) {
  const accordionIconColor = useColorModeValue("teal.500", "teal.300")

  return (
    <AccordionItem borderStyle="none" marginBottom={"0.5rem"}>
      <AccordionButton p={0}>
        <Box flex="1" textAlign="left">
          <SectionHeader>Address Analysis</SectionHeader>
        </Box>
        <Box as="span" verticalAlign="top" minHeight="3rem">
          <AccordionIcon color={accordionIconColor} />
        </Box>
      </AccordionButton>

      <AccordionPanel p={0} pb={4}>
        <DataGrid>
          <DataGridEntry field="Encoding" value={capitalize(parsedAddress.encoding)} />
          {parsedAddress.decoded !== undefined && parsedAddress.decoded.prefix !== undefined && (
            <DataGridEntry field="Decoded Prefix" value={parsedAddress.decoded.prefix} />
          )}

          {parsedAddress.payload.prefix !== undefined && (
            <DataGridEntry field="Prefix Byte" value={parsedAddress.payload.prefix.byte} />
          )}

          {parsedAddress.payload.checksum !== undefined && (
            <DataGridEntry field="Checksum" value={parsedAddress.payload.checksum.hex} />
          )}

          {parsedAddress.payload.content !== undefined && (
            <DataGridEntry field="Content" value={parsedAddress.payload.content.hex} />
          )}
        </DataGrid>

        <Text color={useColorModeValue("teal.500", "teal.300")} marginBottom="0.25rem">
          Decoded Bytes:
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
              caption="Prefix Bits:"
              bits={parsedAddress.payload.prefix.bits}
              sumLabel="Prefix Byte"
            ></BitsTable>

            <BitsTable
              caption="Leading Prefix Bits:"
              bits={parsedAddress.payload.prefix.leading.bits}
              sumLabel={parsedAddress.payload.prefix.leading.type}
            ></BitsTable>

            <BitsTable
              caption="Trailing Prefix Bits:"
              bits={parsedAddress.payload.prefix.trailing.bits}
              sumLabel={parsedAddress.payload.prefix.trailing.type}
            ></BitsTable>
          </>
        )}
      </AccordionPanel>
    </AccordionItem>
  )
}
export default AddressAccordionItemAnalysis
