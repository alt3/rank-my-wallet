import { BlockChains } from "@/components/BlockChains"
import { Hero } from "@/components/Hero"
import { Sponsors } from "@/components/Sponsors"
import { Container } from "@chakra-ui/react"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, GetServerSideProps, Head, InferGetServerSidePropsType } from "blitz"
import { basicAuth } from "app/core/auth/basic-auth"

const Home: BlitzPage<InferGetServerSidePropsType<typeof getServerSideProps>> = () => {
  const meta = {
    title: "Rank My Wallet - Online ranking of blockchain wallets",
    description: "Rank your Cardano and Ergo blockchain addresses.",
    keywords: "rankings, cardano, ergo, blockchain, addresses, wallets, species, online",
    url: "https://rankmywallet.com/",
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

      <Hero />

      <Container maxW="container.md" marginBottom="2.5rem">
        <BlockChains />
        <Sponsors />
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

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
