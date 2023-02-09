import { Button, Center } from "@chakra-ui/react"
import { Link } from "src/components"

export function BackHomeButton({ title, buttonSize = "lg", ...rest }) {
  return (
    <Center {...rest}>
      <Link href="/" title={title} textDecoration="none !important" passHref>
        <Button colorScheme="teal" size={buttonSize}>
          {title}
        </Button>
      </Link>
    </Center>
  )
}

export default BackHomeButton
