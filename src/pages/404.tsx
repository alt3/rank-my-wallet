import { BlitzPage } from "@blitzjs/next"
import { t } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { GetStaticPropsContext, GetStaticPropsResult } from "next"
import { BackHomeButton, MetaTags, PageHero } from "src/components"
import Layout from "src/core/layouts/Layout"
import { loadCatalog } from "src/translations/utils"

// ------------------------------------------------------
// This page is rendered if a route match is not found
// ------------------------------------------------------
const Page404: BlitzPage = () => {
  useLingui()

  const statusCode = 404
  const title = t`Page Not Found`

  return (
    <>
      <MetaTags
        title={`${t`Page Not Found`}`}
        keywords="crypto, blockchain, cardano, ergo, wallets, rankings, species, address-analyzer"
      />

      <PageHero title={t`Page Not Found`} />
      <BackHomeButton title={t`Back to homepage`} />
    </>
  )
}

export async function getStaticProps(
  ctx: GetStaticPropsContext
): Promise<GetStaticPropsResult<any>> {
  console.log(ctx)

  return {
    props: {
      i18n: await loadCatalog(ctx.locale as string),
    },
  }
}

Page404.suppressFirstRenderFlicker = true
Page404.getLayout = (page) => <Layout>{page}</Layout>

export default Page404
