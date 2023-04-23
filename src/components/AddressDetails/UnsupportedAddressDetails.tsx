import { AccordionItemAddressAnalysis } from "@/components/AddressDetails/AccordionItemAddressAnalysis"
import { AccordionItemAddressDetails } from "@/components/AddressDetails/AccordionItemAddressDetails"
import { AddressForm } from "@/components/AddressForm"
import { ContentContainer } from "@/components/ContentContainer"
import { ErrorHero } from "@/components/Heroes/ErrorHero"
import { MetaTags } from "@/components/MetaTags"
import { Accordion, Divider } from "@chakra-ui/react"
import { t } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import { getUnsupportedAddressMessage } from "src/lib/getUnsupportedAddressMessage"

export function UnsupportedAddressDetails({ parsed }) {
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
            type: parsed.unsupported.type,
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
            <Divider marginBottom={{ base: "1.5rem", sm: "1.5rem" }} />

            <Accordion allowMultiple>
              <AccordionItemAddressDetails parsedAddress={parsed} />
              <AccordionItemAddressAnalysis parsedAddress={parsed} />
            </Accordion>
          </>
        )}
      </ContentContainer>
    </>
  )
}

export default UnsupportedAddressDetails
