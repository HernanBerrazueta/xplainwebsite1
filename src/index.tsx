import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import theme from "./theme";
import GlobalStyles from "./utils/GlobalStyles";

const root = document.getElementById("root");

if (root) {
  const rootInstance = createRoot(root);
  rootInstance.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
      <GlobalStyles />
    </React.StrictMode>
  );
}
