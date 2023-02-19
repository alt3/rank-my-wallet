import { i18n, Messages } from "@lingui/core"
import { en, nl } from "make-plural/plurals"

i18n.loadLocaleData({
  en: { plurals: en },
  nl: { plurals: nl },
  pseudo: { plurals: en },
})

export async function loadTranslation(locale: string) {
  let messages: Messages

  if (process && process.env.NODE_ENV === "production") {
    ;({ messages } = await import(`/src/translations/locales/${locale}/messages.js`))
  } else {
    ;({ messages } = await import(`@lingui/loader!/src/translations/locales/${locale}/messages.po`))
  }

  i18n.load(locale, messages)
  i18n.activate(locale)
}
