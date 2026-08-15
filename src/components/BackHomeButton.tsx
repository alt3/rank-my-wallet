import { Link } from "@/components/Link"
import { Button, Center } from "@chakra-ui/react"

export function BackHomeButton({ title, buttonSize = "lg" as const, ...rest }) {
  return (
    <Center {...rest}>
      <Link href="/" title={title} textDecoration="none !important" passHref>
        <Button colorPalette="teal" size={buttonSize}>
          {title}
        </Button>
      </Link>
    </Center>
  )
}

export default BackHomeButton
