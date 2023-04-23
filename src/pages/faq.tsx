import { AccordionItemFaq } from "@/components/AccordionItemFaq"
import { ContentContainer } from "@/components/ContentContainer"
import { PageHero } from "@/components/Heroes/PageHero"
import { Link } from "@/components/Link"
import { MetaTags } from "@/components/MetaTags"
import { BlitzPage } from "@blitzjs/next"
import {
  Accordion,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react"
import { Trans, t } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import Layout from "src/core/layouts/Layout"
import { loadCatalog } from "src/translations/utils"

const FaqPage: BlitzPage = () => {
  useLingui()

  const styles = {
    listItems: {
      marginLeft: "0.25rem",
    },
  }

  return (
    <>
      <MetaTags
        title={`RankMyWallet - ${t`FAQ`}`}
        description="Frequently asked questions for RankMyWallet"
        keywords="crypto, blockchain, cardano, ergo, wallets, rankings, species, faq, questions"
      />

      <ContentContainer>
        <PageHero title={<Trans>Frequently Asked Questions (FAQ)</Trans>} />

        <Tabs variant="enclosed" colorScheme="teal">
          <TabList>
            <Tab>
              <Text>
                <Trans>General</Trans>
              </Text>
            </Tab>
            <Tab>
              <Text>
                <Trans>Cardano</Trans>
              </Text>
            </Tab>
            <Tab>
              <Text>
                <Trans>Ergo</Trans>
              </Text>
            </Tab>
          </TabList>
          <TabPanels>
            {/* GENERAL PANEL */}
            <TabPanel>
              <Accordion allowMultiple>
                <AccordionItemFaq question={<Trans>What technology does this website use?</Trans>}>
                  <UnorderedList>
                    <ListItem {...styles.listItems}>
                      <Link href="https://blitzjs.com/" isExternal passHref withExternalIcon>
                        Blitzjs
                      </Link>
                    </ListItem>
                    <ListItem {...styles.listItems}>
                      <Link href="https://chakra-ui.com/" isExternal passHref withExternalIcon>
                        Chakra-UI
                      </Link>
                    </ListItem>
                    <ListItem {...styles.listItems}>
                      <Link href="https://lingui.dev/" isExternal passHref withExternalIcon>
                        Lingui
                      </Link>
                    </ListItem>
                    <ListItem {...styles.listItems}>
                      <Link href="https://ergo.watch" isExternal passHref withExternalIcon>
                        Ergo Watch
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </AccordionItemFaq>

                <AccordionItemFaq question={<Trans>How can I help with translations?</Trans>}>
                  <Trans>
                    Translators do not require coding skills and can help correcting or adding
                    languages by following the{" "}
                    <Link
                      href="https://github.com/alt3/rank-my-wallet/blob/main/contributing.md#translations"
                      color={useColorModeValue("pink.600", "pink.400")}
                      isExternal
                      passHref
                      withExternalIcon
                    >
                      instructions on this page
                    </Link>
                    .
                  </Trans>
                </AccordionItemFaq>

                <AccordionItemFaq question={<Trans>Where do I report bugs?</Trans>}>
                  <Link
                    href="https://github.com/alt3/rank-my-wallet/issues"
                    isExternal
                    passHref
                    withExternalIcon
                  >
                    Github Issues
                  </Link>
                </AccordionItemFaq>
              </Accordion>
            </TabPanel>

            {/* CARDANO PANEL */}
            <TabPanel>
              <Accordion allowMultiple>
                <AccordionItemFaq question={<Trans>Why are Byron addresses not supported?</Trans>}>
                  <Text>
                    <Trans>
                      Byron (legacy) addresses lack the staking functionality that RankMyWallet uses
                      to determine your rank.
                    </Trans>
                  </Text>
                </AccordionItemFaq>
              </Accordion>
            </TabPanel>

            {/* ERGO PANEL */}
            <TabPanel>
              <Accordion allowMultiple>
                <AccordionItemFaq
                  question={
                    <Trans>
                      Why is the balance on this website different from the balance in my Ergo
                      wallet?
                    </Trans>
                  }
                >
                  <Text>
                    <Trans>
                      Every Ergo wallet can have multiple addresses, also called boxes. Ergo wallets
                      like Nautilus mostly show your &apos;consolidated&apos; balance by adding up
                      the amounts found in all boxes related to your wallet. RankMyWallet however,
                      will only show the balance of a single box.
                    </Trans>
                  </Text>
                </AccordionItemFaq>

                <AccordionItemFaq question={<Trans>How do I consolidate my boxes?</Trans>}>
                  <Text>
                    <Trans>
                      You can consolidate all of your boxes, and thereby your balance, into a single
                      box by sending all Ergo to yourself using either a new address or one of your
                      existing receive addresses.
                    </Trans>
                  </Text>
                </AccordionItemFaq>
              </Accordion>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </ContentContainer>
    </>
  )
}

export async function getStaticProps(
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<any>> {
  return {
    props: {
      i18n: await loadCatalog(ctx.locale as string),
    },
  }
}

FaqPage.suppressFirstRenderFlicker = true
FaqPage.getLayout = (page) => <Layout>{page}</Layout>

export default FaqPage
