import { Col, Row } from 'react-bootstrap'
import { FiArrowRight } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import { useStateMachine } from 'little-state-machine'
import { useForm } from 'react-hook-form'
import { Header } from '../components/Header'
import headerStyles from '../components/Header.module.scss'
import { MainContainer } from '../components/MainContainer'
import { Title } from '../components/Title'
import { Form } from '../components/Form'
import { Button } from '../components/Button'
import containerStyles from '../components/MainContainer.module.scss'
import titleStyles from '../components/Title.module.scss'
import { Navigation } from '../components/Navigation'
import { BreadcrumbItem } from '../components/BreadcrumbItem'
import { HomeIcon } from '../icons/HomeIcon'
import { clearAction } from './clearAction'

export const Step4 = () => {
  const history = useHistory()

  const { register, handleSubmit } = useForm()
  const { actions, state } = useStateMachine({ clearAction })
  const onSubmit = data => {
    actions.clearAction(data)
    history.push('./step1')
  }
  return (
    <>
      <MainContainer fluid className={containerStyles.mainContainer}>
        <Navigation>
          <BreadcrumbItem link="/step4" title={<HomeIcon />} />
          <BreadcrumbItem link="/step4" title="Contact info" />
          <BreadcrumbItem link="/step4" title="Quantity" />
          <BreadcrumbItem link="/step4" title="Price" />
          <BreadcrumbItem active link="/step4" title="Done" />
        </Navigation>
        <Header className={headerStyles.header}>Price</Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Col xs={7}>
            <Title className={titleStyles.message}>
              ✅ Your email was send succesfully
            </Title>
          </Col>
          <Row>
            <Button onClick={onSubmit} type="submit">
              Start again <FiArrowRight />
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
