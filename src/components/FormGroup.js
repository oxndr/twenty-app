import { Container, Form } from 'react-bootstrap'
import { Title } from './Title'
import formStyles from './Form.module.scss'

export const FormGroup = ({ label, children, required, ...props }) => {
  return (
    <Form.Group {...props}>
      <Container className={formStyles.container}>
        <Form.Label>{label}</Form.Label>
        {required && <Title className={formStyles.title}>required</Title>}
      </Container>
      {children}
    </Form.Group>
  )
}
