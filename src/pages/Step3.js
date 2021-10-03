import { useForm } from 'react-hook-form'
import { Container } from 'react-bootstrap'
import { FiArrowLeft } from 'react-icons/fi'
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
  //   const { register, handleSubmit, error } = useForm({
  //     mode: 'onBlur',
  //   })
  return (
    <>
      <MainContainer fluid className={containerStyles.mainContainer}>
        <Navigation>
          <BreadcrumbItem link="/" title={<HomeIcon />} />
          <BreadcrumbItem link="/step1" title="Contact info" />
          <BreadcrumbItem link="/step2" title="Quantity" />
          <BreadcrumbItem active link="/step3" title="Price" />
          <BreadcrumbItem nonSeparator link="/step4" title="Done" />
        </Navigation>
        <Header className={headerStyles.header}>Price</Header>
        <Form>
          <Container>
            <Header className={headerStyles.header__price}>$10</Header>
          </Container>
          <span>
            <Button type="submit">Send to email</Button>
            <Button variant="light">
              <FiArrowLeft />
              Back
            </Button>
          </span>
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
