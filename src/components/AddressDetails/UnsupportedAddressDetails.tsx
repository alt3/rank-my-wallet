import { Accordion, Container, Divider, useColorModeValue } from "@chakra-ui/react"
import {
  AddressAccordionItemAnalysis,
  AddressAccordionItemDetails,
  AddressForm,
  ErrorHero,
  MetaTags,
} from "src/components"

export function UnsupportedAddressDetails({ parsed }) {
  const colorTeal = useColorModeValue("teal.500", "teal.300")

  return (
    <>
      <MetaTags
        title={`Rank My Wallet - Unrecognized Address`}
        description={`Unrecognized Address`}
        keywords={`blockchain, wallets, rankings, species, address-analyzer`}
      />

      <Container maxW="container.md" marginBottom="2.5rem">
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
              <AddressAccordionItemDetails parsedAddress={parsed} />
              <AddressAccordionItemAnalysis parsedAddress={parsed} />
            </Accordion>
          </>
        )}
      </Container>
    </>
  )
}

export default UnsupportedAddressDetails
