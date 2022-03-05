import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userInfoAtom, userStateAtom } from "../atoms/user/user";
import { IRoute } from "../routing/types";
import LoginForm from "./LoginForm/LoginForm";

export const Navbar: React.FC<INavbarProps> = ({img, routes, LogoUI, NavbarUI}) => {

    const isLoggedIn = useRecoilValue(userStateAtom);
    const userInfo = useRecoilValue(userInfoAtom);

    return(
            <Row>
                <NavbarUI>
                    <LogoUI>
                        <img src={img} alt="Logo" style={{width: '100%'}}/>
                    </LogoUI>
                    <div>
                        {routes.map((route, i) => { return <Link key={i} to={route.path}>{route.text}</Link> })}
                    </div>
                    {isLoggedIn && userInfo ? `Benvenuto, ${userInfo.username}` : <LoginForm orientation="horizontal" />}
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