import React, { Suspense } from "react";
import { Navbar } from "../../components/Navbar";
import { Layout } from "../../components/styled/Layout";
import { Logo } from "../../components/styled/Logo";
import { NavbarWrapper } from "../../components/styled/NavbarWrapper";
import {routes} from "../../routing/routerConfig";
import { logoImg } from "../../assets/img/index";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { FormCard } from "../../components/FormCard/FormCard";
import { TextSelect } from "../../components/styled/TextSelect";

const Homepage: React.FC = ()  => {
    return (
        <Layout>
            <Container className="full-page" fluid>
                <Row>
                    <Col>
                        <Navbar LogoUI={Logo} NavbarUI={NavbarWrapper} img={logoImg} routes={routes} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        Placeholder content
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                        <Suspense fallback={<Spinner animation="grow" variant="primary" role="status"/>}>
                            <FormCard TextSelectUI={TextSelect}/>
                        </Suspense>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export  {Homepage};

