import { Suspense } from "react"
import { Head, BlitzPage, GetServerSideProps, InferGetServerSidePropsType } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Heading } from "@chakra-ui/react"
import { parseAddress } from "app/lib/parse-address"

export const Ranking = ({ parsedAddress }) => {
  console.log(parsedAddress)

  return (
    <>
      <Head>
        <title>Address page {parsedAddress.address}</title>
      </Head>

      <Heading>Placeholder address page</Heading>
      <p>Address = {parsedAddress.address}</p>
    </>
  )
}

const ShowRankingPage: BlitzPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  data,
}) => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Ranking parsedAddress={data.parsedAddress} />
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
      },
    },
  }
}

ShowRankingPage.authenticate = false
ShowRankingPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowRankingPage
