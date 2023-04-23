import { Container } from "@chakra-ui/layout"

export function ContentContainer({ ...rest }) {
  return <Container maxWidth="container.md" marginBottom="2.5rem" {...rest}></Container>
}

export default ContentContainer
