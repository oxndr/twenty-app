import { Container } from 'react-bootstrap'
import classNames from './Navigation.module.scss'

export const Navigation = ({ children, ...props }) => (
  <Container className={classNames.container} {...props}>
    <Container className={classNames.breadcrumb}>{children}</Container>
  </Container>
)
