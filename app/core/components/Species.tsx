import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { capitalize, getSpecies } from "app/lib/utils"

interface SpeciesProps {
  blockchain: "cardano" | "ergo"
  balance: number
}

export function Species({ blockchain, balance }: SpeciesProps) {
  const species = getSpecies(blockchain, balance)

  const styles = {
    heading: {
      marginBottom: "1.25rem",
      fontSize: { base: "2xl", sm: "4xl" },
      fontWeight: "bold",
      letterSpacing: "tighter",
      // color: useColorModeValue("gray.700", "gray.300"),
    },
    caption: {
      color: useColorModeValue("teal.500", "teal.300"),
    },
  }

  return (
    <Box marginBottom="2.5rem">
      <Heading {...styles.heading}>Species</Heading>

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
