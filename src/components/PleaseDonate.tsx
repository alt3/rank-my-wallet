import { Link } from "@/components/Link"
import { Box, Text, useColorModeValue } from "@chakra-ui/react"
import { Trans } from "@lingui/macro"
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
            viewBox="0 0 20 10"
            display="inline-block"
            color="red"
            marginRight="0.25rem"
          />
          <Trans>Please donate to keep this website ad-free</Trans>
          <Box
            as={BsHeartFill}
            viewBox="0 0 20 10"
            display="inline-block"
            color="red"
            marginLeft="0.5rem"
          />
        </Text>
      </Box>
    </Link>
  )
}

export default PleaseDonate
