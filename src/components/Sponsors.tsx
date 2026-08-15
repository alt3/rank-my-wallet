import { FrontpageCard } from "@/components/FrontpageCard"
import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react"
import { useColorModeValue } from "src/core/theme/color-mode"
import { Trans } from "@lingui/react/macro"
import { BsHeartFill } from "react-icons/bs"

export function Sponsors() {
  const styles = {
    caption: {
      fontSize: "sm",
      marginBottom: "2.5rem",
      fontWeight: useColorModeValue(600, 500),
      letterSpacing: "widest",
      color: useColorModeValue("gray.600", "gray.400"),
    },
    grid: {
      columns: [2, null, 3],
      spacing: { base: "15px", sm: "30px", md: "40px" },
    },
  }

  return (
    <Box marginBottom="6rem">
      <Center>
        <Text as="h2" textTransform="uppercase" {...styles.caption}>
          <Trans>Sponsored By:</Trans>
        </Text>
      </Center>

      <SimpleGrid {...styles.grid}>
        <FrontpageCard url="/sponsoring" isExternal={false}>
          <Box as={"span"} textAlign={"center"}>
            <Box as={BsHeartFill} display="inline-block" color="red" marginEnd="0.25rem" />
            <Trans>Your Project</Trans>
          </Box>
        </FrontpageCard>

        <FrontpageCard url="/sponsoring" isExternal={false}>
          <Box as={"span"} textAlign={"center"}>
            <Box as={BsHeartFill} display="inline-block" color="red" marginEnd="0.25rem" />
            <Trans>Your Project</Trans>
          </Box>
        </FrontpageCard>

        <FrontpageCard url="/sponsoring" isExternal={false}>
          <Box as={"span"} textAlign={"center"}>
            <Box as={BsHeartFill} display="inline-block" color="red" marginEnd="0.25rem" />
            <Trans>Your Project</Trans>
          </Box>
        </FrontpageCard>
      </SimpleGrid>
    </Box>
  )
}

export default Sponsors
