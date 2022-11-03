import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button/button.style";
import { Input } from "./components/Input/input.style";
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
      <LandingPage></LandingPage>
      <div>
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
