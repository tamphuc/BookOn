import React, { Component } from "react";
import "./read.css";
export default class Read extends Component {
  render() {
    return (
      <div id="body-read">
        <article className="book-reader">
          <input type="checkbox" id="invert" />

          <input type="checkbox" id="fullscreen" />

          <label for="invert"></label>
          <label for="fullscreen"></label>

          <header>
            <a href="http://localhost:3000/home">Home</a>
            <h1>
              <a href="#">BookOn</a>
            </h1>
          </header>
          <nav>
            <ul>
              <li>
                <a href="#">Previous</a>
              </li>
              <li>
                <a href="#">Contents</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </nav>
        </article>
      </div>
    );
  }
}
