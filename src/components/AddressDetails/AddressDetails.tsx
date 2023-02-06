import { useParam } from "@blitzjs/next"
import { useQuery } from "@blitzjs/rpc"
import Head from "next/head"
import { capitalize } from "src/core/lib/utils"
import getAddressDetails from "src/core/queries/getAddressDetails"
import SupportedAddressDetails from "./SupportedAddressDetails"
import UnsupportedAddressDetails from "./UnsupportedAddressDetails"

export const AddressDetails = () => {
  const address = useParam("address", "string")
  const [addressDetails] = useQuery(getAddressDetails, address, {
    staleTime: Infinity,
  })

  const pageTitle = `Rank My Wallet - Your ${capitalize(
    addressDetails.parsed.blockchain.name
  )} Rank`

  const metaData = {
    title: `Rank My Wallet - Your ${capitalize(addressDetails.parsed.blockchain.name)} Rank`,
    description: `Your ${capitalize(
      addressDetails.parsed.blockchain.name
    )} blockchain ranking and address analysis`,
    keywords: `${addressDetails.parsed.blockchain.name}, blockchain, wallets, rankings, address-analyzer, species`,
    url: `https://rankmywallet.com/${address}`,
  }

  // console.log(addressDetails)

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
        <meta property="og:title" content={pageTitle} key="title" />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={metaData.description} />
        <meta name="twitter:content" content="summary" />
        <meta name="twitter:site" content="@RankMyWallet" />
      </Head>

      {addressDetails.parsed.isSupported === false && (
        <UnsupportedAddressDetails parsed={addressDetails.parsed} />
      )}

      {addressDetails.parsed.isSupported === true && (
        <SupportedAddressDetails
          parsed={addressDetails.parsed}
          addressCount={addressDetails.addressCount}
          balance={addressDetails.balance}
          species={addressDetails.species}
          rankings={addressDetails.rankings}
        />
      )}
    </>
  )
}

export default AddressDetails
