import { Web3ReactProvider } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { providers } from "ethers";
import { Suspense } from "react";
import { Spinner } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./custom-theme";
import {routes} from "./routing/routerConfig";
import { Web3Provider } from "@ethersproject/providers";

function App() {
  const getLibrary = (provider, connector) => {
    return new Web3Provider(provider)
  }
  
  return (
    <RecoilRoot>
      <ThemeProvider theme={myTheme}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Suspense fallback={<Spinner animation="grow" variant="primary" role="status"/>}>
            <Router>
              <Routes>
                {routes.map((route, i) => {
                  return (<Route key={i} path={route.path} element={route.element} />)
                })}
              </Routes>
            </Router>
          </Suspense>
        </Web3ReactProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
