import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import { Helmet } from "react-helmet";
import "./App.css";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Read from "./components/read/read"
import Write from "./components/write/write"
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Login} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/read"} component={Read} />
            <Route exact path={"/write"} component={Write} />
          </Switch>
        </BrowserRouter>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/foundation/6.2.0/foundation.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Shuffle/4.0.0/shuffle.min.js"></script>
        <script src="./components/home/script.js"></script>
      </div>
    );
  }
}
