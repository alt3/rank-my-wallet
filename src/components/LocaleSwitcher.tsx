import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useLingui } from "@lingui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import ReactCountryFlag from "react-country-flag"
import nextId from "react-id-generator"
import languages, { LOCALES } from "src/translations/languages"

export function LocaleSwitcher() {
  const { i18n } = useLingui()
  const router = useRouter()

  const [locale, setLocale] = useState<LOCALES>(router.locale!.split("-")[0] as LOCALES)

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
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<ReactCountryFlag countryCode={i18n.locale.substring(3)} svg />}
          variant="ghost"
        />
        <MenuList>
          {languages
            .filter(function (language) {
              return language.locale !== i18n.locale
            })
            .map((language) => {
              return (
                <MenuItem key={nextId()} onClick={() => handleClick(language.locale as LOCALES)}>
                  {i18n._(language.msg)} {language.territory && `(${language.territory})`}
                </MenuItem>
              )
            })}
        </MenuList>
      </Menu>
    </>
  )
}

export default LocaleSwitcher
