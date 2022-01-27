import {
  Center,
  Container,
  HStack,
  useRadioGroup,
  useDisclosure,
  SlideFade,
} from "@chakra-ui/react"
import { PageHero, RadioCard } from "@components"
import SpeciesTable from "@components/SpeciesTable/SpeciesTable"
import { basicAuth } from "app/core/auth/basic-auth"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, GetServerSideProps, Head, InferGetServerSidePropsType } from "blitz"
import React from "react"

import species from "app/constants/species"

const Species: BlitzPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
  const meta = {
    title: "Rank My Wallet - Blockchain species",
    description: "Blockchain species for Cardano and Ergo based on wallet balance.",
    keywords: "rankings, cardano, ergo, blockchain, species, whale, orca, shark, shrimp, online",
    url: "https://rankmywallet.com/species",
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
        onToggleCardano()

        return
      }

      // still here so Ergo
      onCloseCardano()
      onToggleErgo()
    },
  })

  const group = getRootProps()

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

      <PageHero title="Blockchain Species" />

      <Container maxW="container.md" marginBottom="2.5rem">
        <Center>
          <HStack {...group} align="justify-center" marginBottom="4rem">
            {options.map((value) => {
              const radio = getRadioProps({ value })
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              )
            })}
          </HStack>
        </Center>

        <SlideFade in={isOpenCardano} unmountOnExit>
          <SpeciesTable
            blockchain="cardano"
            currencySymbol="₳"
            species={species["cardano"].slice(1)}
          ></SpeciesTable>
        </SlideFade>

        <SlideFade in={isOpenErgo} unmountOnExit>
          <SpeciesTable
            blockchain="ergo"
            currencySymbol="Σ"
            species={species["ergo"].slice(1)}
          ></SpeciesTable>
        </SlideFade>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  await basicAuth(context.req, context.res)

  return {
    props: {},
  }
}

Species.suppressFirstRenderFlicker = true
Species.getLayout = (page) => <Layout title="Species">{page}</Layout>

export default Species
