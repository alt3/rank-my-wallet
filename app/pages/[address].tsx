import { UnsupportedAddressDetails, SupportedAddressDetails } from "@components"
import Layout from "app/core/layouts/Layout"
import getAddressDetails from "app/core/queries/getAddressDetails"
import { BlitzPage, useParam, useQuery } from "blitz"
import { Suspense } from "react"
import { SuspenseLoader } from "@components"

export const Ranking = () => {
  const address = useParam("address", "string")
  const [addressDetails] = useQuery(getAddressDetails, address)

  return (
    <>
      {addressDetails.parsed.isSupported === false && (
        <UnsupportedAddressDetails parsed={addressDetails.parsed} />
      )}

      {addressDetails.parsed.isSupported === true && (
        <SupportedAddressDetails
          parsed={addressDetails.parsed}
          account={addressDetails.account}
          rank={addressDetails.rank}
          species={addressDetails.species}
        />
      )}
    </>
  )
}

const ShowRankingPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<SuspenseLoader />}>
        <Ranking />
      </Suspense>
    </div>
  )
}

ShowRankingPage.suppressFirstRenderFlicker = true
ShowRankingPage.authenticate = false
ShowRankingPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowRankingPage
