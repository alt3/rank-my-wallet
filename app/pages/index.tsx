import { BlitzPage } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Container } from "@chakra-ui/react"
import { Hero } from "@/components/Hero"
import { BlockChains } from "@/components/BlockChains"
import { Sponsors } from "@/components/Sponsors"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  return (
    <>
      <Hero />

      <Container maxW="container.md" marginBottom="2.5rem">
        <BlockChains />
        <Sponsors />
      </Container>
    </>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
