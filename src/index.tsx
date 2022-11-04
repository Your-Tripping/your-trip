import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Dashboard } from "./pages/Dashboard";
import UserProvider from "./contexts/UserContext";
import { GlobalStyles } from "./styles/global";
import theme from "./styles/theme";
import LandingPage from "./pages/Home";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <UserProvider>
        <LandingPage/>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
