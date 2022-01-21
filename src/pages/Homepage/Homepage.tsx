import React, { Suspense, useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Layout } from "../../components/styled/Layout";
import { Logo } from "../../components/styled/Logo";
import { NavbarWrapper } from "../../components/styled/NavbarWrapper";
import {routes} from "../../routing/routerConfig";
import { logoImg } from "../../assets/img/index";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { FormCard } from "../../components/FormCard/FormCard";
import { TextSelect } from "../../components/styled/TextSelect";
import useEagerConnect from "../../hooks/useEagerConnect";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useRecoilState, useRecoilValue } from "recoil";
import { walletConnectedAtom } from "../../atoms";

const useConnectWallet = () => {
    const {activate, active } = useWeb3React();
    const [, setIsConnected] = useRecoilState(walletConnectedAtom)

    useEffect(() => {
        activate(new InjectedConnector({supportedChainIds: [97, 56]})).then(succes => setIsConnected(true))
    }, [])

}

const Homepage: React.FC = ()  => {

    const {activate, active } = useWeb3React();
    const [isConnected, setIsConnected] = useRecoilState(walletConnectedAtom)
    
    const connectWallet = () => activate(new InjectedConnector({supportedChainIds: [97, 56]})).then(succes => setIsConnected(true))

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
                            <FormCard TextSelectUI={TextSelect} callbackFn={() => connectWallet()}/>
                        </Suspense>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export  {Homepage};

