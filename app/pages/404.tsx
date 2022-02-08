import { BackHomeButton, PageHero } from "@components"
import Layout from "app/core/layouts/Layout"
import { Head } from "blitz"

// ------------------------------------------------------
// This page is rendered if a route match is not found
// ------------------------------------------------------
export default function Page404() {
  const title = "Page not found"
  const statusCode = 404

  return (
    <>
      <Head>
        <title>
          {statusCode}: {title}
        </title>
      </Head>
      <PageHero title={title} />

      <BackHomeButton title="Home" marginTop="5rem" />
    </>
  )
}

Page404.getLayout = (page) => <Layout>{page}</Layout>
