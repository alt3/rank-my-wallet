import { MessageDescriptor } from "@lingui/core"
import { msg } from "@lingui/macro"

interface Languages {
  locale: string
  msg: MessageDescriptor
  territory?: string
}

export type LOCALES = "de-de" | "en-us" | "nl-nl" | "ro-ro" | "pseudo"

const languages : Languages[]= [
  {
    locale: "de-de",
    msg: msg`German`,
    territory: "DE",
  },
  {
    locale: "en-us",
    msg: msg`English`,
    territory: "US",
  },
  {
    locale: "nl-nl",
    msg: msg`Dutch`,
    territory: "NL",
  },
  {
    locale: "ro-ro",
    msg: msg`Romanian`,
    territory: "RO",
  },
]

if (process.env.NODE_ENV !== "production") {
  languages.push({
    locale: "pseudo",
    msg: msg`Pseudo`,
  })
}

export default languages
