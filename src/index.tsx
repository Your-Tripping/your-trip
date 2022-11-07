import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import UserProvider from "./contexts/UserContext";
import { GlobalStyles } from "./styles/global";
import theme from "./styles/theme";
import { RoutePages } from "./routes";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./routes/ProtectedRoutes";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ToastContainer />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UserProvider>
          <RoutePages />
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
