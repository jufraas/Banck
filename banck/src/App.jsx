import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ErrorFound from "./components/404";
import Login from "./vistas/auth/Login";
import { ThemeProvider } from "@emotion/react";
import theme from "./utils/theme";
import Home from "./vistas/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes >
          <Route path={"home"} element={<Home/>} /> 
          <Route path={"/"} element={<Login />} />
          <Route path={"/404"} element={<ErrorFound />} />
          <Route path={"*"} element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
