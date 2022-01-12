import {
  useColorMode,
  useColorModeValue,
  Box,
  Switch,
  Container,
  HStack,
  Spacer,
  Stack,
} from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

import { Link } from "@/components/Link"

export const NavbarDesktop: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.900")}
      color={useColorModeValue("gray.700", "white")}
    >
      <Container as={Stack} d={{ base: "flex", md: "flex" }} maxW="5xl" py={4} spacing={4}>
        <HStack>
          <Link href="/">Home</Link>

          <Spacer />

          <Link href="/faq">FAQ</Link>
          <SunIcon />
          <Switch isChecked={colorMode === "dark"} onChange={(e) => toggleColorMode()} />
          <MoonIcon />
        </HStack>
      </Container>
    </Box>
  )
}
