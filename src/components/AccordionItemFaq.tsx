import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box } from "@chakra-ui/layout"
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel } from "@chakra-ui/accordion"
import { useLingui } from "@lingui/react"
import { getRTL } from "src/translations/utils"

export function AccordionItemFaq({ question, children }) {
  const { i18n } = useLingui()
  const rtl = getRTL(i18n.locale)

  const accordionIconColor = useColorModeValue("teal.500", "teal.300")

  return (
    <AccordionItem borderStyle="none">
      <h2>
        <AccordionButton p={0}>
          <Box flex="1" textAlign={rtl.left} color="teal.300">
            {question}
          </Box>
          <Box as="span" verticalAlign="top" minHeight={{ base: "4rem", md: "3rem" }}>
            <AccordionIcon color={accordionIconColor} />
          </Box>
        </AccordionButton>
      </h2>
      <AccordionPanel p={0} marginEnd="2rem">
        {children}
      </AccordionPanel>
    </AccordionItem>
  )
}

export default AccordionItemFaq
