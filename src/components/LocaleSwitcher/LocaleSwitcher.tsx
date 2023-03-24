import ReactCountryFlag from "react-country-flag"
import { useLingui } from "@lingui/react"

export function LocaleSwitcher() {
  const { i18n } = useLingui()

  const country = i18n.locale === "en" ? "us" : "nl"

  return (
    <>
      <ReactCountryFlag countryCode={country} svg />
    </>
  )
}

export default LocaleSwitcher
