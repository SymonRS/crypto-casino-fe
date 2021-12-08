import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IRoute } from "../routing/types";

export const Navbar: React.FC<INavbarProps> = ({img, routes, LogoUI, NavbarUI}) => {
    return(
            <Row>
                <NavbarUI>
                    <LogoUI>
                        <img src={img} alt="Logo" style={{width: '100%'}}/>
                    </LogoUI>
                    <div>
                        {routes.map((route, i) => { return <Link key={i} to={route.path}>{route.text}</Link> })}
                    </div>
                </NavbarUI>
            </Row>
    )
}

interface INavbarProps{
    routes: IRoute[],
    LogoUI: any
    NavbarUI: any
    img: any
}