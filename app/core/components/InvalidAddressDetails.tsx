import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import {
  AddressForm,
  BitsTable,
  Counter,
  ErrorHero,
  DataGrid,
  DataGridEntry,
  SectionHeader,
} from "@components"
import { capitalize, getNextSpecies, getSpecies } from "app/lib/utils"
import nextId from "react-id-generator"

export function InvalidAddressDetails({ parsedAddress }) {
  return (
    <Container maxW="container.md" marginBottom="2.5rem">
      <ErrorHero title="Address Error" subtitle={parsedAddress.error.message}></ErrorHero>

      <AddressForm placeholder="Try again?" marginTop={{ base: "3rem", sm: "5rem" }} />
    </Container>
  )
}

export default InvalidAddressDetails
