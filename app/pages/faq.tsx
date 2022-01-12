import { Suspense } from "react"
import { BlitzPage, Head } from "blitz"
import { Heading } from "@chakra-ui/react"
import Layout from "app/core/layouts/Layout"

export const Faq = () => {
  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>

      <Heading>Placehoder page for FAQ</Heading>
    </>
  )
}

const ShowFaqPage: BlitzPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Faq />
      </Suspense>
    </div>
  )
}

ShowFaqPage.authenticate = false
ShowFaqPage.getLayout = (page) => <Layout>{page}</Layout>

export default ShowFaqPage
