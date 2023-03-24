import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { msg } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { useRouter } from "next/router"
import { useState } from "react"
import ReactCountryFlag from "react-country-flag"
import nextId from "react-id-generator"

import { MessageDescriptor } from "@lingui/core"

type LOCALES = "en" | "nl" | "pseudo"

const languages: { [key: string]: MessageDescriptor } = {
  nl: msg`Dutch`,
  en: msg`English`,
}

export function LocaleSwitcher() {
  const { i18n } = useLingui()
  const router = useRouter()

  if (process.env.NEXT_PUBLIC_NODE_ENV !== "production") {
    languages["pseudo"] = msg`Pseudo`
  }

  const [locale, setLocale] = useState<LOCALES>(router.locale!.split("-")[0] as LOCALES)

  function handleClick(locale: LOCALES) {
    setLocale(locale)
    router.push(router.pathname, router.pathname, { locale }).catch((e) => {
      console.log(`error is ${e}`)
    })
  }

  const country = i18n.locale === "en" ? "us" : "nl"

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
          {Object.keys(languages).map((locale, i) => {
            return (
              <MenuItem key={nextId()} onClick={() => handleClick(locale as LOCALES)}>
                {i18n._(languages[locale] as MessageDescriptor)} ({locale})
              </MenuItem>
            )
          })}
        </MenuList>
      </Menu>
    </>
  )
}

export default LocaleSwitcher
