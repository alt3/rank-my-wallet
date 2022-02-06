import { UnsupportedAddressDetails, ValidAddressDetails } from "@components"
import { ServerSidePropsError } from "@components/errors/ServerSidePropsError"
import { basicAuth } from "app/core/auth/basic-auth"
import Layout from "app/core/layouts/Layout"
import getAccount from "app/core/queries/getAccount"
import {
  getNextSpecies,
  getRandomInt,
  getSpecies,
  parseAddress,
  validateAddress,
} from "app/lib/utils"
import {
  BlitzPage,
  ErrorBoundary,
  GetServerSideProps,
  Head,
  InferGetServerSidePropsType,
} from "blitz"
import { Suspense } from "react"

function ErrorFallback({ error, resetErrorBoundary }) {
  console.log(error)
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export const Ranking = ({ props }) => {
  // server side props contains `error` property
  if (props.error) {
    return <ServerSidePropsError error={props.error} />
  }

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

      {props.parsedAddress.isSupported === true && (
        <ValidAddressDetails
          parsedAddress={props.parsedAddress}
          account={props.account}
          rank={props.rank}
          species={props.species}
        ></ValidAddressDetails>
      )}

      {props.parsedAddress.isSupported === false && (
        <UnsupportedAddressDetails parsedAddress={props.parsedAddress} />
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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Ranking props={data} />
        </ErrorBoundary>
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
  const validatedAddress = validateAddress(parsedAddress)

  if (!parsedAddress.isSupported) {
    return {
      props: {
        data: {
          parsedAddress: validatedAddress,
        },
      },
    }
  }

  // still here so we must be cardano or ergo
  if (parsedAddress.blockchain.name !== "cardano" && parsedAddress.blockchain.name !== "ergo") {
    throw "we should never reach this point without being cardano or ergo"
  }

  const account = await getAccount(parsedAddress)

  if (account.error) {
    console.log(account)
    return {
      props: {
        data: {
          ...account, // contains the api error
          parsedAddress: parsedAddress,
        },
      },
    }
  }

  const currentSpecies = getSpecies(parsedAddress.blockchain.name, account.account.balance.ticker)
  const nextSpecies = getNextSpecies(
    parsedAddress.blockchain.name,
    account.account.balance.ticker,
    currentSpecies.name
  )

  // random rank until implemented
  const totalAccounts = parsedAddress.blockchain.name === "cardano" ? 2500000 : 87000

  return {
    props: {
      data: {
        ...account, // we need to spread here because response could be an error object
        parsedAddress: parsedAddress, //parseAddress(context.params.address.toString()),
        rank: {
          totalAccounts: totalAccounts,
          rank: getRandomInt(1, totalAccounts),
          next: "account-id-of-next-rank",
          previous: "account-id-of-previous-rank",
        },
        species: {
          current: currentSpecies,
          next: nextSpecies,
        },
      },
    },
  }
}

ShowRankingPage.suppressFirstRenderFlicker = true
ShowRankingPage.authenticate = false
ShowRankingPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowRankingPage
