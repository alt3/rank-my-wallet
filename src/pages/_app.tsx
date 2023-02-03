import { AppProps, ErrorBoundary, ErrorFallbackProps } from "@blitzjs/next"
import { ChakraProvider } from "@chakra-ui/react"
import { Analytics } from "@vercel/analytics/react"
import "focus-visible" // Show blue outline accessibility focus for keyboard users, not mouse users
import { withBlitz } from "src/blitz-client"
import theme from "src/core/theme"
import Error from "src/pages/_error"

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return <Error statusCode={error.statusCode || 400} title={error.message || error.name} />
}

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        {getLayout(<Component {...pageProps} />)}
        <Analytics />
      </ErrorBoundary>
    </ChakraProvider>
  )
}

export default withBlitz(MyApp)
