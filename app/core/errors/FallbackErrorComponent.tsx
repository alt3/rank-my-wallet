import { BackHomeButton, PageHero } from "@components"
import Layout from "app/core/layouts/Layout"
import { Head } from "blitz"
import { Text, VStack } from "@chakra-ui/react"

export default function UnexpectedError({ error }) {
  const statusCode = error.statusCode || 400
  const message = error.message || error.name

  return (
    <>
      <Head>
        <title>Unexpected Error {statusCode}</title>
      </Head>
      <Layout>
        <PageHero title="Unexpected Error" />

        <VStack>
          <Text>
            Error {statusCode}: {message}
          </Text>
        </VStack>

        <BackHomeButton title="Home" marginTop="5rem" />
      </Layout>
    </>
  )
}