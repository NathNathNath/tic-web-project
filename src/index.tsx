import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./assets/styles/index.css";
import Index from "./main";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./commons/store";

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
