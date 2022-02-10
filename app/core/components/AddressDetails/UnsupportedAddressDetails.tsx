import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import {
  AddressForm,
  BitsTable,
  DataGrid,
  DataGridEntry,
  ErrorHero,
  SectionHeader,
} from "@components"
import { capitalize } from "app/lib/utils"
import nextId from "react-id-generator"

export function UnsupportedAddressDetails({ parsed }) {
  const colorTeal = useColorModeValue("teal.500", "teal.300")

  return (
    <Container maxW="container.md" marginBottom="2.5rem">
      <ErrorHero title="Unsupported Address" subtitle={parsed.unsupported.message}></ErrorHero>

      <AddressForm
        placeholder="Try again?"
        marginTop={{ base: "3rem", sm: "5rem" }}
        marginBottom={{ base: "4rem", sm: "7rem" }}
      />

      {["cardano", "ergo"].includes(parsed.blockchain.name) && (
        <>
          <Divider marginBottom={{ base: "1.5rem", sm: "1.5rem" }} />

          <Accordion allowMultiple>
            <AccordionItem borderStyle="none" marginBottom={{ base: "1rem", sm: "0.5rem" }}>
              <h2>
                <AccordionButton p={0}>
                  <Box flex="1" textAlign="left">
                    <SectionHeader>Address Details</SectionHeader>
                  </Box>
                  <Box as="span" verticalAlign="top" minHeight="3rem">
                    <AccordionIcon color={colorTeal} />
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel p={0} pb="2rem">
                <DataGrid marginBottom={{ base: "1.5rem", sm: "1.5rem" }}>
                  <DataGridEntry field="Address" value={parsed.address} />
                  <DataGridEntry
                    field="Blockchain"
                    value={`${capitalize(parsed.blockchain.name)} (${parsed.currency.ticker})`}
                  />
                  {parsed.version && (
                    <DataGridEntry field="Address Version" value={capitalize(parsed.version)} />
                  )}
                  {parsed.network && (
                    <DataGridEntry field="Network" value={capitalize(parsed.network)} />
                  )}
                  {parsed.type && (
                    <DataGridEntry field="Address Type" value={capitalize(parsed.type.name)} />
                  )}
                </DataGrid>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderStyle="none">
              <AccordionButton p={0}>
                <Box flex="1" textAlign="left">
                  <SectionHeader>Address Analysis</SectionHeader>
                </Box>
                <Box as="span" verticalAlign="top" minHeight="3rem">
                  <AccordionIcon color={colorTeal} />
                </Box>
              </AccordionButton>

              <AccordionPanel p={0} pb={4}>
                <DataGrid>
                  <DataGridEntry field="Encoding" value={capitalize(parsed.encoding)} />
                  {parsed.decoded !== undefined && parsed.decoded.prefix !== undefined && (
                    <DataGridEntry field="Decoded Prefix" value={parsed.decoded.prefix} />
                  )}

                  {parsed.header !== undefined && (
                    <DataGridEntry field="Header Byte" value={parsed.header.byte} />
                  )}
                </DataGrid>

                <Text color={colorTeal} marginBottom="0.25rem">
                  Decoded Bytes:
                </Text>
                <Grid
                  templateColumns={{ base: "repeat(4, 1fr)", sm: "repeat(6, 1fr)" }}
                  paddingBottom="1.5rem"
                >
                  {parsed.decoded.bytes.map((byte) => (
                    <GridItem key={nextId("byte")}>{byte}</GridItem>
                  ))}
                </Grid>

                {parsed.header !== undefined && (
                  <>
                    <BitsTable
                      caption="Header Bits:"
                      bits={parsed.header.bits}
                      sumLabel="Header Byte"
                    ></BitsTable>

                    <BitsTable
                      caption="Leading Header Bits:"
                      bits={parsed.header.leading.bits}
                      sumLabel={parsed.header.leading.type}
                    ></BitsTable>

                    <BitsTable
                      caption="Trailing Header Bits:"
                      bits={parsed.header.trailing.bits}
                      sumLabel={parsed.header.trailing.type}
                    ></BitsTable>
                  </>
                )}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </>
      )}
    </Container>
  )
}

export default UnsupportedAddressDetails
