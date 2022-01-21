import { ChakraProvider } from "@chakra-ui/react"
import theme from "app/core/theme"
import { AppProps, ErrorBoundary, ErrorComponent, ErrorFallbackProps } from "blitz"
import "focus-visible" // Show blue outline accessibility focus for keyboard users, not mouse users
import { AddressError } from "app/errors/AddressError"
import { withPasswordProtect } from "@storyofams/next-password-protect"

// temporary password protect
export default process.env.PASSWORD_PROTECT
  ? withPasswordProtect(App, {
      // Options go here (optional)
    })
  : App

function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  console.log(process.env)

  // handle server side address errors in dev mode
  if (pageProps.parsedAddress) {
    throw new AddressError({ parsedAddress: pageProps.parsedAddress })
  }

  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </ChakraProvider>
  )
}

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
}
