import React, { Component } from "react";
import "./detail1.css";

export default class Detail1 extends Component {
    render() {
        return (
            <div id="main-container" class="main-container nav-effect-1">
                <nav class="nav-menu nav-effect-1" id="menu-1">
                    <h2 className="">The Library</h2>
                    <ul>
                        <li>
                            <a class="" href="https://reactjs.org">
                                Checkout
                            </a>
                        </li>
                        <li>
                            <a class="" href="https://reactjs.org">
                                Return
                            </a>
                        </li>
                        <li>
                            <a class="" href="https://reactjs.org">
                                About
                            </a>
                        </li>
                        <li>
                            <a class="" href="https://reactjs.org">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>




                <div className="grid-shuffle">
                    <ul id="grid" className="row">
                        <li
                            className="book-item small-12 medium-6 columns"
                            data-groups='["classic"]'
                            data-date-created="1937"
                            data-title="Of Mice and Men"
                            data-color="#fcc278"
                        >
                            <div className="bk-img">
                                <div className="bk-wrapper">

                                        <a href="/read/1jhlg8761jk432875">

                                            <div className="bk-front">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Of_Mice_and_Men_%281937_1st_ed_dust_jacket%29.jpg"
                                                    alt="Book Cover">

                                                </img>
                                            </div>
                                        </a>
                                        <div className="bk-back"></div>
                                        <div className="bk-left"></div>

                                </div>
                            </div>

                            <div className="item-details">
                                <h3 className="book-item_title">Of Mice and Men</h3>
                                <p className="author">by John Steinbeck &bull; 1937</p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Etiam tellus nisi, eget pulvinar in, molestie et arcu.

                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Etiam tellus nisi, eget pulvinar in, molestie et arcu.

                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Etiam tellus nisi, eget pulvinar in, molestie et arcu.

                                </p>

                            </div>

                            <div className="item-write pt-5">

                                <a href="/write" className="button">
                                    Buy
                                </a>

                                <a href="/detail1" className="button">
                                    Read
                                </a>

                                <a href="/detail1" className="button">
                                    Comment
                                </a>


                            </div>

                        </li>
                    </ul>
                </div>

                        <div class="main-overlay">
                    <div class="overlay-full"></div>
                </div>
            </div>

            //******************************************************* */
        );
    }
}
