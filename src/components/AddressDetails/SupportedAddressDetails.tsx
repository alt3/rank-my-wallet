import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Grid,
  GridItem,
  useColorModeValue,
} from "@chakra-ui/react"
import { t, Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import {
  AccordionItemAddressAnalysis,
  AccordionItemAddressDetails,
  ContentContainer,
  Counter,
  DataGrid,
  DataGridEntry,
  Link,
  MetaTags,
  PageHero,
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
import { bigToString } from "src/lib"

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
  useLingui()

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
        title={`RankMyWallet - ${t`Your Rank`}`}
        description={`Your ${parsed.blockchain.name} blockchain ranking and address analysis`}
        keywords={`crypto, blockchain, ${parsed.blockchain.name}, wallets, rankings, species, address-analyzer`}
      />

      <ContentContainer>
        {(balance.nano === "0" || balance.nano === 0) && (
          <PageHero
            title={<Trans>Sorry, we do not rank empty wallets</Trans>}
            marginBottom={{ base: "2rem", md: "8rem" }}
          />
        )}

        {parsed.blockchain.name === "Cardano" && balance.nano !== "0" && balance.nano !== 0 && (
          <>
            <PageHero
              title={<Trans>Cardano Rankings are coming soon</Trans>}
              marginBottom={{ base: "2rem", md: "8rem" }}
            />
          </>
        )}

        {parsed.blockchain.name !== "Cardano" && balance.nano !== "0" && balance.nano !== 0 && (
          <Counter
            blockchain={parsed.blockchain.name}
            totalAccounts={addressCount}
            rank={rankings.find(({ position }) => position === "current").rank}
          />
        )}

        <Divider display={{ base: "block", sm: "none" }} marginBottom="2rem" />

        {/* SPECIES GRID */}
        <SectionHeader>
          <Trans>SpeciesPlural</Trans>
        </SectionHeader>
        <Box minHeight="100px" height="auto">
          <Grid gap={0} marginBottom={{ base: ".5rem", sm: ".75rem" }}>
            <GridItem {...styles.gridField}>
              <Trans>Your Balance</Trans>
            </GridItem>
            <GridItem {...styles.gridValue}>
              {" "}
              <TickerString
                ticker={bigToString(balance.ticker, 0)}
                tickerSymbol={parsed.currency.tickerSymbol}
              ></TickerString>
            </GridItem>

            <GridItem {...styles.gridField}>
              <Trans>Current Species</Trans>
            </GridItem>
            <GridItem {...styles.gridValue}>
              <Link
                href={`/species/${parsed.blockchain.name.toLowerCase()}`}
                title={`${parsed.blockchain.name} Species`}
                color={useColorModeValue("pink.600", "pink.400")}
                passHref
                withExternalIcon
              >
                {t({ id: species.current.name })}
              </Link>
            </GridItem>

            <GridItem {...styles.gridField}>
              <Trans>Next Species</Trans>
            </GridItem>
            <GridItem {...styles.gridValue}>{t({ id: species.next.name })}</GridItem>

            <GridItem {...styles.gridField}>
              <Trans>Starts At</Trans>
            </GridItem>
            <GridItem {...styles.gridValue}>
              {" "}
              <TickerString
                ticker={bigToString(species.next.startsAt, 0)}
                tickerSymbol={parsed.currency.tickerSymbol}
              ></TickerString>
            </GridItem>

            <GridItem {...styles.gridField}>
              <Trans>Required</Trans>
            </GridItem>
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
            <AccordionItem borderStyle="none" marginBottom={{ base: "1rem", md: "0.5rem" }}>
              <h2>
                <AccordionButton p={0}>
                  <Box flex="1" textAlign="left">
                    <SectionHeader>
                      <Trans>Competiton</Trans>
                    </SectionHeader>
                  </Box>
                  <Box as="span" verticalAlign="top" minHeight="3rem">
                    <AccordionIcon color={accordionIconColor} />
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel p={0}>
                <DataGrid marginBottom={{ base: "0.5rem", sm: "0.5rem" }}>
                  <DataGridEntry
                    field={t`Competitors`}
                    value={bigToString(addressCount, 0)}
                    url={{
                      href: "https://ergo.watch/metrics/addresses",
                      isExternal: true,
                    }}
                  />
                </DataGrid>
                <RankingsTable rankings={rankings} />
              </AccordionPanel>
            </AccordionItem>
          )}

          <AccordionItemAddressDetails parsedAddress={parsed} />
          <AccordionItemAddressAnalysis parsedAddress={parsed} />
        </Accordion>
      </ContentContainer>
    </>
  )
}

export default SupportedAddressDetails
