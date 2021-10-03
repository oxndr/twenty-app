import { Button as ButtonB } from 'react-bootstrap'

export const Button = ({ children, ...props }) => (
  <ButtonB {...props}>{children}</ButtonB>
)
