import { i18n } from "@lingui/core"
import { afterEach, describe, expect, test } from "vitest"
import { parseAddress } from "src/lib/parseAddress"
import { validateAddress } from "src/lib/validateAddress"

/**
 * Address parsing runs inside `getServerSideProps`, which executes before any
 * Lingui catalog is activated. Lingui 5 *throws* from an eager `t` when no
 * locale is active (v4 only warned), so a `t` macro inside an address-class
 * constructor made every Base58 address unparseable on the server.
 *
 * The symptom was indirect: parseAddress swallowed the throw, returned an
 * UnrecognizedAddress, `[address].tsx` saw isSupported === false and served a
 * 404. The 404 page then re-parsed the same address on the client, where a
 * locale *is* active, got a perfectly valid address back, and crashed on
 * `parsed.unsupported.type` because validateAddress never set `unsupported`.
 *
 * These fixtures are real mainnet P2PK/Type-00 addresses, so parsing must give
 * the identical result with or without an active locale.
 */

const ADDRESSES = [
  { blockchain: "Ergo", address: "9fRAWhdxEsTcdb8PhGNrZfwqa65zfkuYHAMmkQLcic1gdLSV5vA" },
  {
    blockchain: "Cardano",
    address:
      "addr1qx2fxv2umyhttkxyxp8x0dlpdt3k6cwng5pxj3jhsydzer3n0d3vllmyqwsx5wktcd8cc3sq835lu7drv2xwl2wywfgse35a3x",
  },
]

/** Runs `fn` with the Lingui singleton in the state the server starts in. */
function withoutActiveLocale<T>(fn: () => T): T {
  const saved = (i18n as any)._locale
  ;(i18n as any)._locale = ""

  try {
    return fn()
  } finally {
    ;(i18n as any)._locale = saved
  }
}

afterEach(() => {
  expect(i18n.locale).toBe("en-us")
})

describe("parseAddress does not depend on an active locale", () => {
  test.each(ADDRESSES)("$blockchain parses without a locale", ({ address }) => {
    const withLocale: any = validateAddress(parseAddress(address))
    const withoutLocale: any = withoutActiveLocale(() => validateAddress(parseAddress(address)))

    expect(withoutLocale.blockchain.name).toBe(withLocale.blockchain.name)
    expect(withoutLocale.isSupported).toBe(withLocale.isSupported)
    expect(withoutLocale.class).toBe(withLocale.class)
  })

  test("a supported address is never marked unsupported", () => {
    for (const { address } of ADDRESSES) {
      const parsed: any = withoutActiveLocale(() => validateAddress(parseAddress(address)))

      // These two must agree. When they disagree, [address].tsx serves a 404
      // and the 404 page crashes reading `parsed.unsupported.type`.
      if (parsed.isSupported === true) {
        expect(parsed.unsupported).toBeUndefined()
      } else {
        expect(parsed.unsupported).toBeDefined()
      }
    }
  })
})
