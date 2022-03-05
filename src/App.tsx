import { Web3ReactProvider } from "@web3-react/core";
import { Suspense, useCallback, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./custom-theme";
import {routes} from "./routing/routerConfig";
import { getLibrary } from "./utils/web3React";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "./hooks/useAuth";
import { isLoadingAtom } from "./atoms/application/application";


function App() {
  /* const { login, active } = useAuth(); */

  return (
    <RecoilRoot>
      <ThemeProvider theme={myTheme}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Suspense fallback={<Spinner className="loading-spinner" animation="grow" variant="primary" role="status"/>}>
            <Router>
              <Routes>
                {routes.map((route, i) => {
                  return (<Route key={i}  path={route.path} element={route.element} />)
                })}
              </Routes>
            </Router>
            <ToastContainer position="bottom-left"/>
          </Suspense>
        </Web3ReactProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
