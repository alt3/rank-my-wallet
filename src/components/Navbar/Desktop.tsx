import { Box, Button, Flex, IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { BsGithub, BsMoonFill, BsSunFill, BsTwitter } from "react-icons/bs"
import { Link } from "src/components"
import { Logo } from "../Images/Logos"

interface NavbarProps {
  logoColorPrimary: string // TODO: use stricter type
  logoColorSecondary: string
}

export function NavbarDesktop({ logoColorPrimary, logoColorSecondary }: NavbarProps) {
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
        <Flex align="left">
          <Link href="/" aria-label="Home" passHref>
            <Logo
              marginTop="0.5rem"
              h="10"
              pointerEvents="none"
              fill={{
                primary: logoColorPrimary,
                secondary: logoColorSecondary,
              }}
            />
          </Link>
        </Flex>

        <Flex
          justify="flex-end"
          w="100%"
          align="center"
          maxW="1100px"
          color={useColorModeValue("gray.700", "whiteAlpha.600")}
        >
          <Link
            href="/species"
            aria-label="Blockchain species"
            textDecoration="none !important"
            passHref
          >
            <Button variant="ghost" color="inherit" fontWeight="normal" textDecoration="none">
              Species
            </Button>
          </Link>

          <Link href="/tipbox" aria-label="Tip Box" textDecoration="none !important" passHref>
            <Button variant="ghost" color="inherit" fontWeight="normal" textDecoration="none">
              Tip Box
            </Button>
          </Link>

          <Link
            href="https://www.twitter.com/RankMyWallet/"
            aria-label="RankMyWallet on Twitter"
            isExternal
            passHref
          >
            <IconButton
              size="lg"
              maxWidth="1rem"
              w={10}
              ml={0}
              aria-label={`RankMyWallet on Twitter`}
              variant="ghost"
              color="current"
              marginLeft="0"
              icon={<BsTwitter />}
            />
          </Link>

          <Link
            href="https://github.com/alt3/rank-my-wallet/"
            aria-label="RankMyWallet on Github"
            isExternal
            passHref
          >
            <IconButton
              size="lg"
              maxWidth="1rem"
              w={10}
              ml={0}
              aria-label={`RankMyWallet on Github`}
              variant="ghost"
              color="current"
              marginLeft="0"
              icon={<BsGithub />}
            />
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

export default NavbarDesktop
