import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import App from "./App";

const Root = ({ store }) => {
  <Provider store={store}>
    <div>
      <Route path="/" component={App} />
    </div>
  </Provider>;
};


Root.PropTypes = {
    store: PropTypes.object.isRequired,
}

export default Root;