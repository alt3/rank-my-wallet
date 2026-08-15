import { IconButton, Menu, Portal } from "@chakra-ui/react"
import { useLingui } from "@lingui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import ReactCountryFlag from "react-country-flag"
import nextId from "react-id-generator"
import languages, { LOCALES } from "src/translations/languages"

export function LocaleSwitcher() {
  const { i18n } = useLingui()
  const router = useRouter()

  const [, setLocale] = useState<LOCALES>(router.locale!.split("-")[0] as LOCALES)

  languages.sort((a, b) => {
    const aMessage = i18n._(a.msg)
    const bMessage = i18n._(b.msg)

    if (aMessage > bMessage) {
      return 1
    }
    if (aMessage < bMessage) {
      return -1
    }
    return 0
  })

  function handleClick(locale: LOCALES) {
    setLocale(locale)

    const href = {
      pathname: router.pathname,
      query: router.query,
    }

    router.push(href, href, { locale }).catch((e) => {
      console.log(`Error: ${e}`)
    })
  }

  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <IconButton aria-label="Options" variant="ghost">
            <ReactCountryFlag countryCode={i18n.locale.substring(3)} svg />
          </IconButton>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {languages
                .filter(function (language) {
                  return language.locale !== i18n.locale
                })
                .map((language) => {
                  return (
                    <Menu.Item
                      key={nextId()}
                      value={language.locale}
                      onClick={() => handleClick(language.locale as LOCALES)}
                    >
                      {i18n._(language.msg)} {language.territory && `(${language.territory})`}
                    </Menu.Item>
                  )
                })}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  )
}

export default LocaleSwitcher
