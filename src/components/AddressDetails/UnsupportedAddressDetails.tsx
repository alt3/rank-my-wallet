import { Accordion, Divider } from "@chakra-ui/react"
import { t } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import {
  AddressAccordionItemAnalysis,
  AddressAccordionItemDetails,
  AddressForm,
  ContentContainer,
  ErrorHero,
  MetaTags,
} from "src/components"

export function UnsupportedAddressDetails({ parsed }) {
  useLingui()

  return (
    <>
      <MetaTags
        title={`Rank My Wallet - Unrecognized Address`}
        description={`Unrecognized Address`}
        keywords={`blockchain, wallets, rankings, species, address-analyzer`}
      />

      <ContentContainer>
        <ErrorHero title={t`Unsupported Address`} subtitle={parsed.unsupported.message}></ErrorHero>

        <AddressForm
          placeholder={t`Try again?`}
          marginTop={{ base: "3rem", sm: "5rem" }}
          marginBottom={{ base: "4rem", sm: "7rem" }}
        />

        {["cardano", "ergo"].includes(parsed.blockchain.name) && (
          <>
            <Divider marginBottom={{ base: "1.5rem", sm: "1.5rem" }} />

            <Accordion allowMultiple>
              <AddressAccordionItemDetails parsedAddress={parsed} />
              <AddressAccordionItemAnalysis parsedAddress={parsed} />
            </Accordion>
          </>
        )}
      </ContentContainer>
    </>
  )
}

export default UnsupportedAddressDetails
