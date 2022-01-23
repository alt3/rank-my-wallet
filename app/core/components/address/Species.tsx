import { SectionHeader } from "@/components/address"
import { Box, Text, useColorModeValue } from "@chakra-ui/react"
import { capitalize, getSpecies } from "app/lib/utils"

interface SpeciesProps {
  blockchain: "cardano" | "ergo"
  balance: number
}

export function Species({ blockchain, balance }: SpeciesProps) {
  const species = getSpecies(blockchain, balance)

  const styles = {
    caption: {
      color: useColorModeValue("teal.500", "teal.300"),
    },
  }

  return (
    <Box marginBottom="2.5rem">
      <SectionHeader>Species</SectionHeader>

      <Box marginBottom="2rem">
        <Text as="h3" {...styles.caption} marginBottom="0.25rem">
          Balance
        </Text>
        <Text>₳ {balance.toLocaleString(undefined)}</Text>
      </Box>

      <Box marginBottom="2rem">
        <Text as="h3" {...styles.caption} marginBottom="0.25rem">
          Species
        </Text>
        <Text>{capitalize(species.name)}</Text>
      </Box>

      <Box marginBottom="2rem">
        <Text as="h3" {...styles.caption} marginBottom="0.25rem">
          startsAt
        </Text>
        <Text>₳ {species.startsAt.toLocaleString(undefined)}</Text>
      </Box>
    </Box>
  )
}

export default Species
