import { AccordionItemAddressAnalysis } from "@/components/AddressDetails/AccordionItemAddressAnalysis"
import { AccordionItemAddressDetails } from "@/components/AddressDetails/AccordionItemAddressDetails"
import { SectionHeader } from "@/components/AddressDetails/SectionHeader"
import { ContentContainer } from "@/components/ContentContainer"
import { Counter } from "@/components/Counter"
import { DataGrid } from "@/components/DataGrid"
import { DataGridEntry } from "@/components/DataGridEntry"
import { PageHero } from "@/components/Heroes/PageHero"
import { Link } from "@/components/Link"
import { MetaTags } from "@/components/MetaTags"
import { PleaseDonate } from "@/components/PleaseDonate"
import { RankingsTable } from "@/components/RankingsTable"
import { TickerString } from "@/components/TickerString"
import { useQuery } from "@blitzjs/rpc"
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
  HTMLChakraProps,
  useColorModeValue,
} from "@chakra-ui/react"
import { Trans, t } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import dynamic from "next/dynamic"

import getAddressDetails from "src/core/queries/getAddressDetails"
import { bigToString } from "src/lib"

const dynamicallyImportSpeciesImage = (species: any, props: HTMLChakraProps<"svg">) => {
  const ImageComponent = dynamic(() => import(`@/components/Images/Species/${species}`), {
    ssr: false,
  })
  return <ImageComponent {...props} />
}

export function SupportedAddressDetails({ parsed }) {
  const { i18n } = useLingui()

  const [addressDetails] = useQuery(getAddressDetails, parsed, {
    staleTime: Infinity,
  })

  if (process && process.env.NODE_ENV !== "production") {
    console.log(addressDetails)
  }

  const accordionIconColor = useColorModeValue("teal.500", "teal.300")
  const fractionsColor = useColorModeValue("gray.300", "gray.500")

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
        {(addressDetails.balance.nano === "0" || addressDetails.balance.nano === 0) && (
          <PageHero
            title={<Trans>Sorry, we do not rank empty wallets</Trans>}
            marginBottom={{ base: "2rem", md: "8rem" }}
          />
        )}

        {parsed.blockchain.name === "Cardano" &&
          addressDetails.balance.nano !== "0" &&
          addressDetails.balance.nano !== 0 && (
            <>
              <PageHero
                title={<Trans>Cardano Rankings are coming soon</Trans>}
                marginBottom={{ base: "2rem", md: "8rem" }}
              />
            </>
          )}

        {parsed.blockchain.name !== "Cardano" &&
          addressDetails.balance.nano !== "0" &&
          addressDetails.balance.nano !== 0 && (
            <Counter
              blockchain={parsed.blockchain.name}
              totalAccounts={addressDetails.addressCount}
              rank={addressDetails.rankings.find(({ position }) => position === "current").rank}
            />
          )}

        <Divider display={{ base: "block", sm: "none" }} marginBottom="2rem" />

        {/* SPECIES GRID */}
        <SectionHeader>
          <Trans context="Plural">Species</Trans>
        </SectionHeader>
        <Box minHeight="100px" height="auto">
          <Grid gap={0} marginBottom={{ base: ".5rem", sm: ".75rem" }}>
            <GridItem {...styles.gridField}>
              <Trans>Your Balance</Trans>
            </GridItem>
            <GridItem {...styles.gridValue}>
              {" "}
              <TickerString
                ticker={bigToString(addressDetails.balance.ticker, i18n.locale, 0)}
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
                {i18n._(addressDetails.species.current.name)}
              </Link>
            </GridItem>

            <GridItem {...styles.gridField}>
              <Trans>Next Species</Trans>
            </GridItem>
            <GridItem {...styles.gridValue}>
              {addressDetails.species.next !== undefined
                ? i18n._(addressDetails.species.next.name)
                : null}
            </GridItem>

            <GridItem {...styles.gridField}>
              <Trans>Starts At</Trans>
            </GridItem>
            <GridItem {...styles.gridValue}>
              {" "}
              <TickerString
                ticker={
                  addressDetails.species.next !== undefined
                    ? bigToString(addressDetails.species.next.startsAt, i18n.locale, 0)
                    : "-"
                }
                tickerSymbol={parsed.currency.tickerSymbol}
              ></TickerString>
            </GridItem>

            <GridItem {...styles.gridField}>
              <Trans>Required</Trans>
            </GridItem>
            <GridItem {...styles.gridValue}>
              {" "}
              <TickerString
                ticker={
                  addressDetails.species.next !== undefined
                    ? bigToString(
                        addressDetails.species.next.requires,
                        i18n.locale,
                        parsed.currency.decimals
                      )
                    : "-"
                }
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
              {dynamicallyImportSpeciesImage(addressDetails.species.current.icon, {
                height: { base: "100px", sm: "75%" },
                marginLeft: { base: "inherit", sm: "auto" },
              })}
            </GridItem>
          </Grid>
        </Box>

        <PleaseDonate marginBottom={{ base: "2rem", sm: "2rem" }} />

        <Accordion allowMultiple>
          {/* COMPETITION PANE - IF APPLICABLE */}
          {addressDetails.rankings.length > 1 && (
            <AccordionItem borderStyle="none" marginBottom={{ base: "1rem", md: "0.5rem" }}>
              <h2>
                <AccordionButton p={0}>
                  <Box flex="1" textAlign="left">
                    <SectionHeader>
                      <Trans>Competition</Trans>
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
                    value={bigToString(addressDetails.addressCount, i18n.locale, 0)}
                    url={{
                      href: "https://ergo.watch/metrics/addresses",
                      isExternal: true,
                    }}
                  />
                </DataGrid>
                <RankingsTable rankings={addressDetails.rankings} />
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
