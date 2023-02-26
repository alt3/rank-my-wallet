import { Box, Center, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"

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
      marginTop: { base: "2.5rem", md: "4rem" },
    },
    title: {
      fontSize: { base: "4xl", md: "6xl" },
      fontWeight: "bold",
      letterSpacing: "tighter",
      marginBottom: 0,
      paddingBottom: { base: "1.5rem", md: "1rem" },
      textAlign: "center" as const,
    },
    subtitle: {
      color: useColorModeValue("teal.500", "teal.300"),
      textAlign: "center" as const,
      marginBottom: { base: "1rem", md: 0 },
    },
  }

  return (
    <Box {...styles.box}>
      <Container {...styles.container}>
        <Center>
          <Stack width="100%" spacing={{ base: 6, sm: 8 }} align="center">
            <Heading {...styles.title}>{title}</Heading>
            {subtitle && <Text {...styles.subtitle}>{subtitle}</Text>}
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default ErrorHero
