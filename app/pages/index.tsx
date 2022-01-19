import { BlockChains } from "@/components/BlockChains"
import { Hero } from "@/components/Hero"
import { Sponsors } from "@/components/Sponsors"
import { Container } from "@chakra-ui/react"
import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "blitz"

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
