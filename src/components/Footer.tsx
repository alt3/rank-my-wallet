import { Link } from "@/components/Link"
import { Container, Flex, Text, useColorModeValue } from "@chakra-ui/react"
import { Trans } from "@lingui/macro"

export function Footer() {
  const styles = {
    container: {
      bottom: 0,
      maxWidth: "100%",
      fontSize: "sm",
      padding: 5,
      paddingTop: 7,
      background: useColorModeValue("gray.200", "gray.900"),
      color: useColorModeValue("gray.700", "white"),
      marginTop: "auto",
    },
    link: {
      color: "teal.500",
      fontWeight: "bold",
    },
  }

  return (
    <Container as="footer" centerContent {...styles.container}>
      <Flex verticalAlign="center" textAlign="center" gridGap={2}>
        <Text>
          <Trans>
            An{" "}
            <Link isExternal href="https://github.com/alt3" passHref {...styles.link}>
              Alt3
            </Link>{" "}
            product powered by{" "}
            <Link isExternal href="https://ergo.watch/" passHref {...styles.link}>
              Ergo Watch{" "}
            </Link>
          </Trans>
        </Text>
      </Flex>
    </Container>
  )
}

export default Footer
