import React, { Suspense} from "react";
import { Navbar } from "../../components/Navbar";
import { Layout } from "../../components/styled/Layout";
import { Logo } from "../../components/styled/Logo";
import { NavbarWrapper } from "../../components/styled/NavbarWrapper";
import {routes} from "../../routing/routerConfig";
import { logoImg } from "../../assets/img/index";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { FormCard } from "../../components/FormCard/FormCard";
import { TextSelect } from "../../components/styled/TextSelect";
import useAuth from "../../hooks/useAuth";
import { ConnectorNames } from "../../wallet/types";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { globalToastTheme } from "../../config";
import { useRecoilValue } from "recoil";
import { activateWalletAtom, activeWalletAtom } from "../../atoms";



const Homepage: () => JSX.Element = ()  => {

    const { t } = useTranslation();
    const { login, logout, active } = useAuth();

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
                        <p style={{color: 'white'}}>{active ? "Wallet attivo" : "Wallet NON attivo"}</p>
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center align-items-center">
                        <Suspense fallback={<Spinner animation="grow" variant="primary" role="status"/>}>
                            <FormCard TextSelectUI={TextSelect} callbackFn={() => !active && login ? login(ConnectorNames.Injected) : toast(t("walletMessage.alreadyConnected"), { type: 'success', theme: globalToastTheme } )}/>
                        </Suspense>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export  {Homepage};

