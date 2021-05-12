import React, { Component } from "react";
import "./login.css";
import { AppBar, Typography } from "@material-ui/core";

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
    //e.preventDefault();
  };

  handleSignin = (e) => {
    e.preventDefault()
    let url = "http://localhost:5000/account/signin"

    let formData = new FormData(document.querySelector('signin_form'))

    let option = {method: "POST", body: formData}


    fetch(url,option).then(function(response) {
      console.log(response)
    })


  }

  redirect = () => {
    let url = "http://localhost:3000/home";
    //window.location.href = url;
    window.location.assign(url);
  };
  // componentDidMount() {
  //   document.body.className = "body-login"; // Or set the class
  // }

  render() {
    return (
      <div id="body-login">
        <div className="App-bar">
          <AppBar className="App-bar" position="static" color="inherit">
            <Typography className="title" variant="h1" align="center">
              BOOKON
            </Typography>
          </AppBar>
        </div>
        <div class="container right-panel-active">
          <div class="container__form container--signup">
            <form
              action="http://localhost:5000/account/signup"
              method="post"
              class="form"
            >
              <h2 class="form__title">Sign Up</h2>
              <input
                name="username"
                type="text"
                placeholder="User"
                class="input"
              />
              <input
                name="email"
                type="text"
                placeholder="Email"
                class="input"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                class="input"
              />

              <button type="submit" class="btn">
                Sign Up
              </button>
            </form>
          </div>

          <div class="container__form container--signin">
            <form
              action="http://localhost:5000/account/signin"
              id = "signin_form"
              method="post"
              class="form"
              onSubmit={this.handleSignin}

            >
              <h2 class="form__title">Sign In</h2>
              <input
                name="email"
                type="text"
                placeholder="Email"
                class="input"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                class="input"
              />
              

              <div id="error_div"></div>
              
              <a href="https://reactjs.org" class="link">
                Forgot your password?
              </a>

              <button type="submit" class="btn" >
                Sign In
              </button>
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
        </div>
      </div>
    );
  }
}
