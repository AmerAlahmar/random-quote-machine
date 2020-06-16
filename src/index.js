import React from "react";
import { render } from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Root from "./root/Root.js";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "./store/configureStore";

const store = configureStore();

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById("root")
);