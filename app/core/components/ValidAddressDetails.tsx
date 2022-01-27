import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { BitsTable, DataGrid, DataGridEntry, SectionHeader } from "@components"
import { capitalize, getSpecies, getNextSpecies } from "app/lib/utils"
import nextId from "react-id-generator"

export function ValidAddressDetails({ parsedAddress, balance }) {
  const species = getSpecies(parsedAddress.blockchain, balance)
  const nextSpecies = getNextSpecies(parsedAddress.blockchain, species.name)

  return (
    <Container maxW="container.md" marginBottom="2.5rem">
      <SectionHeader>Address Details</SectionHeader>

      <DataGrid marginBottom={{ base: "1.5rem", sm: "1.5rem" }}>
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

      <SectionHeader>Species</SectionHeader>
      <DataGrid marginBottom={{ base: "1.5rem", sm: "1.5rem" }}>
        <DataGridEntry
          field="Balance"
          value={parsedAddress.currencySymbol + " " + balance.toLocaleString(undefined)}
        />
        <DataGridEntry
          field="Current Species"
          value={capitalize(species.name)}
          url={{ href: "/species", title: "Blockchain Species" }}
        />

        {nextSpecies === undefined && (
          <DataGridEntry
            field="Next Level"
            value="Nothing more to strive for, you're an end boss now 🎉"
          />
        )}

        {nextSpecies !== undefined && (
          <>
            <DataGridEntry
              field="Next Level"
              value={capitalize(nextSpecies.name)}
              url={{ href: "/species", title: "Blockchain Species" }}
            />
            <DataGridEntry
              field="Starts At"
              value={
                parsedAddress.currencySymbol + " " + nextSpecies.startsAt.toLocaleString(undefined)
              }
            />
            <DataGridEntry
              field="Requires"
              value={
                parsedAddress.currencySymbol +
                " " +
                (nextSpecies.startsAt - balance).toLocaleString(undefined)
              }
            />
          </>
        )}
      </DataGrid>

      <Accordion allowToggle>
        <AccordionItem borderStyle="none">
          <AccordionButton p={0}>
            <SectionHeader flex="1" textAlign="left">
              Address Analysis
            </SectionHeader>
            <Box as="span" verticalAlign="top" minHeight="3rem">
              <AccordionIcon color={useColorModeValue("teal.500", "teal.300")} />
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

            <Text color={useColorModeValue("teal.500", "teal.300")} marginBottom="0.25rem">
              Decoded Bytes:
            </Text>
            <Grid
              templateColumns={{ base: "repeat(4, 1fr)", sm: "repeat(6, 1fr)" }}
              paddingBottom="1.5rem"
            >
              {parsedAddress.bytes.map((byte) => (
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
    </Container>
  )
}

export default ValidAddressDetails
