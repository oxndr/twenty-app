import { useForm } from 'react-hook-form'
import { Col, Row } from 'react-bootstrap'
import { useStateMachine } from 'little-state-machine'
import { useHistory } from 'react-router-dom'
import { Header } from '../components/Header'
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
import headerStyles from '../components/Header.module.scss'
import { updateAction } from './updateActions'
import FieldError from '../form/FieldError'

export const Step1 = () => {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { actions, state } = useStateMachine({ updateAction })
  const onSubmit = data => {
    actions.updateAction(data)
    history.push('./step2')
  }

  return (
    <>
      <MainContainer fluid className={containerStyles.mainContainer}>
        <Navigation>
          <BreadcrumbItem link="/step1" title={<HomeIcon />} />
          <BreadcrumbItem active link="/step1" title="Contact info" />
          <BreadcrumbItem link="/step1" title="Quantity" />
          <BreadcrumbItem link="/step1" title="Price" />
          <BreadcrumbItem nonSeparator link="/step1" title="Done" />
        </Navigation>
        <Header className={headerStyles.header}>Contact Info</Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <FormGroup className={formStyles.formGroup} label="Name">
              <Col xs={7}>
                <input
                  className={formStyles.input}
                  defaultValue={state.name}
                  id="name"
                  name="name"
                  type="text"
                  {...register('name', {
                    minLength: {
                      value: 3,
                      message: 'Name should be longer or equal than 3',
                    },
                    maxLength: {
                      value: 20,
                      message: 'Name should be shorter or equal than 1',
                    },
                  })}
                />
                {errors.name && <FieldError>{errors.name.message}</FieldError>}
              </Col>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup className={formStyles.formGroup} label="Email" required>
              <Col xs={7}>
                <input
                  className={formStyles.input}
                  defaultValue={state.email}
                  id="email"
                  name="email"
                  type="email"
                  {...register('email', {
                    required: 'Required field',
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Email adress is incorrect',
                    },
                  })}
                />
                {errors.email && (
                  <FieldError>{errors.email.message}</FieldError>
                )}
              </Col>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup className={formStyles.formGroup} label="Phone">
              <Col xs={7}>
                <input
                  className={formStyles.input}
                  defaultValue={state.phone}
                  id="phone"
                  name="phone"
                  type="text"
                  {...register('phone', {
                    minLength: {
                      value: 10,
                      message: 'Phone number should be longer or equal than 10',
                    },
                    maxLength: {
                      value: 12,
                      message:
                        'Phone number should be shorter or equal than 12',
                    },
                    pattern: {
                      value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\\./0-9]*$/,
                      message: 'Phone number is incorrect',
                    },
                  })}
                />
                <FieldError>{errors.phone?.message}</FieldError>
              </Col>
            </FormGroup>
          </Row>
          <Row>
            <Button type="submit">Continue</Button>
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
