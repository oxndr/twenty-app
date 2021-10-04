import { Container } from 'react-bootstrap'
import classNames from './Navigation.module.scss'

export const Navigation = ({ children, ...props }) => (
  <span className={classNames.container} {...props}>
    <Container className={classNames.breadcrumb}>{children}</Container>
  </span>
)
