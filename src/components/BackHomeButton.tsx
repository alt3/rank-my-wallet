import { Button, Center } from "@chakra-ui/react"
import { Link } from "src/components"

export function BackHomeButton({ title, ...rest }) {
  return (
    <Center {...rest}>
      <Link href="/" title={title} textDecoration="none !important" passHref>
        <Button colorScheme="teal">{title}</Button>
      </Link>
    </Center>
  )
}

export default BackHomeButton
