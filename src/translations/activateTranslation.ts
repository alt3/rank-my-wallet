import { i18n } from "@lingui/core"

i18n.loadLocaleData({
  en : {},
  nl: {},
  pseudo: {},
})

export async function activateTranslation(locale: string) {
  const { messages } = await import(`@lingui/loader!/src/translations/locales/${locale}/messages.po`)

  i18n.load(locale, messages)
  i18n.activate(locale)
}
