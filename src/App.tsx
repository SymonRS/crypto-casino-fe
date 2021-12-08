import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {routes} from "./routing/routerConfig";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, i) => {
          return (<Route key={i} path={route.path} element={route.element} />)
        })}
      </Routes>
    </Router>
  );
}

export default App;
