import { AddressDetails, SuspenseLoader } from "@components"
import { basicAuth } from "app/core/auth/basic-auth"
import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "blitz"
import { Suspense } from "react"

const ShowRankingPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<SuspenseLoader />}>
        <AddressDetails />
      </Suspense>
    </div>
  )
}

export async function getServerSideProps(context) {
  await basicAuth(context.req, context.res)

  return { props: {} }
}

ShowRankingPage.suppressFirstRenderFlicker = true
ShowRankingPage.authenticate = false
ShowRankingPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowRankingPage
