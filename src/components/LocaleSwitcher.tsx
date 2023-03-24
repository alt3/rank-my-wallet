import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { msg } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import ReactCountryFlag from "react-country-flag"
import nextId from "react-id-generator"

import { MessageDescriptor } from "@lingui/core"

type LOCALES = "en-us" | "nl" | "pseudo"

interface Languages {
  locale: string
  msg: MessageDescriptor
}

const languages: Languages[] = [
  {
    locale: "en-us",
    msg: msg`English`,
  },
  {
    locale: "nl",
    msg: msg`Dutch`,
  },
]

if (process && process.env.NODE_ENV !== "production") {
  languages.push({
    locale: "pseudo",
    msg: msg`Pseudo`,
  })
}

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
    router.push(router.pathname, router.pathname, { locale }).catch((e) => {
      console.log(`error is ${e}`)
    })
  }

  const country = i18n.locale === "en-us" ? "us" : "nl"

  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<ReactCountryFlag countryCode={country} svg />}
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
                  {i18n._(language.msg)}
                </MenuItem>
              )
            })}
        </MenuList>
      </Menu>
    </>
  )
}

export default LocaleSwitcher
