import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {Provider} from "react-redux";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
    <ThemeProvider theme={theme}>
      <GoogleOAuthProvider clientId="771764447343-3l3qgcnjog9ss933p252g1b1g27la4vk.apps.googleusercontent.com">
          <Provider store={store}>
              <App />
          </Provider>
      </GoogleOAuthProvider>;
    </ThemeProvider>
  </LocalizationProvider>
);
