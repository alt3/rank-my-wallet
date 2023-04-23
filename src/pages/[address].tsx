import { SupportedAddressDetails } from "@/components/AddressDetails/SupportedAddressDetails"
import { SuspenseLoader } from "@/components/SuspenseLoader"
import { BlitzPage } from "@blitzjs/next"
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import Head from "next/head"
import { Suspense } from "react"
import Layout from "src/core/layouts/Layout"
import { parseAddress } from "src/lib/address/parseAddress"
import { validateAddress } from "src/lib/address/validateAddress"
import { loadCatalog } from "src/translations/utils"
import superjson from "superjson"

const ShowRankingPage: BlitzPage = ({ validated }: any) => {
  const pageTitle = "RankMyWallet"

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div>
        <Suspense fallback={<SuspenseLoader />}>
          <SupportedAddressDetails parsed={superjson.parse(validated)} />
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

  if (validatedAddress.parsed.isSupported === false) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      i18n: await loadCatalog(ctx.locale as string),
      validated: superjson.stringify(validatedAddress.parsed),
    },
  }
}

ShowRankingPage.suppressFirstRenderFlicker = true
ShowRankingPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowRankingPage
