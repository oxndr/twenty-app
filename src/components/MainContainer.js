import { Container } from 'react-bootstrap'

export const MainContainer = ({ children, ...props }) => {
  return (
    <Container {...props} fluid="md">
      {children}
    </Container>
  )
}
