/* eslint-disable no-nested-ternary */
import { Col, Row } from 'react-bootstrap'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import { useStateMachine } from 'little-state-machine'
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

export const Step3 = () => {
  const history = useHistory()
  const { actions, state } = useStateMachine({})

  let quantityValue

  if (state.quantity <= 10) {
    quantityValue = 10
  } else if (state.quantity > 100) {
    quantityValue = 1000
  } else if (state.quantity < 100) {
    quantityValue = 100
  } else {
    console.log('Something error in quantity!')
  }

  return (
    <>
      <MainContainer fluid className={containerStyles.mainContainer}>
        <Navigation>
          <BreadcrumbItem link="/step3" title={<HomeIcon />} />
          <BreadcrumbItem link="/step3" title="Contact info" />
          <BreadcrumbItem link="/step3" title="Quantity" />
          <BreadcrumbItem active link="/step3" title="Price" />
          <BreadcrumbItem nonSeparator link="/step3" title="Done" />
        </Navigation>
        <Header className={headerStyles.header}>Price</Header>
        <Form>
          <Col xs={7}>
            <Header className={headerStyles.header__price}>
              {`${quantityValue}$`}
            </Header>
          </Col>
          <Row>
            <Button type="button" onClick={() => history.push('/step4')}>
              Send to email
            </Button>
            <Button onClick={() => history.push('/step2')} variant="light">
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
