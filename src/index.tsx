import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button/button.style";
import { Input } from "./components/Input/input.style";
import { GlobalStyles } from "./styles/globla";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <div>
        <Input placeholder="ehdnckjasmnk" />
        <Button buttonType="primary">Enviar</Button>
        <Button buttonType="secondary">Seguir</Button>
        <Button buttonType="tertiary">aidwnjjx</Button>
        <Button buttonType="outline">cbhsyziks</Button>
      </div>
    </ThemeProvider>
  </React.StrictMode>
);
