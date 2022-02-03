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

export function InvalidAddressDetails({ parsedAddress }) {
  const colorTeal = useColorModeValue("teal.500", "teal.300")

  return (
    <Container maxW="container.md" marginBottom="2.5rem">
      <ErrorHero
        title="Unsupported Address"
        subtitle={parsedAddress.unsupported.message}
      ></ErrorHero>

      <AddressForm
        placeholder="Try again?"
        marginTop={{ base: "3rem", sm: "5rem" }}
        marginBottom={{ base: "4rem", sm: "7rem" }}
      />

      {["cardano", "ergo"].includes(parsedAddress.blockchain.name) && (
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
                  <DataGridEntry field="Address" value={parsedAddress.address} />
                  <DataGridEntry
                    field="Blockchain"
                    value={`${capitalize(parsedAddress.blockchain.name)} (${
                      parsedAddress.currency.ticker
                    })`}
                  />
                  {parsedAddress.version && (
                    <DataGridEntry
                      field="Address Version"
                      value={capitalize(parsedAddress.version)}
                    />
                  )}
                  {parsedAddress.network && (
                    <DataGridEntry field="Network" value={capitalize(parsedAddress.network)} />
                  )}
                  {parsedAddress.type && (
                    <DataGridEntry
                      field="Address Type"
                      value={capitalize(parsedAddress.type.name)}
                    />
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
                  <DataGridEntry field="Encoding" value={capitalize(parsedAddress.encoding)} />
                  {parsedAddress.decoded !== undefined &&
                    parsedAddress.decoded.prefix !== undefined && (
                      <DataGridEntry field="Decoded Prefix" value={parsedAddress.decoded.prefix} />
                    )}

                  {parsedAddress.header !== undefined && (
                    <DataGridEntry field="Header Byte" value={parsedAddress.header.byte} />
                  )}
                </DataGrid>

                <Text color={colorTeal} marginBottom="0.25rem">
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

                {parsedAddress.header !== undefined && (
                  <>
                    <BitsTable
                      caption="Header Bits:"
                      bits={parsedAddress.header.bits}
                      sumLabel="Header Byte"
                    ></BitsTable>

                    <BitsTable
                      caption="Leading Header Bits:"
                      bits={parsedAddress.header.leading.bits}
                      sumLabel={parsedAddress.header.leading.type}
                    ></BitsTable>

                    <BitsTable
                      caption="Trailing Header Bits:"
                      bits={parsedAddress.header.trailing.bits}
                      sumLabel={parsedAddress.header.trailing.type}
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

export default InvalidAddressDetails
