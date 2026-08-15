import { Box } from "@chakra-ui/react"
import { HiExternalLink } from "react-icons/hi"

export const ExternalLinkIcon = ({ ...rest }) => {
  return (
    <span>
      <Box as={HiExternalLink} viewBox="0 0 20 15" display="inline-block" {...rest} />
    </span>
  )
}

export default ExternalLinkIcon
