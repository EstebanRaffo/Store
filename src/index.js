import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import storeFactory from "./store";
import App from "./components/App";
import "./styles/styles.css";

import CssBaseline from '@material-ui/core/CssBaseline';
import CustomThemeProvider from './themes/CustomThemeProvider';


const store = storeFactory();

render(
  <Provider store={store}>
    <CustomThemeProvider>
      <CssBaseline />
      <App />
    </CustomThemeProvider>
  </Provider>,
  document.getElementById("root")
);


