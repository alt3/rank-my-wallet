import {
  Center,
  Container,
  HStack,
  useBoolean,
  useDisclosure,
  useRadioGroup,
} from "@chakra-ui/react"
import { PageHero, RadioCard } from "src/components"
import SpeciesTable from "src/components/SpeciesTable/SpeciesTable"
import species from "src/core/constants/species"
import Layout from "src/core/layouts/Layout"
import { BlitzPage } from "@blitzjs/next"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const Species: BlitzPage = () => {
  const meta = {
    title: "Rank My Wallet - Species",
    description: "Blockchain species for Cardano and Ergo.",
    keywords: "rankings, cardano, ergo, blockchain, species, whale, orca, shark, shrimp, online",
    url: "https://rankmywallet.com/species",
  }

  // check for query param
  const [initialRouterCheck, setInitialRouterFlag] = useBoolean()
  const router = useRouter()
  let blockchainParam = ""

  if (router.query.blockchain && typeof router.query.blockchain === "string") {
    blockchainParam = router.query.blockchain.toLowerCase()
  }

  // custom names for useDisclosure hooks for understandable code
  const {
    isOpen: isOpenCardano,
    onToggle: onToggleCardano,
    onClose: onCloseCardano,
  } = useDisclosure()

  const { isOpen: isOpenErgo, onToggle: onToggleErgo, onClose: onCloseErgo } = useDisclosure()

  // available radio buttons
  const options = ["Cardano", "Ergo"]

  // root props responsible for executing the useDisclosure hooks
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "blockchain",
    onChange: (blockchain) => {
      if (blockchain === "Cardano") {
        if (isOpenErgo) {
          onCloseErgo()
        }

        if (!isOpenCardano) {
          onToggleCardano()
        }

        return
      }

      // still here so Ergo
      onCloseCardano()

      if (!isOpenErgo) {
        onToggleErgo()
      }
    },
  })

  // instantiate the group
  const group = getRootProps()

  // set active blockchain using the query param (if given)
  if (!initialRouterCheck) {
    setInitialRouterFlag.toggle() // make sure we only run this once to prevent redirect loop

    if (blockchainParam === "cardano") {
      onToggleCardano()
    }

    if (blockchainParam === "ergo") {
      onToggleErgo()
    }
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.title} key="title" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:description" content={meta.description} />
        <meta name="twitter:content" content="summary" />
        <meta name="twitter:site" content="@RankMyWallet" />
      </Head>

      {!isOpenCardano && !isOpenErgo && <PageHero title="Blockchain Species" />}

      {isOpenCardano && <PageHero title="Cardano Species" />}

      {isOpenErgo && <PageHero title="Ergo Species" />}

      <Container maxW="container.md" marginBottom="2.5rem">
        <Center>
          <HStack {...group} align="justify-center" marginBottom="4rem">
            {options.map((value) => {
              const radio = getRadioProps({ value })

              // sets active button for direct page visits
              if (radio.value === "Cardano" && isOpenCardano) {
                radio.isChecked = true
              }

              if (radio.value === "Ergo" && isOpenErgo) {
                radio.isChecked = true
              }

              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              )
            })}
          </HStack>
        </Center>

        {isOpenCardano && (
          <SpeciesTable
            blockchain="cardano"
            tickerSymbol="₳"
            species={species["cardano"].slice(1)}
          ></SpeciesTable>
        )}

        {isOpenErgo && (
          <SpeciesTable
            blockchain="ergo"
            tickerSymbol="Σ"
            species={species["ergo"].slice(1)}
          ></SpeciesTable>
        )}
      </Container>
    </>
  )
}

Species.suppressFirstRenderFlicker = true
Species.getLayout = (page) => <Layout title="Species">{page}</Layout>

export default Species
