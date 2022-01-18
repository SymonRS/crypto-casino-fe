import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./custom-theme";
import {routes} from "./routing/routerConfig";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={myTheme}>
        <Router>
          <Routes>
            {routes.map((route, i) => {
              return (<Route key={i} path={route.path} element={route.element} />)
            })}
          </Routes>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
