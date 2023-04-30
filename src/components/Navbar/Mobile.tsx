import { LogoMobile } from "@/components/Images/Logos/LogoMobile"
import { Link } from "@/components/Link"
import { LocaleSwitcher } from "@/components/LocaleSwitcher"
import { Drawer } from "@/components/Navbar/Drawer"
import { Button, IconButton } from "@chakra-ui/button"
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode"
import { useDisclosure } from "@chakra-ui/hooks"
import { Box, Flex, VStack } from "@chakra-ui/layout"
import { Trans, t } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import React from "react"
import { BsList, BsMoonFill, BsSunFill } from "react-icons/bs"
import { HiExternalLink } from "react-icons/hi"

interface NavbarProps {
  logoColorPrimary: string // TODO: use stricter type
  logoColorSecondary: string
}

export function NavbarMobile({ logoColorPrimary, logoColorSecondary }: NavbarProps) {
  useLingui()

  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(BsMoonFill, BsSunFill)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)

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
        <Link href="/" passHref marginStart={"-1"}>
          <LogoMobile marginTop="0.25rem" h="8" pointerEvents="none" fill={logoColorPrimary} />
        </Link>

        <Box marginStart={"auto"}>
          <LocaleSwitcher />

          <IconButton
            size="lg"
            variant="ghost"
            maxWidth="1rem"
            ml={0}
            aria-label={t`Switch to ${text} mode`}
            color="current"
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />

          <Button
            size="xs"
            variant={"ghost"}
            ref={btnRef}
            onClick={onOpen}
            height={"auto"}
            marginRight={-3}
          >
            <BsList size="26px" />
          </Button>
        </Box>

        <Drawer isOpen={isOpen} onClose={onClose} btnRef={btnRef} title={null} footer={null}>
          <VStack alignItems="right">
            <Link href={"/"} onClick={() => onClose()}>
              <Trans>Home</Trans>
            </Link>

            <Link href={"/species"} onClick={() => onClose()}>
              <Trans context="Plural">Species</Trans>
            </Link>

            <Link href={"/tipbox"} onClick={() => onClose()}>
              <Trans>Tip Box</Trans>
            </Link>

            <Link href={"/faq"} onClick={() => onClose()}>
              <Trans>FAQ</Trans>
            </Link>

            <Link
              href={"https://twitter.com/RankMyWallet/"}
              onClick={() => onClose()}
              isExternal
              passHref
            >
              <Trans>Twitter</Trans>{" "}
              <span>
                <Box as={HiExternalLink} viewBox="0 0 20 15" display="inline-block" />
              </span>
            </Link>
            <Link
              href={"https://github.com/alt3/rank-my-wallet/"}
              onClick={() => onClose()}
              isExternal
              passHref
            >
              <Trans>Github</Trans>{" "}
              <span>
                <Box as={HiExternalLink} viewBox="0 0 20 15" display="inline-block" />
              </span>
            </Link>
          </VStack>
        </Drawer>
      </Flex>
    </Box>
  )
}

export default NavbarMobile
