import { Box, Center, Container, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react"

interface PageHeroProps {
  title: string
  subtitle?: string
}

export const PageHero = ({ title, subtitle }: PageHeroProps) => {
  const styles = {
    box: {
      marginBottom: "3rem",
    },
    container: {
      maxW: "container.md",
      marginTop: { base: "3rem", md: "4rem" },
      // paddingBottom: { base: "4rem", md: "5rem" },
    },
    heading: {
      fontSize: { base: "3xl", md: "6xl" },
      fontWeight: "bold",
      letterSpacing: "tighter",
      color: useColorModeValue("gray.700", "whiteAlpha.900"),
      marginBottom: 0,
      paddingBottom: 0,
    },
  }

  return (
    <Box {...styles.box}>
      <Container {...styles.container}>
        <Center>
          <Stack width="100%" spacing={8} align="center">
            <Heading {...styles.heading}>{title}</Heading>
          </Stack>
        </Center>
      </Container>
    </Box>
  )
}

export default PageHero
