import { BlitzPage } from "@blitzjs/next"
import { Suspense } from "react"
import { AddressDetails, SuspenseLoader } from "src/components"
import Layout from "src/core/layouts/Layout"

const ShowRankingPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<SuspenseLoader />}>
        <AddressDetails />
      </Suspense>
    </div>
  )
}

ShowRankingPage.suppressFirstRenderFlicker = true
ShowRankingPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowRankingPage
