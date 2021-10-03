import { useForm } from 'react-hook-form'
import { Container } from 'react-bootstrap'
import { FiArrowRight } from 'react-icons/fi'
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

export const Step4 = () => {
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
          <BreadcrumbItem link="/step3" title="Price" />
          <BreadcrumbItem active link="/step4" title="Done" />
        </Navigation>
        <Header className={headerStyles.header}>Price</Header>
        <Form>
          <Container>
            <Title className={titleStyles.message}>
              ✅ Your email was send succesfully
            </Title>
          </Container>
          <Button type="submit">
            Start again <FiArrowRight />
          </Button>
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
