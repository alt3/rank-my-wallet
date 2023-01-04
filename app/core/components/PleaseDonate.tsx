import { Box, Text, useColorModeValue } from "@chakra-ui/react"
import { Link } from "@components"
import { BsHeartFill } from "react-icons/bs"

export function PleaseDonate({ ...rest }) {
  return (
    <Link
      href="/tipbox"
      aria-label="Tip Box"
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
          Your donations help keep this site ad-free
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
