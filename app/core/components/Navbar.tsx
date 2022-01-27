import { Link } from "@components"
import {
  Box,
  Center,
  Flex,
  Icon,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"
import { BsMoonFill, BsSunFill, BsTwitter } from "react-icons/bs"

export const Navbar: React.FC = () => {
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(BsMoonFill, BsSunFill)

  return (
    <Box
      color={useColorModeValue("gray.700", "whiteAlpha.600")}
      fontWeight={useColorModeValue(600, 500)}
      maxW="6xl"
      mx="auto"
      paddingTop={2}
      width="100%"
    >
      <Flex w="100%" h="100%" px="6" align="center" justify="space-between">
        <Flex align="center">
          <Link href="/">Home</Link>
        </Flex>

        <Flex
          justify="flex-end"
          w="100%"
          align="center"
          maxW="1100px"
          color={useColorModeValue("gray.700", "whiteAlpha.600")}
        >
          <Link
            href="https://www.twitter.com/RankMyWallet/"
            aria-label="Visit RankMyWallet on Twitter"
            isExternal
            passHref
            h="48px"
            w="48px"
            fontSize="lg"
            marginRight="0.25rem"
            marginTop="0.35rem"
            paddingTop="0.682rem"
          >
            <Center>
              <Icon as={BsTwitter} w={5} h={5} _hover={{ color: "#1D9AEF" }} />
            </Center>
          </Link>

          <IconButton
            size="lg"
            maxWidth="1rem"
            ml={0}
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            marginLeft="0"
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />
        </Flex>
      </Flex>
    </Box>
  )
}
