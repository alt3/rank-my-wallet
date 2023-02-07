import { Button, Center } from "@chakra-ui/react"
import { Link } from "src/components"

export function SpeciesNavBar({ ...rest }) {
  const styles = {
    link: {
      textDecoration: "none !important",
    },
    button: {
      variant: "solid",
      size: "lg",
      fontWeight: "normal",
      underline: "none",
    },
  }

  return (
    <Center>
      <Link href="/species/cardano" aria-label="Cardano Species" {...styles.link}>
        <Button {...styles.button} width={140} marginRight={5}>
          Cardano
        </Button>
      </Link>

      <Link href="/species/ergo" aria-label="Ergo Species" {...styles.link}>
        <Button {...styles.button} width={140}>
          Ergo
        </Button>
      </Link>
    </Center>
  )
}

export default SpeciesNavBar
