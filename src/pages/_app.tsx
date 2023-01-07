import { ChakraProvider } from "@chakra-ui/react"
import theme from "app/core/theme"
import Error from "src/pages/_error"
import { ErrorFallbackProps, ErrorBoundary, AppProps } from "@blitzjs/next"
import { withBlitz } from "src/blitz-client"
import "focus-visible" // Show blue outline accessibility focus for keyboard users, not mouse users
import React from "react"

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return <Error statusCode={error.statusCode || 400} title={error.message || error.name} />
}

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        {getLayout(<Component {...pageProps} />)}
      </ErrorBoundary>
    </ChakraProvider>
  )
}

export default withBlitz(MyApp)
