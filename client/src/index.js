import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router-dom";

import "normalize.css";
import history from "./history";
import { EmailPage, SelectionPage, ThanksPage, LiveChat } from "./pages";

import "./styles/index.scss";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={EmailPage}></Route>
        <Route path="/selection" component={SelectionPage}></Route>
        <Route path="/thank_you" component={ThanksPage}></Route>
        <Route path="/live_chat" component={LiveChat}></Route>
      </Switch>
    </Router>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
