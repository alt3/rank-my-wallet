import { BlitzPage } from "@blitzjs/next"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import Head from "next/head"
import { Suspense } from "react"
import { AddressDetails, SuspenseLoader } from "src/components"
import Layout from "src/core/layouts/Layout"
import { loadCatalog } from "src/translations/utils"

const ShowRankingPage: BlitzPage = () => {
  const pageTitle = "RankMyWallet"

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div>
        <Suspense fallback={<SuspenseLoader />}>
          <AddressDetails />
        </Suspense>
      </div>
    </>
  )
}

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> {
  return {
    props: {
      i18n: await loadCatalog(ctx.locale as string),
    },
  }
}

ShowRankingPage.suppressFirstRenderFlicker = true
ShowRankingPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowRankingPage
