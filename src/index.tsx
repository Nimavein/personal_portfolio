import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { App } from "./App";
import { GlobalStyle, theme } from "./style";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
