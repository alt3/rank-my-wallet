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
  useColorModeValue,
} from "@chakra-ui/react"
import {
  AddressAccordionItemAnalysis,
  AddressAccordionItemDetails,
  Counter,
  DataGrid,
  DataGridEntry,
  ExternalLinkIcon,
  Link,
  MetaTags,
  PleaseDonate,
  RankingsTable,
  SectionHeader,
  TickerString,
} from "src/components"
import {
  CrabIcon,
  FishIcon,
  GhostIcon,
  JellyfishIcon,
  OctopusIcon,
  OrcaIcon,
  OysterIcon,
  PipefishIcon,
  PiranhaIcon,
  PlanktonIcon,
  SeahorseIcon,
  SharkIcon,
  ShellIcon,
  ShrimpIcon,
  StarfishIcon,
  SwordfishIcon,
  WhaleIcon,
} from "src/components/Images/Species"
import { bigToString, capitalize } from "src/lib"

const imageComponents = {
  Crab: CrabIcon,
  Fish: FishIcon,
  Ghost: GhostIcon,
  Jellyfish: JellyfishIcon,
  Octopus: OctopusIcon,
  Orca: OrcaIcon,
  Oyster: OysterIcon,
  Pipefish: PipefishIcon,
  Piranha: PiranhaIcon,
  Plankton: PlanktonIcon,
  Seahorse: SeahorseIcon,
  Shark: SharkIcon,
  Shell: ShellIcon,
  Shrimp: ShrimpIcon,
  Starfish: StarfishIcon,
  Swordfish: SwordfishIcon,
  Whale: WhaleIcon,
}

export function SupportedAddressDetails({ parsed, addressCount, balance, species, rankings }) {
  const accordionIconColor = useColorModeValue("teal.500", "teal.300")
  const fractionsColor = useColorModeValue("gray.300", "gray.500")
  const SpeciesImageComponent = imageComponents[species.current.icon] // dynamically load the correct image component

  const styles = {
    gridField: {
      gridColumn: { base: "span 8/span 8", sm: "span 3/span 3" },
      color: useColorModeValue("teal.500", "teal.300"),
    },
    gridValue: {
      gridColumn: { base: "span 8/span 8", sm: "span 5/span 5" },
      paddingBottom: { base: "1.5rem", sm: "1rem" },
    },
  }

  return (
    <>
      <MetaTags
        title={`Rank My Wallet - Your ${capitalize(parsed.blockchain.name)} Rank`}
        description={`Your ${capitalize(
          parsed.blockchain.name
        )} blockchain ranking and address analysis`}
        keywords={`blockchain, ${parsed.blockchain.name}, wallets, rankings, species, address-analyzer`}
      />

      <Container maxW="container.md" marginBottom="2.5rem">
        <Counter
          blockchain={parsed.blockchain.name}
          totalAccounts={addressCount}
          rank={rankings.find(({ position }) => position === "current").rank}
          balance={balance.nano}
        ></Counter>

        <Divider display={{ base: "block", sm: "none" }} marginBottom="2rem" />

        {/* SPECIES GRID */}
        <SectionHeader>Species</SectionHeader>
        <Box minHeight="100px" height="auto">
          <Grid gap={0} marginBottom={{ base: ".5rem", sm: ".75rem" }}>
            <GridItem {...styles.gridField}>Your Balance</GridItem>
            <GridItem {...styles.gridValue}>
              {" "}
              <TickerString
                ticker={bigToString(balance.ticker, 0)}
                tickerSymbol={parsed.currency.tickerSymbol}
              ></TickerString>
            </GridItem>

            <GridItem {...styles.gridField}>Current Species</GridItem>
            <GridItem {...styles.gridValue}>
              <Link
                href={`/species/${parsed.blockchain.name}`}
                title={`${capitalize(parsed.blockchain.name)} Species`}
                color={useColorModeValue("pink.600", "pink.400")}
                passHref
              >
                {capitalize(species.current.name)} <ExternalLinkIcon />
              </Link>
            </GridItem>

            <GridItem {...styles.gridField}>Next Species</GridItem>
            <GridItem {...styles.gridValue}>{capitalize(species.next.name)}</GridItem>

            <GridItem {...styles.gridField}>Starts At</GridItem>
            <GridItem {...styles.gridValue}>
              {" "}
              <TickerString
                ticker={bigToString(species.next.startsAt, 0)}
                tickerSymbol={parsed.currency.tickerSymbol}
              ></TickerString>
            </GridItem>

            <GridItem {...styles.gridField}>Requires</GridItem>
            <GridItem {...styles.gridValue}>
              {" "}
              <TickerString
                ticker={bigToString(species.next.requires, parsed.currency.decimals)}
                tickerSymbol={parsed.currency.tickerSymbol}
                fractionsColor={fractionsColor}
              ></TickerString>
            </GridItem>

            {/* Species Image */}
            <GridItem
              rowStart={{ base: 1, sm: 1 }}
              rowSpan={{ base: 6, sm: 6 }}
              colStart={{ base: 9, sm: 9 }}
              colSpan={{ base: 4, sm: 4 }}
            >
              <SpeciesImageComponent
                height={{ base: "100px", sm: "75%" }}
                marginLeft={{ base: "inherit", sm: "auto" }}
              />
            </GridItem>
          </Grid>
        </Box>

        <PleaseDonate marginBottom={{ base: "2rem", sm: "2rem" }} />

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
                  <DataGridEntry
                    field="Competitors"
                    value={bigToString(addressCount, 0)}
                    url={{
                      href: "https://ergo.watch/metrics/addresses",
                      title: "Ergo Watch address metrics",
                      isExternal: true,
                    }}
                  />
                </DataGrid>
                <RankingsTable rankings={rankings} />
              </AccordionPanel>
            </AccordionItem>
          )}

          <AddressAccordionItemDetails parsedAddress={parsed} />
          <AddressAccordionItemAnalysis parsedAddress={parsed} />
        </Accordion>
      </Container>
    </>
  )
}

export default SupportedAddressDetails
