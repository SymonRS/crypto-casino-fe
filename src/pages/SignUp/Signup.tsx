import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { logoImg } from "../../assets/img";
import { Navbar } from "../../components/Navbar";
import SignupForm from "../../components/SignupForm/SignupForm";
import { Layout } from "../../components/styled/Layout";
import { Logo } from "../../components/styled/Logo";
import { NavbarWrapper } from "../../components/styled/NavbarWrapper";
import { routes } from "../../routing/routerConfig";

const FormTitle = styled.span`
${({theme}) => theme.colors.text? `color: ${theme.colors.text};` : ''}
font-size: 1.4rem;
`;


const Signup: () => JSX.Element = () => {

    const { t } = useTranslation();
    
    return(
    <Layout>
        <Container className="full-page" fluid>
            <Row className="mb-3">
                <Col>
                    <Navbar LogoUI={Logo} NavbarUI={NavbarWrapper} img={logoImg} routes={routes} />
                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
                <Col xs={4} className="d-flex flex-column justify-content-center align-items-center">
                    <FormTitle className="mb-3">{t('form.signup')}</FormTitle>
                    <SignupForm />
                </Col>
            </Row>
        </Container>
    </Layout>
    )
}

export default Signup;