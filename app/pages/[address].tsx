import { AddressAnalysis, AddressCounter, AddressDetails } from "@/components/address"
import { Container } from "@chakra-ui/react"
import Layout from "app/core/layouts/Layout"
import { parseAddress } from "app/lib/parse-address"
import { getRandomInt } from "app/lib/utils"
import { BlitzPage, GetServerSideProps, Head, InferGetServerSidePropsType } from "blitz"
import { Suspense } from "react"
import { Species } from "@/components/species"
import {
  Bech32Address,
  Base58Address,
  RegexAddress,
  UnrecognizedAddress,
} from "app/lib/address-types"

export const Ranking = ({ data }) => {
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
              <Species balance={data.balance}></Species>
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
    return getAddressErrorProps("UnrecognizedAddress", parsedAddress)
  }

  if (!["cardano", "ergo"].includes(parsedAddress.blockchain)) {
    return getAddressErrorProps("UnsupportedBlockchain", parsedAddress)
  }

  if (parsedAddress.network !== "mainnet") {
    return getAddressErrorProps("UnsupportedNetwork", parsedAddress)
  }

  // still here so we must be Cardano or Ergo, check address type
  if (parsedAddress.blockchain === "cardano" && parsedAddress.type.type !== 0) {
    return getAddressErrorProps("UnsupportedType", parsedAddress)
  }

  if (parsedAddress.blockchain === "ergo" && parsedAddress.type.type !== 1) {
    return getAddressErrorProps("UnsupportedType", parsedAddress)
  }

  // still here so the address is valid
  return {
    props: {
      data: {
        parsedAddress: parseAddress(context.params.address.toString()),
        rank: getRandomInt(1, 87000),
        balance: getRandomInt(0, 110000000),
      },
    },
  }
}

// helper function to prevent duplication when throwing address errors
const getAddressErrorProps = function (
  errorType:
    | "UnrecognizedAddress"
    | "UnsupportedBlockchain"
    | "UnsupportedNetwork"
    | "UnsupportedType",
  parsedAddress: Bech32Address | Base58Address | RegexAddress | UnrecognizedAddress
) {
  parsedAddress.error = errorType

  return {
    props: {
      parsedAddress,
    },
  }
}

ShowRankingPage.authenticate = false
ShowRankingPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowRankingPage
