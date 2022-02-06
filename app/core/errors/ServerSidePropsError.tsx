import { Text, VStack } from "@chakra-ui/react"
import { BackHomeButton, PageHero } from "@components"

export function ServerSidePropsError({ error }) {
  return (
    <>
      <PageHero title="Something went wrong preparing your data" />

      <VStack>
        {error.status_code && (
          <Text>
            Error {error.status_code} - {error.error}
          </Text>
        )}
        <Text>{error.message}</Text>
      </VStack>

      <BackHomeButton title="Home" marginTop="5rem" />
    </>
  )
}

export default ServerSidePropsError
