import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "@/assets/css/index.css";

import store from "@/store";
import App from "@/App";
import "@/service/config";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
