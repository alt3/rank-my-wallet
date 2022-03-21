import { AddressForm } from "@components"
import { Box, Center, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"

export function Hero() {
  const styles = {
    box: {
      marginBottom: "3rem",
    },
    container: {
      maxW: "container.md",
      marginTop: { base: "3rem", md: "5rem" },
      paddingBottom: { base: "4rem", md: "5rem" },
    },
    heading: {
      fontSize: { base: "4xl", sm: "6xl" },
      fontWeight: "bold",
      letterSpacing: "tighter",
      color: useColorModeValue("gray.700", "whiteAlpha.900"),
      marginBottom: { base: "1rem", md: "2rem" },
      textAlign: "center" as const,
    },
    headingSub: {
      color: useColorModeValue("teal.500", "teal.300"),
      marginTop: 0,
    },
    form: {
      marginTop: { base: "2.5rem", md: "4rem" },
    },
  }

  return (
    <Box {...styles.box}>
      <Container {...styles.container}>
        <Center>
          <Stack width="100%" spacing={8} align="center">
            <Heading display={{ base: "inline", sm: "none" }} {...styles.heading}>
              Rank My{" "}
              <Text as="span" {...styles.headingSub}>
                Wallet
              </Text>
            </Heading>

            <AddressForm placeholder="Wallet address" {...styles.form} />
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default Hero
