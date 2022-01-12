import { Suspense } from "react"
import { Head, BlitzPage, useParam } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Heading } from "@chakra-ui/react"

export const Ranking = () => {
  const address = useParam("address", "string")

  return (
    <>
      <Head>
        <title>Ranking {address}</title>
      </Head>

      <Heading>Placeholder page for ranking</Heading>
      <p>Blockchain address = {address}</p>
    </>
  )
}

const ShowRankingPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Ranking />
      </Suspense>
    </div>
  )
}

ShowRankingPage.authenticate = false
ShowRankingPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowRankingPage
