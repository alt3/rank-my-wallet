import NextLink, { LinkProps as NextLinkProps } from "next/link"
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react"

interface LinkProps extends NextLinkProps, Omit<ChakraLinkProps, keyof NextLinkProps> {}

export const Link: React.FC<LinkProps> = ({
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
  ...props
}) => (
  <NextLink {...{ href, as, locale, legacyBehavior, passHref, prefetch, replace, scroll, shallow }}>
    <ChakraLink {...props}>{children}</ChakraLink>
  </NextLink>
)
