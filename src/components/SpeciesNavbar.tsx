import { Link } from "@/components/Link"
import { Button } from "@chakra-ui/button"
import { Center } from "@chakra-ui/layout"
import { Trans, t } from "@lingui/macro"
import { useLingui } from "@lingui/react"

export function SpeciesNavbar({ ...rest }) {
  useLingui()

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
      <Link href="/species/cardano" {...styles.link}>
        <Button {...styles.button} aria-label={t`Cardano Species`} width={140} marginRight={5}>
          <Trans>Cardano</Trans>
        </Button>
      </Link>

      <Link href="/species/ergo" {...styles.link}>
        <Button {...styles.button} aria-label={t`Ergo Species`} width={140}>
          <Trans>Ergo</Trans>
        </Button>
      </Link>
    </Center>
  )
}

export default SpeciesNavbar
