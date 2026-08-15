import { AppProps, ErrorBoundary, ErrorFallbackProps } from "@blitzjs/next"
import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeProvider } from "src/core/theme/color-mode"
import { I18nProvider } from "@lingui/react"
import "focus-visible" // Show blue outline accessibility focus for keyboard users, not mouse users
import { useRouter } from "next/router"
import { useEffect } from "react"
import { withBlitz } from "src/blitz-client"
import system from "src/core/theme"
import Error from "src/pages/_error"
import { getRTL, useLinguiInit } from "src/translations/utils"

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return <Error statusCode={error.statusCode || 400} title={error.message || error.name} />
}

interface CustomPageProps {
  i18n: any
}

function MyApp({ Component, pageProps: { i18n, ...pageProps } }: AppProps<CustomPageProps>) {
  const getLayout = Component.getLayout || ((page) => page)
  const initializedI18n = useLinguiInit(i18n)
  const router = useRouter()
  const rtl = getRTL(router.locale || "en-us")

  // `[rtl]` used to sit outside the useEffect() call, making this a comma
  // expression rather than a dependency array -- so the effect re-ran on every
  // render instead of only when the locale direction changed.
  useEffect(() => {
    document.documentElement.dir = rtl.direction
  }, [rtl])

  return (
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <ErrorBoundary FallbackComponent={RootErrorFallback}>
          <I18nProvider i18n={initializedI18n}>
            {getLayout(<Component {...pageProps} />)}
          </I18nProvider>
        </ErrorBoundary>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default withBlitz(MyApp)
