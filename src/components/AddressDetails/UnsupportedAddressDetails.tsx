import { AccordionItemAddressAnalysis } from "@/components/AddressDetails/AccordionItemAddressAnalysis"
import { AccordionItemAddressDetails } from "@/components/AddressDetails/AccordionItemAddressDetails"
import { AddressForm } from "@/components/AddressForm"
import { ContentContainer } from "@/components/ContentContainer"
import { ErrorHero } from "@/components/Heroes/ErrorHero"
import { MetaTags } from "@/components/MetaTags"
import { Accordion, Separator } from "@chakra-ui/react"
import { t } from "@lingui/core/macro"
import { useLingui } from "@lingui/react"
import { getUnsupportedAddressMessage } from "src/lib/getUnsupportedAddressMessage"

export function UnsupportedAddressDetails({ parsed }) {
  // Called for its subscription: it re-renders this component when the active
  // locale changes. The `i18n` instance itself is not needed here.
  useLingui()

  if (process && process.env.NODE_ENV !== "production") {
    console.log({ parsed })
  }

  return (
    <>
      <MetaTags
        title={`RankMyWallet - ${t`Unsupported Address`}`}
        description={`Unsupported Address`}
        keywords={`crypto, blockchain, wallets, rankings, species, address-analyzer`}
      />

      <ContentContainer>
        <ErrorHero
          title={t`Unsupported Address`}
          subtitle={getUnsupportedAddressMessage({
            // `unsupported` is only set for addresses validateAddress rejects.
            // A valid address should never reach this component, but if one
            // does, fall back rather than crash the page on a missing property.
            type: parsed.unsupported?.type ?? "UnrecognizedAddress",
            blockchain: parsed.blockchain.name,
            network: parsed.blockchain?.network,
            addressType: parsed.type?.name,
          })}
        ></ErrorHero>

        <AddressForm
          placeholder={t`Try again?`}
          marginTop={{ base: "4rem", md: "4rem" }}
          marginBottom={{ base: "4rem", md: "7rem" }}
        />

        {["Cardano", "Ergo"].includes(parsed.blockchain.name) && (
          <>
            <Separator marginBottom={{ base: "1.5rem", sm: "1.5rem" }} />

            <Accordion.Root multiple>
              <AccordionItemAddressDetails parsedAddress={parsed} />
              <AccordionItemAddressAnalysis parsedAddress={parsed} />
            </Accordion.Root>
          </>
        )}
      </ContentContainer>
    </>
  )
}

export default UnsupportedAddressDetails
