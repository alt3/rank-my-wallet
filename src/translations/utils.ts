import { i18n, Messages } from '@lingui/core';
import { useRouter } from 'next/router';

export async function loadCatalog(locale: string) {
  const { messages } = await import(`@lingui/loader!/src/translations/locales/${locale}/messages.po`)

  return messages
}

export function useLinguiInit(messages: Messages) {
  const router = useRouter()
  const locale = router.locale || router.defaultLocale!
  i18n.loadAndActivate(locale, messages, false);

  return i18n;
}
