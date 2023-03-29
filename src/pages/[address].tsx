import { BlitzPage } from "@blitzjs/next"
import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import Head from "next/head"
import { Suspense } from "react"
import { AddressDetails, SuspenseLoader } from "src/components"
import Layout from "src/core/layouts/Layout"

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

export async function getStaticProps(
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<any>> {
  return {
    props: {
      i18n: (await import(`@lingui/loader!./locales/[address]/${ctx.locale}.po`)).messages,
    },
  }
}

ShowRankingPage.suppressFirstRenderFlicker = true
ShowRankingPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowRankingPage
