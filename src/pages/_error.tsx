import Layout from "src/core/layouts/Layout"
import Head from "next/head"
import { Text, VStack } from "@chakra-ui/react"
import { BackHomeButton, PageHero } from "src/components"

export function Error({ statusCode, title }) {
  const pageTitle = "Unexpected Error"
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <Layout>
        <PageHero title="Unexpected Error" />

        <VStack>
          <Text>
            Error {statusCode}: {title}
          </Text>
        </VStack>

        <BackHomeButton title="Home" marginTop="5rem" />
      </Layout>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
