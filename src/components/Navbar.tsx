import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routing/routerConfig";
import { IRoute } from "../routing/types";
import { NavbarWrapper } from "./styled/Navbar";

export const Navbar: React.FC<INavbarProps> = (props:INavbarProps) => {
    return(
        <NavbarWrapper>
            {routes.map((route, i) => { return <Link key={i} to={route.path}>{route.text}</Link> })}
        </NavbarWrapper>
    )
}

interface INavbarProps{
    routes: IRoute[]
}