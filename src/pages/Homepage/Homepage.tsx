import React from "react";
import { Navbar } from "../../components/Navbar";
import { Layout } from "../../components/styled/Layout";
import {routes} from "../../routing/routerConfig";

const Homepage: React.FC = ()  => {
    return (
        <Layout>
            <Navbar routes={routes}/>
        </Layout>
    )
}

export  {Homepage};

