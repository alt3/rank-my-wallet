import { Box } from "@chakra-ui/react"
import { HiExternalLink } from "react-icons/hi"

export const ExternalLinkIcon = ({ ...rest }) => {
  return (
    <span>
      <Box as={HiExternalLink} display="inline-block" {...rest} />
    </span>
  )
}

export default ExternalLinkIcon
