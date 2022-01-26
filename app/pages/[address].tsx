import { Counter, ValidAddressDetails } from "@components"
import { basicAuth } from "app/core/auth/basic-auth"
import Layout from "app/core/layouts/Layout"
import {
  Base58Address,
  Bech32Address,
  RegexAddress,
  UnrecognizedAddress,
} from "app/lib/address-types"
import { parseAddress } from "app/lib/parse-address"
import { capitalize, getRandomInt } from "app/lib/utils"
import { BlitzPage, GetServerSideProps, Head, InferGetServerSidePropsType } from "blitz"
import { Suspense } from "react"

export const Ranking = ({ data }) => {
  const meta = {
    title: `Rank My Wallet - Ranking for ${capitalize(data.parsedAddress.blockchain)} address ${
      data.parsedAddress.address
    } ${data.parsedAddress.address}`,
    description: `Ranking and detailed analysis of ${capitalize(
      data.parsedAddress.blockchain
    )} address ${data.parsedAddress.address}.`,
    keywords: "rankings, cardano, ergo, blockchain, addresses, wallets, species, online",
    url: `https://rankmywallet.com/${data.parsedAddress.address}`,
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
        <meta name="twitter:content" content="summary" />
        <meta name="twitter:site" content="@RankMyWallet" />
      </Head>

      <Counter
        blockchain={data.parsedAddress.blockchain}
        addressCount={data.addressCount}
        rank={data.rank}
      ></Counter>

      {data.parsedAddress.blockchain && (
        <ValidAddressDetails
          parsedAddress={data.parsedAddress}
          balance={data.balance}
        ></ValidAddressDetails>
      )}
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
  await basicAuth(context.req, context.res)

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
  const addressCount = parsedAddress.blockchain === "cardano" ? 2500000 : 87000
  const maxBalance = parsedAddress.blockchain === "cardano" ? 110000000 : 1100000

  return {
    props: {
      data: {
        parsedAddress: parseAddress(context.params.address.toString()),
        addressCount: addressCount,
        rank: getRandomInt(1, addressCount),
        balance: getRandomInt(0, maxBalance),
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
