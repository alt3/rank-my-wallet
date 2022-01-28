import { ValidAddressDetails, InvalidAddressDetails } from "@components"
import addressErrors from "app/constants/address-errors"
import { basicAuth } from "app/core/auth/basic-auth"
import Layout from "app/core/layouts/Layout"
import {
  Base58Address,
  Bech32Address,
  RegexAddress,
  UnrecognizedAddress,
} from "app/lib/address-types"
import { parseAddress } from "app/lib/parse-address"
import { capitalize, getRandomInt, regexReplace } from "app/lib/utils"
import { BlitzPage, GetServerSideProps, Head, InferGetServerSidePropsType } from "blitz"
import { Suspense } from "react"

export const Ranking = ({ data }) => {
  // console.log(data)

  const meta = {
    // title: `Rank My Wallet - Ranking for ${capitalize(data.parsedAddress.blockchain)} address ${
    //   data.parsedAddress.address
    // } ${data.parsedAddress.address}`,
    // description: `Ranking and detailed analysis of ${capitalize(
    //   data.parsedAddress.blockchain
    // )} address ${data.parsedAddress.address}.`,
    // keywords: "rankings, cardano, ergo, blockchain, addresses, wallets, species, online",
    // url: `https://rankmywallet.com/${data.parsedAddress.address}`,
  }

  return (
    <>
      <Head>
        {/* <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta property="og:title" content={meta.title} key="title" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={meta.description} />
        <meta name="twitter:content" content="summary" />
        <meta name="twitter:site" content="@RankMyWallet" /> */}
      </Head>

      {!data.parsedAddress.error && (
        <ValidAddressDetails
          parsedAddress={data.parsedAddress}
          balance={data.balance}
          rank={data.rank}
          addressCount={data.addressCount}
        ></ValidAddressDetails>
      )}

      {data.parsedAddress.error && <InvalidAddressDetails parsedAddress={data.parsedAddress} />}
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
    return getInvalidAddressProps("UnrecognizedAddress", parsedAddress)
  }

  // detected a blockchain but it is not Cardano or Ergo
  if (!["cardano", "ergo"].includes(parsedAddress.blockchain)) {
    const props = getInvalidAddressProps("UnsupportedBlockchain", parsedAddress)

    props.props.data.parsedAddress.error.message = regexReplace(
      props.props.data.parsedAddress.error.message,
      {
        __BLOCKCHAIN__: props.props.data.parsedAddress.blockchain,
      }
    )

    return props
  }

  // not mainnet
  if (parsedAddress.network !== "mainnet") {
    const props = getInvalidAddressProps("UnsupportedNetwork", parsedAddress)

    props.props.data.parsedAddress.error.message = regexReplace(
      props.props.data.parsedAddress.error.message,
      {
        __BLOCKCHAIN__: props.props.data.parsedAddress.blockchain,
        __NETWORK__: props.props.data.parsedAddress.network,
      }
    )

    return props
  }

  // not a normal Cardano Type-00 address
  if (parsedAddress.blockchain === "cardano" && parsedAddress.type.type !== 0) {
    const props = getInvalidAddressProps("UnsupportedType", parsedAddress)

    props.props.data.parsedAddress.error.message = regexReplace(
      props.props.data.parsedAddress.error.message,
      {
        __BLOCKCHAIN__: props.props.data.parsedAddress.blockchain,
        __ADDRESS_TYPE__: props.props.data.parsedAddress.type.name,
      }
    )

    return props
  }

  // not a normal Ergo P2PK address
  if (parsedAddress.blockchain === "ergo" && parsedAddress.type.type !== 1) {
    const props = getInvalidAddressProps("UnsupportedType", parsedAddress)

    props.props.data.parsedAddress.error.message = regexReplace(
      props.props.data.parsedAddress.error.message,
      {
        __BLOCKCHAIN__: props.props.data.parsedAddress.blockchain,
        __ADDRESS_TYPE__: props.props.data.parsedAddress.type.name,
      }
    )

    return props
  }

  // still here so the address is valid, fetch ranking data
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

// helper function to prevent duplication when generating errors for invalid addresses
const getInvalidAddressProps = function (
  errorType:
    | "UnrecognizedAddress"
    | "UnsupportedBlockchain"
    | "UnsupportedNetwork"
    | "UnsupportedType",
  parsedAddress: Bech32Address | Base58Address | RegexAddress | UnrecognizedAddress
): any {
  const errorObject = addressErrors.find((element) => element.type === errorType)

  if (!errorObject) {
    throw "We need to fix this: errorObject could not be fetched from constants, perhaps add UnknownAddressError?"
  }

  parsedAddress.error = errorObject

  return {
    props: {
      data: {
        parsedAddress,
      },
    },
  }
}

ShowRankingPage.authenticate = false
ShowRankingPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowRankingPage
