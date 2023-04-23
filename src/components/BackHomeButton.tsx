import { Link } from "@/components/Link"
import { Button } from "@chakra-ui/button"
import { Center } from "@chakra-ui/layout"

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
