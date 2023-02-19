import { Accordion, Divider } from "@chakra-ui/react"
import { t } from "@lingui/macro"
import { useLingui } from "@lingui/react"
import {
  AccordionItemAddressAnalysis,
  AccordionItemAddressDetails,
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
        title={`RankMyWallet - ${t`Unsupported Address`}`}
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
