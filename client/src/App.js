import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import { Helmet } from "react-helmet";
import "./App.css";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Read from "./components/read/read"
import Chapter from "./components/read/read2"
import Chapter3 from "./components/read/read3"
import Chapter4 from "./components/read/read4"
import Chapter5 from "./components/read/read5"
import Write from "./components/write/write"
import Detail1 from "./components/details/detail1"

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Login} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/read/:id"} component={Read} />
            <Route exact path={"/read2/:id"} component={Chapter} />
            <Route exact path={"/read3/:id"} component={Chapter3} />
            <Route exact path={"/read4/:id"} component={Chapter4} />
            <Route exact path={"/read5/:id"} component={Chapter5} />
            <Route exact path={"/write"} component={Write} />
            <Route exact path={"/detail1/"} component={Detail1} />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
