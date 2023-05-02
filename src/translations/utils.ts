import { i18n, Messages } from "@lingui/core"
import { useRouter } from "next/router"
import { useEffect } from "react"
import languages from "src/translations/languages"

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

export function getRTL(locale) {
  const language = languages.find((language) => {
    return language.locale === locale
  })

  return {
    direction: language?.rtl === true ? "rtl" : "ltr",
    left: language?.rtl === true ? "right" : "left",
    right: language?.rtl === true ? "left" : "right",
  }
}
