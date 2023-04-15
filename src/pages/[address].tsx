import { BlitzPage } from "@blitzjs/next"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import Head from "next/head"
import { Suspense } from "react"
import { AddressDetails, SuspenseLoader } from "src/components"
import Layout from "src/core/layouts/Layout"
import { parseAddress, validateAddress } from "src/lib"
import { loadCatalog } from "src/translations/utils"
import superjson from "superjson"

const ShowRankingPage: BlitzPage = ({ addressDetails }: any) => {
  const pageTitle = "RankMyWallet"

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div>
        <Suspense fallback={<SuspenseLoader />}>
          <AddressDetails addressDetails={superjson.parse(addressDetails)} />
        </Suspense>
      </div>
    </>
  )
}

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> {
  // @ts-ignore: Object is possibly 'null'.
  const parsedAddress = parseAddress(ctx.params.address)
  const validatedAddress = { parsed: validateAddress(parsedAddress) }

  return {
    props: {
      i18n: await loadCatalog(ctx.locale as string),
      addressDetails: superjson.stringify(validatedAddress),
    },
  }
}

ShowRankingPage.suppressFirstRenderFlicker = true
ShowRankingPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowRankingPage
