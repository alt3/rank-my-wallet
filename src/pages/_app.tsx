import { AppProps, ErrorBoundary, ErrorFallbackProps } from "@blitzjs/next"
import { ChakraProvider } from "@chakra-ui/react"
import { i18n } from "@lingui/core"
import { I18nProvider } from "@lingui/react"
import { Analytics } from "@vercel/analytics/react"
import "focus-visible" // Show blue outline accessibility focus for keyboard users, not mouse users
import { useRouter } from "next/router"
import { useEffect } from "react"
import { withBlitz } from "src/blitz-client"
import theme from "src/core/theme"
import Error from "src/pages/_error"
import { activateTranslation } from "src/translations/activateTranslation"

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return <Error statusCode={error.statusCode || 400} title={error.message || error.name} />
}

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  const router = useRouter()
  const locale = router.locale?.toString() || router.defaultLocale?.toString()

  useEffect(() => {
    async function load(locale) {
      await activateTranslation(locale) // i18n
    }
    void load(locale)
  }, [locale])

  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary FallbackComponent={RootErrorFallback}>
        <I18nProvider i18n={i18n}>{getLayout(<Component {...pageProps} />)}</I18nProvider>
        <Analytics />
      </ErrorBoundary>
    </ChakraProvider>
  )
}

export default withBlitz(MyApp)
