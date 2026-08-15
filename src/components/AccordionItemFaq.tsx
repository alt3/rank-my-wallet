import { Accordion, Box } from "@chakra-ui/react"
import { useColorModeValue } from "src/core/theme/color-mode"
import { useLingui } from "@lingui/react"
import { useId } from "react"
import { getRTL } from "src/translations/utils"

export function AccordionItemFaq({ question, children }) {
  const { i18n } = useLingui()
  const rtl = getRTL(i18n.locale)

  // Chakra 3 identifies accordion items by `value` instead of by position.
  // Generated here so the call sites in faq.tsx do not each have to invent one;
  // useId is stable across server and client render.
  const value = useId()

  const accordionIconColor = useColorModeValue("teal.500", "teal.300")

  return (
    <Accordion.Item value={value} borderStyle="none">
      <h2>
        <Accordion.ItemTrigger p={0}>
          <Box flex="1" textAlign={rtl.left} color="teal.300">
            {question}
          </Box>
          <Box as="span" verticalAlign="top" minHeight={{ base: "4rem", md: "3rem" }}>
            <Accordion.ItemIndicator color={accordionIconColor} />
          </Box>
        </Accordion.ItemTrigger>
      </h2>
      <Accordion.ItemContent p={0} marginEnd="2rem">
        {children}
      </Accordion.ItemContent>
    </Accordion.Item>
  )
}

export default AccordionItemFaq
