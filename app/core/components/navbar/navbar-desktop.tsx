import { Routes } from "blitz"
import { Button, Container, Divider, HStack, Spacer, Stack } from "@chakra-ui/react"
import { Link } from "@/components/Link"

export const NavbarDesktop: React.FC = () => {
  return (
    <Container as={Stack} d={{ base: "none", md: "flex" }} maxW="5xl" py={4} spacing={4}>
      <HStack>
        <Link href="/" color="teal.500">
          Home
        </Link>
        <Link href="/" color="teal.500">
          Species
        </Link>
      </HStack>
      <Divider />
    </Container>
  )
}
