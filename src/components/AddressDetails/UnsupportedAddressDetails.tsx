import { Accordion, Divider } from "@chakra-ui/react"
import {
  AccordionItemAddressAnalysis,
  AccordionItemAddressDetails,
  AddressForm,
  ContentContainer,
  ErrorHero,
  MetaTags,
} from "src/components"

export function UnsupportedAddressDetails({ parsed }) {
  return (
    <>
      <MetaTags
        title={`Rank My Wallet - Unrecognized Address`}
        description={`Unrecognized Address`}
        keywords={`blockchain, wallets, rankings, species, address-analyzer`}
      />

      <ContentContainer>
        <ErrorHero title="Unsupported Address" subtitle={parsed.unsupported.message}></ErrorHero>

        <AddressForm
          placeholder="Try again?"
          marginTop={{ base: "3rem", sm: "5rem" }}
          marginBottom={{ base: "4rem", sm: "7rem" }}
        />

        {["cardano", "ergo"].includes(parsed.blockchain.name) && (
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
