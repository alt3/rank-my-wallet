import { ExternalLinkIcon } from "@/components/ExternalLinkIcon"
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"

interface LinkProps extends NextLinkProps, Omit<ChakraLinkProps, keyof NextLinkProps> {}

interface CustomLinkProps extends LinkProps {
  withExternalIcon?: boolean
  /**
   * Chakra 3 dropped `isExternal` from Link. Kept here as part of this
   * component's own API and translated below, so the call sites did not all
   * have to spell out target/rel by hand.
   */
  isExternal?: boolean
}

export const Link: React.FC<CustomLinkProps> = ({
  children,
  href,
  as,
  locale,
  passHref,
  legacyBehavior = true,
  prefetch,
  replace,
  scroll,
  shallow,
  withExternalIcon,
  isExternal,
  ...props
}) => (
  <NextLink {...{ href, as, locale, legacyBehavior, passHref, prefetch, replace, scroll, shallow }}>
    <ChakraLink
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
      {withExternalIcon && <ExternalLinkIcon marginStart="0.25rem" />}
    </ChakraLink>
  </NextLink>
)
