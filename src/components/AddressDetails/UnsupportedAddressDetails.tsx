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
import { unsupportedAddressMessage } from "src/lib"

export function UnsupportedAddressDetails({ parsed }) {
  useLingui()

  return (
    <>
      <MetaTags
        title={`RankMyWallet - ${t`Unsupported Address`}`}
        description={`Unsupported Address`}
        keywords={`blockchain, wallets, rankings, species, address-analyzer`}
      />

      <ContentContainer>
        <ErrorHero
          title={t`Unsupported Address`}
          subtitle={unsupportedAddressMessage({
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
