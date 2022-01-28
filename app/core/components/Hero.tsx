import { AddressForm } from "@components"
import { Box, Center, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"

export function Hero() {
  const styles = {
    box: {
      marginBottom: "3rem",
    },
    container: {
      maxW: "container.md",
      marginTop: { base: "3rem", md: "4rem" },
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
  }

  return (
    <Box {...styles.box}>
      <Container {...styles.container}>
        <Center>
          <Stack width="100%" spacing={8} align="center">
            <Heading {...styles.heading}>
              Rank My{" "}
              <Text as="span" color={useColorModeValue("teal.500", "teal.300")}>
                Wallet
              </Text>
            </Heading>
            <AddressForm placeholder="Wallet address" />
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default Hero
