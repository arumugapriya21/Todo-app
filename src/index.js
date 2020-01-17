import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Search from "./Search";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/search" component={Search} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
