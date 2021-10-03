import { useForm } from 'react-hook-form'
import { Container } from 'react-bootstrap'
import { Header } from '../components/Header'
import { MainContainer } from '../components/MainContainer'
import { Title } from '../components/Title'
import { Form } from '../components/Form'
import { Input } from '../components/Input'
import { FormGroup } from '../components/FormGroup'
import { Button } from '../components/Button'
import containerStyles from '../components/MainContainer.module.scss'
import titleStyles from '../components/Title.module.scss'
import formStyles from '../components/Form.module.scss'
import { Navigation } from '../components/Navigation'
import { BreadcrumbItem } from '../components/BreadcrumbItem'
import { HomeIcon } from '../icons/HomeIcon'
import headerStyles from '../components/Header.module.scss'

export const Step1 = () => {
  const { register, handleSubmit, error } = useForm({
    mode: 'onBlur',
  })
  return (
    <>
      <MainContainer fluid className={containerStyles.mainContainer}>
        <Navigation>
          <BreadcrumbItem link="/" title={<HomeIcon />} />
          <BreadcrumbItem active link="/step1" title="Contact info" />
          <BreadcrumbItem link="/step2" title="Quantity" />
          <BreadcrumbItem link="/step3" title="Price" />
          <BreadcrumbItem nonSeparator link="/step4" title="Done" />
        </Navigation>
        <Header className={headerStyles.header}>Contact Info</Header>
        <Form>
          <Container>
            <FormGroup className={formStyles.formGroup} label="Name">
              <Input className={formStyles.input} />
            </FormGroup>
            <FormGroup className={formStyles.formGroup} label="Email" required>
              <Input className={formStyles.input} />
            </FormGroup>
            <FormGroup className={formStyles.formGroup} label="Phone">
              <Input className={formStyles.input} />
            </FormGroup>
          </Container>
          <Button>Continue</Button>
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
