import { Suspense } from "react"
import { Head, BlitzPage, GetServerSideProps, InferGetServerSidePropsType } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Heading } from "@chakra-ui/react"
import { parseAddress } from "app/lib/parse-address"
import { getRandomInt } from "app/lib/utils"

export const Ranking = ({ data }) => {
  console.log(data)

  return (
    <>
      <Head>
        <title>Address page {data.parsedAddress.address}</title>
      </Head>

      <Heading>Placeholder address page</Heading>
      <p>Address = {data.parsedAddress.address}</p>
      <p>Blockchain = {data.parsedAddress.blockchain}</p>
      <p>Encoding = {data.parsedAddress.encoding}</p>
      <p>Network = {data.parsedAddress.network}</p>
      <p>Type = {JSON.stringify(data.parsedAddress.type)}</p>
      <p>Rank = {data.rank}</p>
    </>
  )
}

const ShowRankingPage: BlitzPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  data,
}) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Ranking data={data} />
      </Suspense>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context.params === undefined || context.params.address === undefined) {
    throw "It should not be possible to enter the rankings page without the 'address' parameter"
  }

  return {
    props: {
      data: {
        parsedAddress: parseAddress(context.params.address.toString()),
        rank: getRandomInt(1, 87000),
      },
    },
  }
}

ShowRankingPage.authenticate = false
ShowRankingPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowRankingPage
