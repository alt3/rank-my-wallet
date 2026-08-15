import { Link } from "@/components/Link"
import { Box, Text } from "@chakra-ui/react"
import { useColorModeValue } from "src/core/theme/color-mode"
import { Trans } from "@lingui/react/macro"
import { BsHeartFill } from "react-icons/bs"

export function PleaseDonate({ ...rest }) {
  return (
    <Link
      href="/tipbox"
      _hover={{ textDecoration: "none" }}
      title="This message will not be shown for recognized donator addresses"
    >
      <Box
        borderWidth="1px"
        borderRadius="sm"
        textAlign="center"
        padding="2rem"
        borderColor={useColorModeValue("gray.300", "inherit")}
        {...rest}
      >
        <Text color={useColorModeValue("gray.600", "gray.500")}>
          <Box
            as={BsHeartFill}
            display="inline-block"
            color="red"
            marginEnd="0.25rem"
          />
          <Trans>Please donate to keep this website ad-free</Trans>
          <Box
            as={BsHeartFill}
            display="inline-block"
            color="red"
            marginStart="0.5rem"
          />
        </Text>
      </Box>
    </Link>
  )
}

export default PleaseDonate
