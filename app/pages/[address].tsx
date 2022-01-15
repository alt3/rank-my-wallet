import { AddressAnalysis, AddressCounter, AddressDetails } from "@/components/address"
import { Container } from "@chakra-ui/react"
import Layout from "app/core/layouts/Layout"
import { parseAddress } from "app/lib/parse-address"
import { capitalize, getRandomInt } from "app/lib/utils"
import { BlitzPage, GetServerSideProps, Head, InferGetServerSidePropsType } from "blitz"
import { Suspense } from "react"

export const Ranking = ({ data }) => {
  console.log(data)
  return (
    <>
      <Head>
        <title>Address page {data.parsedAddress.address}</title>
      </Head>

      <AddressCounter rank={data.rank}></AddressCounter>

      <Container maxW="container.md" marginBottom="2.5rem">
        {data.parsedAddress.blockchain && (
          <>
            <Container maxW="container.md" marginBottom="2.5rem">
              <AddressDetails parsedAddress={data.parsedAddress}></AddressDetails>
              <AddressAnalysis parsedAddress={data.parsedAddress}></AddressAnalysis>
            </Container>
          </>
        )}
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

  const parsedAddress = parseAddress(context.params.address.toString())

  if (parsedAddress.blockchain === undefined) {
    throw new Error("Unknown address")
  }

  if (!["cardano", "ergo"].includes(parsedAddress.blockchain)) {
    throw new Error(`We do not support ${capitalize(parsedAddress.blockchain)} addresses`)
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
