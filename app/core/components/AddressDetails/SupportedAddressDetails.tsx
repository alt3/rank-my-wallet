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
import {
  BitsTable,
  Counter,
  DataGrid,
  DataGridEntry,
  DataGridField,
  DataGridValue,
  RankingsTable,
  SectionHeader,
  TickerString,
} from "@components"
import { bigToString, capitalize } from "app/lib/utils"
import nextId from "react-id-generator"

export function SupportedAddressDetails({ parsed, addressCount, balance, species, rankings }) {
  const accordionIconColor = useColorModeValue("teal.500", "teal.300")
  const fractionsColor = useColorModeValue("gray.300", "gray.500")

  return (
    <Container maxW="container.md" marginBottom="2.5rem">
      <Counter
        blockchain={parsed.blockchain.name}
        totalAccounts={addressCount}
        rank={rankings.find(({ position }) => position === "current").rank}
      ></Counter>

      <SectionHeader>Species</SectionHeader>
      <DataGrid marginBottom={{ base: "0.5rem", sm: "0.5rem" }}>
        <DataGridEntry
          field="Your Balance"
          value={parsed.currency.tickerSymbol + " " + bigToString(balance.ticker, 0)}
        />

        <DataGridEntry
          field="Current Species"
          value={capitalize(species.current.name)}
          url={{
            href: `/species?blockchain=${parsed.blockchain.name}`,
            title: "Blockchain Species",
          }}
          linkColor={useColorModeValue("pink.600", "pink.400")}
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
              url={{
                href: `/species?blockchain=${parsed.blockchain.name}`,
                title: "Blockchain Species",
              }}
            />
            <DataGridEntry
              field="Starts At"
              value={parsed.currency.tickerSymbol + " " + bigToString(species.next.startsAt, 0)}
            />

            {/* NEXT SPECIES REQUIRES */}
            <DataGridField>Requires</DataGridField>
            <DataGridValue>
              <TickerString
                ticker={bigToString(species.next.requires, parsed.currency.decimals)}
                tickerSymbol={parsed.currency.tickerSymbol}
                fractionsColor={fractionsColor}
              ></TickerString>
            </DataGridValue>
          </>
        )}
      </DataGrid>

      <Accordion allowMultiple>
        {/* COMPETITION PANE - IF APPLICABLE */}
        {rankings.length > 1 && (
          <AccordionItem borderStyle="none" marginBottom={{ base: "1rem", sm: "0.5rem" }}>
            <h2>
              <AccordionButton p={0}>
                <Box flex="1" textAlign="left">
                  <SectionHeader>Competition</SectionHeader>
                </Box>
                <Box as="span" verticalAlign="top" minHeight="3rem">
                  <AccordionIcon color={accordionIconColor} />
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel p={0} pb="2rem">
              <DataGrid marginBottom={{ base: "0.5rem", sm: "0.5rem" }}>
                <DataGridEntry field="Competitors" value={bigToString(addressCount, 0)} />
              </DataGrid>
              <RankingsTable rankings={rankings} />
            </AccordionPanel>
          </AccordionItem>
        )}

        {/* ADDRESS DETAILS PANE */}
        <AccordionItem borderStyle="none" marginBottom={{ base: "1rem", sm: "0.5rem" }}>
          <h2>
            <AccordionButton p={0}>
              <Box flex="1" textAlign="left">
                <SectionHeader>Address Details</SectionHeader>
              </Box>
              <Box as="span" verticalAlign="top" minHeight="3rem">
                <AccordionIcon color={accordionIconColor} />
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel p={0} pb="2rem">
            <DataGrid marginBottom={{ base: "1.5rem", sm: "1.5rem" }}>
              <DataGridEntry
                field="Address"
                value={parsed.address}
                url={{
                  href: `${parsed.blockchain.explorerUrl + parsed.address}`,
                  title: `${capitalize(parsed.blockchain.name)} Explorer`,
                  isExternal: true,
                }}
              />

              <DataGridEntry
                field="Blockchain"
                value={`${capitalize(parsed.blockchain.name)} (${parsed.currency.ticker})`}
              />

              {parsed.blockchain.network && (
                <DataGridEntry field="Network" value={capitalize(parsed.blockchain.network)} />
              )}

              {parsed.version && (
                <DataGridEntry field="Version" value={capitalize(parsed.version)} />
              )}

              {parsed.type && (
                <DataGridEntry field="Address Type" value={capitalize(parsed.type.name)} />
              )}
            </DataGrid>
          </AccordionPanel>
        </AccordionItem>

        {/* ADDRESS ANALYSIS PANE */}
        <AccordionItem borderStyle="none">
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
              <DataGridEntry field="Encoding" value={capitalize(parsed.encoding)} />
              {parsed.decoded !== undefined && parsed.decoded.prefix !== undefined && (
                <DataGridEntry field="Decoded Prefix" value={parsed.decoded.prefix} />
              )}

              {parsed.payload.prefix !== undefined && (
                <DataGridEntry field="Prefix Byte" value={parsed.payload.prefix.byte} />
              )}

              {parsed.payload.checksum !== undefined && (
                <DataGridEntry field="Checksum" value={parsed.payload.checksum.hex} />
              )}

              {parsed.payload.content !== undefined && (
                <DataGridEntry field="Content" value={parsed.payload.content.hex} />
              )}
            </DataGrid>

            <Text color={useColorModeValue("teal.500", "teal.300")} marginBottom="0.25rem">
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
                  sumLabel="Prefix Byte"
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
    </Container>
  )
}

export default SupportedAddressDetails
