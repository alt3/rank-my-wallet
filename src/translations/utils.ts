import { i18n, Messages } from "@lingui/core"
import { useRouter } from "next/router"
import { useEffect } from "react"
import languages from "src/translations/languages"
import { ResponsiveValue } from "@chakra-ui/react"
import * as CSS from "csstype"

export async function loadCatalog(locale: string) {
  const { messages } = await import(`@lingui/loader!./locales/${locale}.po`)

  return messages
}

export function useLinguiInit(messages: Messages) {
  const router = useRouter()
  const locale = router.locale || router.defaultLocale!

  const isClient = typeof window !== "undefined"

  if (!isClient && locale !== i18n.locale) {
    // there is single instance of i18n on the server
    i18n.loadAndActivate({ locale, messages })
  }
  if (isClient && i18n.locale === undefined) {
    // first client render
    i18n.loadAndActivate({ locale, messages })
  }

  useEffect(() => {
    const localeDidChange = locale !== i18n.locale
    if (localeDidChange) {
      i18n.loadAndActivate({ locale, messages })
    }
  }, [locale, messages])

  return i18n
}

export function getRTL(locale): {
  direction: string
  left: ResponsiveValue<CSS.Property.TextAlign>
  right: ResponsiveValue<CSS.Property.TextAlign>
} {
  const language = languages.find((language) => {
    return language.locale === locale
  })

  return {
    direction: language?.rtl === true ? "rtl" : "ltr", // use as html `dir` element
    left: language?.rtl === true ? "right" : "left", // used as textAlign
    right: language?.rtl === true ? "left" : "right", // used as textAlign
  }
}
