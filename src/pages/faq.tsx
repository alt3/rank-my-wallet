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
} from "@chakra-ui/react"
import { Trans } from "@lingui/macro"
import { AccordionItemFaq, ContentContainer, Link, MetaTags, PageHero } from "src/components"
import Layout from "src/core/layouts/Layout"

const FaqPage: BlitzPage = () => {
  const styles = {
    listItems: {
      marginLeft: "0.25rem",
    },
  }

  return (
    <>
      <MetaTags
        title="Rank My Wallet - Frequently Asked Questions (FAQ)"
        description="Frequently asked questions for Rank My Wallet"
        keywords="blockchain, cardano, ergo, wallets, rankings, species, faq, questions"
      />

      <ContentContainer>
        <PageHero title={<Trans>Frequently Asked Questions (FAQ)</Trans>} />

        <Tabs variant="enclosed" colorScheme="teal">
          <TabList>
            <Tab>
              <Text className="capitalize">
                <Trans>general</Trans>
              </Text>
            </Tab>
            <Tab>
              <Text className="capitalize">
                <Trans>cardano</Trans>
              </Text>
            </Tab>
            <Tab>
              <Text className="capitalize">
                <Trans>ergo</Trans>
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
                      <Link href="https://ergo.watch" isExternal passHref withExternalIcon>
                        Ergo Watch
                      </Link>
                    </ListItem>
                  </UnorderedList>
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

FaqPage.suppressFirstRenderFlicker = true
FaqPage.getLayout = (page) => <Layout>{page}</Layout>

export default FaqPage
