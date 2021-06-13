import ReactDOM from "react-dom";
import React from "react";
import GameListPage from "./pages/GameListPage/GameListPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import "fontsource-roboto";
import "./mock/server";
import "./index.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/list">
          <GameListPage />
        </Route>

        <Route path="/checkout">
          <CheckoutPage />
        </Route>

        <Redirect from="*" to="/list" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
