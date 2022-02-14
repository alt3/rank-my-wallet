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
import { bigToString, capitalize } from "app/lib/utils"
import nextId from "react-id-generator"

export function SupportedAddressDetails({ parsed, rank, account, species }) {
  return (
    <Container maxW="container.md" marginBottom="2.5rem">
      <Counter
        blockchain={parsed.blockchain.name}
        totalAccounts={rank.totalAccounts}
        rank={rank.rank}
      ></Counter>

      <SectionHeader>Species</SectionHeader>
      <DataGrid marginBottom={{ base: "0.5rem", sm: "0.5rem" }}>
        <DataGridEntry
          field="Balance"
          value={parsed.currency.tickerSymbol + " " + bigToString(account.balance.ticker, 0)}
        />
        <DataGridEntry
          field="Current Species"
          value={capitalize(species.current.name)}
          url={{
            href: `/species?blockchain=${parsed.blockchain.name}`,
            title: "Blockchain Species",
          }}
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
            <DataGridEntry
              field="Requires"
              value={
                parsed.currency.tickerSymbol +
                " " +
                bigToString(species.next.requires, parsed.currency.decimals)
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
              <AccordionIcon color={useColorModeValue("teal.500", "teal.300")} />
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
    </Container>
  )
}

export default SupportedAddressDetails
