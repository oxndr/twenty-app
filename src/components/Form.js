import { Form as FormB } from 'react-bootstrap'

export const Form = ({ children, ...props }) => (
  <FormB {...props}>{children}</FormB>
)
