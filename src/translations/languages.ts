import { MessageDescriptor } from "@lingui/core"
import { msg } from "@lingui/macro"

interface Languages {
  locale: string
  msg: MessageDescriptor
  territory?: string
  rtl: boolean
}

export type LOCALES = "de-de" | "en-us" | "hi-in" | "nl-nl" | "pt-br" | "ro-ro" | "pseudo"

const languages: Languages[] = [
  {
    locale: "de-de",
    msg: msg`German`,
    territory: "DE",
    rtl: false,
  },
  {
    locale: "en-us",
    msg: msg`English`,
    territory: "US",
    rtl: false,
  },
  {
    locale: "hi-in",
    msg: msg`Hindi`,
    territory: "IN",
    rtl: false,
  },
  {
    locale: "id-id",
    msg: msg`Indonesian`,
    territory: "ID",
    rtl: false,
  },
  {
    locale: "nl-nl",
    msg: msg`Dutch`,
    territory: "NL",
    rtl: false,
  },
  {
    locale: "pt-br",
    msg: msg`Portugese`,
    territory: "BR",
    rtl: false,
  },
  {
    locale: "ro-ro",
    msg: msg`Romanian`,
    territory: "RO",
    rtl: false,
  },
]

if (process.env.NODE_ENV !== "production") {
  languages.push({
    locale: "pseudo",
    msg: msg`Pseudo`,
    rtl: false,
  })
}

export default languages
