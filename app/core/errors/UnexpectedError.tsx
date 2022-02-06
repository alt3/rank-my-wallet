import { Text, VStack } from "@chakra-ui/react"
import { BackHomeButton, PageHero } from "@components"

export function UnexpectedError({ side, statusCode, statusCodeName, message }) {
  return (
    <>
      <PageHero title={`Unexpected ${side} Error`} marginTop={{ base: "7rem", sm: "8rem" }} />

      <VStack>
        {statusCode && (
          <Text align="center">
            Error {statusCode} - {statusCodeName}
          </Text>
        )}
        {message && <Text align="center">{message}</Text>}
      </VStack>

      <BackHomeButton title="Home" marginTop="5rem" />
    </>
  )
}

export default UnexpectedError
