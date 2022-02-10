import { Box, Center, Container, Heading, Stack, useColorModeValue } from "@chakra-ui/react"

interface ErrorHeroProps {
  title: string
  subtitle?: string
}

export const ErrorHero = ({ title, subtitle }: ErrorHeroProps) => {
  const styles = {
    box: {
      marginBottom: "3rem",
    },
    container: {
      maxW: "container.md",
      marginTop: { base: "3rem", md: "4rem" },
      // paddingBottom: { base: "4rem", md: "5rem" },
    },
    title: {
      fontSize: { base: "4xl", md: "6xl" },
      fontWeight: "bold",
      letterSpacing: "tighter",
      color: useColorModeValue("teal.500", "teal.300"),
      marginBottom: 0,
      paddingBottom: 0,
      textAlign: "center" as const,
    },
    subtitle: {
      color: useColorModeValue("gray.700", "whiteAlpha.900"),
      textAlign: "center" as const,
    },
  }

  return (
    <Box {...styles.box}>
      <Container {...styles.container}>
        <Center>
          <Stack width="100%" spacing={{ base: 6, sm: 8 }} align="center">
            <Heading {...styles.title}>{title}</Heading>
            {subtitle && <Heading {...styles.subtitle}>{subtitle}</Heading>}
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default ErrorHero
