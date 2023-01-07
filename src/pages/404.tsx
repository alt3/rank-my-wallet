import { BackHomeButton, PageHero } from "src/core/components"
import Layout from "src/core/layouts/Layout"
import Head from "next/head"

// ------------------------------------------------------
// This page is rendered if a route match is not found
// ------------------------------------------------------
export default function Page404() {
  const statusCode = 404
  const title = "Page not found"

  return <h2>Hello 404</h2>

  const pageTitle = `${statusCode}: ${title}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <PageHero title={title} />

      <BackHomeButton title="Home" marginTop="5rem" />
    </>
  )
}

Page404.getLayout = (page) => <Layout>{page}</Layout>
