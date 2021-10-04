import { useForm } from 'react-hook-form'
import { Col, Row } from 'react-bootstrap'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import { useStateMachine } from 'little-state-machine'
import { Header } from '../components/Header'
import headerStyles from '../components/Header.module.scss'
import { MainContainer } from '../components/MainContainer'
import { Title } from '../components/Title'
import { Form } from '../components/Form'
import { FormGroup } from '../components/FormGroup'
import { Button } from '../components/Button'
import containerStyles from '../components/MainContainer.module.scss'
import titleStyles from '../components/Title.module.scss'
import formStyles from '../components/Form.module.scss'
import { Navigation } from '../components/Navigation'
import { BreadcrumbItem } from '../components/BreadcrumbItem'
import { HomeIcon } from '../icons/HomeIcon'
import { updateAction } from './updateActions'
import FieldError from '../form/FieldError'

export const Step2 = () => {
  const history = useHistory()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { actions, state } = useStateMachine({ updateAction })
  const onSubmit = data => {
    actions.updateAction(data)
    history.push('./step3')
  }

  return (
    <>
      <MainContainer fluid className={containerStyles.mainContainer}>
        <Navigation>
          <BreadcrumbItem link="/step2" title={<HomeIcon />} />
          <BreadcrumbItem link="/step2" title="Contact info" />
          <BreadcrumbItem active link="/step2" title="Quantity" />
          <BreadcrumbItem link="/step2" title="Price" />
          <BreadcrumbItem nonSeparator link="/step2" title="Done" />
        </Navigation>
        <Header className={headerStyles.header}>Quantity</Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <FormGroup
              required
              className={formStyles.formGroup}
              label="Quantity"
            >
              <Col xs={7}>
                <input
                  className={formStyles.input}
                  defaultValue={state.quantity}
                  id="quantity"
                  name="quantity"
                  type="number"
                  {...register('quantity', {
                    required: 'Required field',
                    valueAsNumber: {
                      value: true,
                      message: 'This is number field',
                    },
                    min: {
                      value: 1,
                      message: 'Quantity should be greater or equal than 1',
                    },
                    max: {
                      value: 1000,
                      message: 'Quantity should be greater or equal than 1',
                    },
                  })}
                />
                {errors.quantity && (
                  <FieldError>{errors.quantity.message}</FieldError>
                )}
              </Col>
            </FormGroup>
          </Row>
          <Row>
            <Button type="submit">Continue</Button>
            <Button onClick={() => history.push('/step1')} variant="light">
              <FiArrowLeft />
              Back
            </Button>
          </Row>
        </Form>
      </MainContainer>
      <MainContainer className={containerStyles.titleContainer}>
        <Title className={titleStyles.title}>Title</Title>
        <Title className={titleStyles.description}>
          This is the description
        </Title>
      </MainContainer>
    </>
  )
}
