import React from "react";
import { Navbar } from "../../components/Navbar";
import { Layout } from "../../components/styled/Layout";
import { Logo } from "../../components/styled/Logo";
import { NavbarWrapper } from "../../components/styled/NavbarWrapper";
import {routes} from "../../routing/routerConfig";
import { logoImg } from "../../assets/img/index";
import { Container } from "react-bootstrap";

const Homepage: React.FC = ()  => {
    return (
        <Layout>
            <Container fluid>
                <Navbar LogoUI={Logo} NavbarUI={NavbarWrapper} img={logoImg} routes={routes} />
            </Container>
        </Layout>
    )
}

export  {Homepage};

