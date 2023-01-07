import { Button, Center } from "@chakra-ui/react"
import { Link } from "src/components"

export function BackHomeButton({ title, ...rest }) {
  return (
    <Center {...rest}>
      <Link href="/" title={title} passHref>
        <Button as="a" colorScheme="teal">
          {title}
        </Button>
      </Link>
    </Center>
  )
}

export default BackHomeButton
