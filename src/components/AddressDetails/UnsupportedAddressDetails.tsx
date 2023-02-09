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
  MetaTags,
  SectionHeader,
} from "src/components"
import { capitalize } from "src/lib"
import nextId from "react-id-generator"

export function UnsupportedAddressDetails({ parsed }) {
  const colorTeal = useColorModeValue("teal.500", "teal.300")

  return (
    <>
      <MetaTags
        title={`Rank My Wallet - Unrecognized Address`}
        description={`Unrecognized Address`}
        keywords={`blockchain, wallets, rankings, species, address-analyzer`}
      />

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
                    {parsed.blockchain.network && (
                      <DataGridEntry
                        field="Network"
                        value={capitalize(parsed.blockchain.network)}
                      />
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

                  {parsed.payload.prefix !== undefined && (
                    <>
                      <BitsTable
                        caption="Prefix Bits:"
                        bits={parsed.payload.prefix.bits}
                        sumLabel="Header Byte"
                      ></BitsTable>

                      <BitsTable
                        caption="Leading Prefix Bits:"
                        bits={parsed.payload.prefix.leading.bits}
                        sumLabel={parsed.payload.prefix.leading.type}
                      ></BitsTable>

                      <BitsTable
                        caption="Trailing Prefix Bits:"
                        bits={parsed.payload.prefix.trailing.bits}
                        sumLabel={parsed.payload.prefix.trailing.type}
                      ></BitsTable>
                    </>
                  )}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </>
        )}
      </Container>
    </>
  )
}

export default UnsupportedAddressDetails
