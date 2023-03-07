import { i18n } from "@lingui/core"
import { en, nl } from "make-plural/plurals"

i18n.loadLocaleData({
  en: { plurals: en },
  nl: { plurals: nl },
  pseudo: { plurals: en },
})

export async function activateTranslation(locale: string) {
  const { messages } = await import(`@lingui/loader!/src/translations/locales/${locale}/messages.po`)

  i18n.load(locale, messages)
  i18n.activate(locale)
}
