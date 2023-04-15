import { BlitzPage } from "@blitzjs/next"
import { t } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { useRouter } from "next/router"
import { BackHomeButton, ErrorHero, MetaTags, UnsupportedAddressDetails } from "src/components"
import Layout from "src/core/layouts/Layout"
import { parseAddress, validateAddress } from "src/lib"
import { loadCatalog } from "src/translations/utils"

const Page404: BlitzPage = () => {
  useLingui()

  const router = useRouter()

  const keywords = "crypto, blockchain, cardano, ergo, wallets, rankings, species, address-analyzer"

  // 404 page for server-side and direct links
  if (router.query.address === undefined) {
    return (
      <>
        <MetaTags title={t`Page Not Found`} keywords={keywords} />

        <ErrorHero title={t`Page Not Found`} />
        <BackHomeButton title={t`Back to homepage`} />
      </>
    )
  }

  // unsupported address page ONLY if user submitted unsupported address via the form
  const parsedAddress = parseAddress(router.query.address.toString())
  const validatedAddress = { parsed: validateAddress(parsedAddress) }

  return (
    <>
      <UnsupportedAddressDetails parsed={validatedAddress.parsed} />
    </>
  )
}

export async function getStaticProps(
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<any>> {
  return {
    props: {
      i18n: await loadCatalog(ctx.locale as string),
    },
  }
}

Page404.suppressFirstRenderFlicker = true
Page404.getLayout = (page) => <Layout>{page}</Layout>

export default Page404
