import { BlitzPage } from "@blitzjs/next"
import { t } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { BackHomeButton, MetaTags, PageHero } from "src/components"
import Layout from "src/core/layouts/Layout"
import { GetStaticPropsContext, GetStaticPropsResult } from "next"

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
  return {
    props: {
      i18n: (await import(`@lingui/loader!./locales/404/${ctx.locale}.po`)).messages,
    },
  }
}

Page404.suppressFirstRenderFlicker = true
Page404.getLayout = (page) => <Layout>{page}</Layout>

export default Page404
