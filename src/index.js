import "whatwg-fetch";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/eze-dashboard.scss";
import "assets/demo/demo.css";

import indexRoutes from "routes/index.jsx";
import configureStore from "./store/configureStore";

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={configureStore}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return (
            <Route path={prop.path} key={key} component={prop.component} />
          );
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
