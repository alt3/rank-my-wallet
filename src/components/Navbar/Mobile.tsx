import {
  Box,
  Button,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react"
import { t, Trans } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import React from "react"
import { BsList, BsMoonFill, BsSunFill } from "react-icons/bs"
import { HiExternalLink } from "react-icons/hi"
import { Link } from "src/components"
import { LogoMobile } from "../Images/Logos"
import { Drawer } from "./Drawer"

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
        <Link href="/" aria-label={t`Home`} passHref marginLeft={"-1"}>
          <LogoMobile marginTop="0.25rem" h="8" pointerEvents="none" fill={logoColorPrimary} />
        </Link>

        <Box marginLeft={"auto"}>
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
            <Link href={"/"} aria-label={t`Home`} onClick={() => onClose()}>
              <Trans>Home</Trans>
            </Link>

            <Link href={"/species"} aria-label={t`Blockchain species`} onClick={() => onClose()}>
              <Trans>SpeciesPlural</Trans>
            </Link>

            <Link href={"/tipbox"} aria-label={t`Tip Box`} onClick={() => onClose()}>
              <Trans>Tip Box</Trans>
            </Link>

            <Link
              href={"/faq"}
              aria-label={t`Frequently Asked Questions (FAQ)`}
              onClick={() => onClose()}
            >
              <Trans>FAQ</Trans>
            </Link>

            <Link
              href={"https://twitter.com/RankMyWallet/"}
              aria-label={t`RankMyWallet on Twitter`}
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
              aria-label={t`RankMyWallet on Github`}
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
