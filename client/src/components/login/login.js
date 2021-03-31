import React, { Component}from "react";
import "./login.css";
import { Container, AppBar, Typography } from "@material-ui/core";

export default class Login extends Component {
  signInBtn = () => {
    const container = document.querySelector(".container");
    container.classList.remove("right-panel-active");
  };

  signUpBtn = () => {
    const container = document.querySelector(".container");
    container.classList.add("right-panel-active");
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  redirect = () => {
    let url = "http://localhost:3000/home"
    //window.location.href = url;
    window.location.assign(url);
  }

  render() {
    return (
      <Container maxidth="lg">
        <AppBar className="App-bar" position="static" color="inherit">
          <Typography className="title" variant="h2" align="center">
            BOOKON
          </Typography>
        </AppBar>
        
        <div class="container right-panel-active">
          <div class="container__form container--signup">
            <form action="#" class="form" onSubmit={this.handleSubmit}>
              <h2 class="form__title">Sign Up</h2>
              <input type="text" placeholder="User" class="input" />
              <input type="email" placeholder="Email" class="input" />
              <input type="password" placeholder="Password" class="input" />
              <button class="btn">Sign Up</button>
            </form>
          </div>

          <div class="container__form container--signin">
            <form action="#" class="form" onSubmit={this.handleSubmit}>
              <h2 class="form__title">Sign In</h2>
              <input type="email" placeholder="Email" class="input" />
              <input type="password" placeholder="Password" class="input" />
              <a href="https://reactjs.org" class="link">
                Forgot your password?
              </a>
              <button class="btn" onClick={this.redirect}>Sign In</button>
            </form>
          </div>

          <div class="container__overlay">
            <div class="overlay">
              <div class="overlay__panel overlay--left">
                <button class="btn" onClick={this.signInBtn}>
                  Sign In
                </button>
              </div>
              <div class="overlay__panel overlay--right">
                <button class="btn" onClick={this.signUpBtn}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>

          <h1>******************************************************</h1>
        </div>
      </Container>
    );
  }
}
