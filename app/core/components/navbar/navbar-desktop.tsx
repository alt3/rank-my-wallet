import { Routes } from "blitz"
import { Switch, useColorMode, Container, Divider, HStack, Spacer, Stack } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

import { Link } from "@/components/Link"

export const NavbarDesktop: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Container as={Stack} d={{ base: "none", md: "flex" }} maxW="5xl" py={4} spacing={4}>
      <HStack>
        <Link href="/">Home</Link>
        <Link href="/">Species</Link>

        <Spacer />

        <SunIcon />
        <Switch isChecked={colorMode === "dark"} onChange={(e) => toggleColorMode()} />
        <MoonIcon />
      </HStack>

      <Divider />
    </Container>
  )
}
