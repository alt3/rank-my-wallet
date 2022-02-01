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
import { BitsTable, Counter, DataGrid, DataGridEntry, SectionHeader } from "@components"
import { capitalize } from "app/lib/utils"
import { bigToString } from "app/lib/utils2"
import nextId from "react-id-generator"

export function ValidAddressDetails({ parsedAddress, account, rank, species }) {
  return (
    <Container maxW="container.md" marginBottom="2.5rem">
      <Counter
        blockchain={parsedAddress.blockchain}
        addressCount={rank.addressCount}
        rank={rank.position}
      ></Counter>

      <SectionHeader>Species</SectionHeader>
      <DataGrid marginBottom={{ base: "0.5rem", sm: "0.5rem" }}>
        <DataGridEntry
          field="Balance"
          value={parsedAddress.currency.tickerSymbol + " " + bigToString(account.balance.ticker, 0)}
        />
        <DataGridEntry
          field="Current Species"
          value={capitalize(species.current.name)}
          url={{ href: "/species", title: "Blockchain Species" }}
        />

        {species.next === undefined && (
          <DataGridEntry
            field="Next Level"
            value="Nothing more to strive for, you're an end boss now 🎉"
          />
        )}

        {species.next !== undefined && (
          <>
            <DataGridEntry
              field="Next Level"
              value={capitalize(species.next.name)}
              url={{ href: "/species", title: "Blockchain Species" }}
            />
            <DataGridEntry
              field="Starts At"
              value={
                parsedAddress.currency.tickerSymbol + " " + bigToString(species.next.startsAt, 0)
              }
            />
            <DataGridEntry
              field="Requires"
              value={
                parsedAddress.currency.tickerSymbol +
                " " +
                bigToString(species.next.requires, parsedAddress.currency.decimals)
              }
            />
          </>
        )}
      </DataGrid>

      <Accordion allowMultiple>
        <AccordionItem borderStyle="none" marginBottom={{ base: "1rem", sm: "0.5rem" }}>
          <h2>
            <AccordionButton p={0}>
              <Box flex="1" textAlign="left">
                <SectionHeader>Address Details</SectionHeader>
              </Box>
              <Box as="span" verticalAlign="top" minHeight="3rem">
                <AccordionIcon color={useColorModeValue("teal.500", "teal.300")} />
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel p={0} pb="2rem">
            <DataGrid marginBottom={{ base: "1.5rem", sm: "1.5rem" }}>
              <DataGridEntry field="Address" value={parsedAddress.address} />
              <DataGridEntry
                field="Blockchain"
                value={`${capitalize(parsedAddress.blockchain)} (${parsedAddress.currency.ticker})`}
              />
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
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem borderStyle="none">
          <AccordionButton p={0}>
            <Box flex="1" textAlign="left">
              <SectionHeader>Address Analysis</SectionHeader>
            </Box>
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
    </Container>
  )
}

export default ValidAddressDetails
