import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import UserProvider from "./contexts/UserContext";
import { GlobalStyles } from "./styles/global";
import theme from "./styles/theme";
import { RoutePages } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TrippingProvider from "./contexts/TrippingContext";
import SearchProvider from "./contexts/SearchContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ToastContainer />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TrippingProvider>
          <UserProvider>
            <SearchProvider>
              <RoutePages />
            </SearchProvider>
          </UserProvider>
        </TrippingProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
