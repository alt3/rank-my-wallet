import { Logo } from "@/components/Images/Logos/Logo"
import { Link } from "@/components/Link"
import { LocaleSwitcher } from "@/components/LocaleSwitcher"
import { Button, IconButton } from "@chakra-ui/button"
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode"
import { Box, Flex } from "@chakra-ui/layout"
import { Trans, t } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { BsGithub, BsMoonFill, BsSunFill, BsTwitter } from "react-icons/bs"

interface NavbarProps {
  logoColorPrimary: string // TODO: use stricter type
  logoColorSecondary: string
}

export function NavbarDesktop({ logoColorPrimary, logoColorSecondary }: NavbarProps) {
  useLingui()

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
          <Link href="/" passHref>
            <Logo
              aria-label={t`Home`}
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
          <Link href="/species" textDecoration="none !important" passHref>
            <Button
              variant="ghost"
              aria-label={t`Blockchain Species`}
              color="inherit"
              fontWeight="normal"
              textDecoration="none"
            >
              <Trans context="Plural">Species</Trans>
            </Button>
          </Link>

          <Link href="/tipbox" textDecoration="none !important" passHref>
            <Button
              variant="ghost"
              aria-label={t`Tip Box`}
              color="inherit"
              fontWeight="normal"
              textDecoration="none"
            >
              <Trans>Tip Box</Trans>
            </Button>
          </Link>

          <Link href="/faq" textDecoration="none !important" passHref>
            <Button
              variant="ghost"
              aria-label={t`Frequently Asked Questions (FAQ)`}
              color="inherit"
              fontWeight="normal"
              textDecoration="none"
            >
              <Trans>FAQ</Trans>
            </Button>
          </Link>

          <Link href="https://www.twitter.com/RankMyWallet/" isExternal passHref>
            <IconButton
              size="lg"
              maxWidth="1rem"
              w={10}
              ml={0}
              aria-label={t`RankMyWallet on Twitter`}
              variant="ghost"
              color="current"
              marginStart="0"
              icon={<BsTwitter />}
            />
          </Link>

          <Link href="https://github.com/alt3/rank-my-wallet/" isExternal passHref>
            <IconButton
              size="lg"
              maxWidth="1rem"
              w={10}
              ml={0}
              aria-label={t`RankMyWallet on Github`}
              variant="ghost"
              color="current"
              marginStart="0"
              icon={<BsGithub />}
            />
          </Link>

          <LocaleSwitcher />

          <IconButton
            size="lg"
            maxWidth="1rem"
            ml={0}
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            marginStart="0"
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default NavbarDesktop
