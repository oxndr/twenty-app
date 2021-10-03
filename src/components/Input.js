import { forwardRef } from 'react'
import { Form } from 'react-bootstrap'

export const Input = forwardRef((props, ref) => {
  return <Form.Control {...props} inputRef={ref} />
})
