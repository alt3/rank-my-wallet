import { Link } from "@/components/Link"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import {
  Box,
  Container,
  HStack,
  Spacer,
  Stack,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react"

export const NavbarDesktop: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box color={useColorModeValue("gray.600", "whiteAlpha.600")}>
      <Container as={Stack} d={{ base: "flex", md: "flex" }} maxW="5xl" py={4} spacing={4}>
        <HStack>
          <Link href="/">Home</Link>

          <Spacer />

          <Link href="/faq" paddingRight="1rem">
            FAQ
          </Link>
          <SunIcon />
          <Switch isChecked={colorMode === "dark"} onChange={() => toggleColorMode()} />
          <MoonIcon />
        </HStack>
      </Container>
    </Box>
  )
}
