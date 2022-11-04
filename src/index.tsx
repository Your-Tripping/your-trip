import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import UserProvider from "./contexts/UserContext";
import { GlobalStyles } from "./styles/global";
import theme from "./styles/theme";
import { RoutePages } from "./routes";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <UserProvider>
        <BrowserRouter>
          <RoutePages />
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
