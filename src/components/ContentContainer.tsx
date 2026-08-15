import { Container } from "@chakra-ui/react"

export function ContentContainer({ ...rest }) {
  return <Container maxWidth="container.md" marginBottom="2.5rem" {...rest}></Container>
}

export default ContentContainer
