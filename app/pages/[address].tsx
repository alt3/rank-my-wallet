import { Suspense } from "react"
import { Head, BlitzPage, GetServerSideProps, InferGetServerSidePropsType } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Box, Container, Center, Stack, Text } from "@chakra-ui/react"
import { parseAddress } from "app/lib/parse-address"
import { getRandomInt } from "app/lib/utils"
import { AddressCounter, AddressDetails } from "@/components/address"

export const Ranking = ({ data }) => {
  console.log(data)
  return (
    <>
      <Head>
        <title>Address page {data.parsedAddress.address}</title>
      </Head>

      <AddressCounter rank={data.rank}></AddressCounter>

      <Container maxW="container.md" marginBottom="2.5rem">
        <AddressDetails parsedAddress={data.parsedAddress}></AddressDetails>
      </Container>
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
