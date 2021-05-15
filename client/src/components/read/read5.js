import React, { Component } from "react";
import "./read.css";
export default class Chapter4 extends Component {
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
                                <a href="/read4/1jhlg8761jk432875">Previous</a>
                            </li>
                            <li>
                                <a href="#">Chapter 5</a>
                            </li>
                            <li>
                                <a href="/read5/1jhlg8761jk432875">Next</a>
                            </li>
                        </ul>s
                    </nav>
                    <section>
                        <div class="page">
                            <h1>Chapter 5: At the end of the work </h1>



                        </div>
                    </section>
                </article>
            </div>
        );
    }
}
