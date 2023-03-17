import getNumberSeparators from "./getNumberSeparators"

const expected = [
  {
    "en-US": {
      group: ",",
      decimal: ".",
    },
  },
  {
    "nl-NL": {
      group: ".",
      decimal: ",",
    },
  },
  {
    "nl-BE": {
      group: ".",
      decimal: ",",
    },
  },
  {
    "es-ES": {
      group: ".",
      decimal: ",",
    },
  },
  {
    "hi-IN": {
      group: ",",
      decimal: ".",
    },
  },
]

for (const [index, locales] of Object.entries(expected)) {
  const locale = Object.keys(locales).toString()

  it(`Should return the expected number separators for user locale ${locale}`, () => {
    expect(expected[index][locale]).toEqual(getNumberSeparators(locale))
  })
}
