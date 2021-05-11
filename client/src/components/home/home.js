import React, { Component } from "react";
import "./home.css";
//import { Helmet } from "react-helmet";

export default class Home extends Component {
  render() {
    return (
      <div id="main-container" className="main-container nav-effect-1">
        <nav className="nav-menu nav-effect-1" id="menu-1">
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

        <div class="main clearfix">
          {/* <!-- Header Content --> */}
          <header id="header" class="page-header">
            <div class="page-header-container row">
              {/* <!-- Logo --> */}
              <div class="main-logo" />

              <div class="menu-search">
                {/* <!-- Main Navigation --> */}
                <div class="main-navigation">
                  <a href="#">Menu</a>
                </div>

                {/* <!-- Search --> */}
                <div class="catalog-search">
                  <input
                    class="shuffle-search input_field"
                    type="search"
                    autocomplete="off"
                    value=""
                    maxlength="128"
                    id="input-search"
                  />
                  <label class="input_label" for="input-search">
                    <span class="input_label-content">Search</span>
                    <span class="input_label-search"></span>
                  </label>
                </div>
              </div>
            </div>
          </header>

          <div class="page-container">
            <div class="page-title category-title">
              {/* <!-- <h1>Book Viewer</h1> --> */}
            </div>

            <section id="book_list">
              {/* toolbar */}
              <div class="toolbar row">
                <div class="filter-options small-12 medium-9 columns">
                  <a href="#" class="filter-item active" data-group="all">
                    All Categories
                  </a>
                  <a href="#" class="filter-item" data-group="fantasy">
                    Fantasy
                  </a>
                  <a href="#" class="filter-item" data-group="sci-fi">
                    Sci-Fi
                  </a>
                  <a href="#" class="filter-item" data-group="classic">
                    Classics
                  </a>
                  <a href="#" class="filter-item" data-group="fairy">
                    Fairy Tale
                  </a>
                  <a href="#" class="filter-item" data-group="young">
                    Young Adult
                  </a>
                </div>

                {/* sort option */}
                <div class="small-12 medium-3 columns">
                  <select class="sort-options">
                    <option value="" disabled selected>
                      Sort by
                    </option>
                    <option value="">Featured</option>
                    <option value="title">Alphabetical</option>
                    <option value="date-created">Published</option>
                  </select>
                </div>
              </div>

              <div class="grid-shuffle">
                <ul id="grid" class="row">
                  <li
                    class="book-item small-12 medium-6 columns"
                    data-groups='["classic"]'
                    data-date-created="1937"
                    data-title="Of Mice and Men"
                    data-color="#fcc278"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <div class="bk-front">
                            <div class="bk-cover"></div>
                          </div>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-details">
                      <h3 class="book-item_title">Of Mice and Men</h3>
                      <p class="author">by John Steinbeck &bull; 1937</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam tellus nisi, eget pulvinar in, molestie et arcu.
                      </p>
                      <a href="#" class="button">
                        Details
                      </a>
                    </div>

                    <div class="overlay-details">
                      <a href="#" class="close-overlay-btn">
                        Close
                      </a>
                      <div class="overlay-image">
                        <img
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_1-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">Of Mice and Men</h2>
                        <p class="author">by John Steinbeck</p>
                        <p class="published">1937</p>
                        <p class="synopsis">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Etiam luctus convallis sem. Nunc sed tristique
                          augue. Aenean at nulla vel lacus volutpat bibendum
                          vitae ut nibh. Aliquam eu metus et purus rutrum
                          malesuada. Aenean in auctor mauris, non vulputate
                          libero. Nullam auctor, purus ut cursus convallis,
                          lectus tellus dignissim lectus, id tempor ipsum leo ut
                          nulla. Vestibulum vitae elit erat.
                        </p>
                        <a href="#" class="button preview">
                          Preview
                        </a>
                      </div>
                      <div class="overlay-preview">
                        <a href="#" class="back-preview-btn">
                          Back
                        </a>
                        <h4 class="preview-title">Preview</h4>
                        <div class="preview-content">
                          <h5>Chapter 1</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam luctus convallis sem. Nunc sed tristique
                            augue. Aenean at nulla vel lacus volutpat bibendum
                            vitae ut nibh. Aliquam eu metus et purus rutrum
                            malesuada. Aenean in auctor mauris, non vulputate
                            libero. Nullam auctor, purus ut cursus convallis,
                            lectus tellus dignissim lectus, id tempor ipsum leo
                            ut nulla. Vestibulum vitae elit erat.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam luctus convallis sem. Nunc sed tristique
                            augue. Aenean at nulla vel lacus volutpat bibendum
                            vitae ut nibh. Aliquam eu metus et purus rutrum
                            malesuada. Aenean in auctor mauris, non vulputate
                            libero. Nullam auctor, purus ut cursus convallis,
                            lectus tellus dignissim lectus, id tempor ipsum leo
                            ut nulla. Vestibulum vitae elit erat.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam luctus convallis sem. Nunc sed tristique
                            augue. Aenean at nulla vel lacus volutpat bibendum
                            vitae ut nibh. Aliquam eu metus et purus rutrum
                            malesuada. Aenean in auctor mauris, non vulputate
                            libero. Nullam auctor, purus ut cursus convallis,
                            lectus tellus dignissim lectus, id tempor ipsum leo
                            ut nulla. Vestibulum vitae elit erat.
                            <br />
                            &nbsp;
                            <br />
                            &nbsp;
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    class="book-item small-12 medium-6 columns"
                    data-groups='["classic","young"]'
                    data-date-created="1951"
                    data-title="The Catcher in the Rye"
                    data-color="#009c8b"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <div class="bk-front">
                            <div class="bk-cover"></div>
                          </div>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-details">
                      <h3 class="book-item_title">The Catcher in the Rye</h3>
                      <p class="author">by J.D. Salinger &bull; 1951</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam tellus nisi, eget pulvinar in, molestie et arcu.
                      </p>
                      <a href="#" class="button">
                        Details
                      </a>
                    </div>

                    <div class="overlay-details">
                      <a href="#" class="close-overlay-btn">
                        Close
                      </a>
                      <div class="overlay-image">
                        <img
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_2-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">The Catcher in the Rye</h2>
                        <p class="author">by J.D. Salinger</p>
                        <p class="published">1951</p>
                        <p class="synopsis">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Etiam luctus convallis sem. Nunc sed tristique
                          augue. Aenean at nulla vel lacus volutpat bibendum
                          vitae ut nibh. Aliquam eu metus et purus rutrum
                          malesuada. Aenean in auctor mauris, non vulputate
                          libero. Nullam auctor, purus ut cursus convallis,
                          lectus tellus dignissim lectus, id tempor ipsum leo ut
                          nulla. Vestibulum vitae elit erat.
                        </p>
                        <a href="#" class="button preview">
                          Preview
                        </a>
                      </div>
                      <div class="overlay-preview">
                        <a href="#" class="back-preview-btn">
                          Back
                        </a>
                        <h4 class="preview-title">Preview</h4>
                        <div class="preview-content">
                          <h5>Chapter 1</h5>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam luctus convallis sem. Nunc sed tristique
                            augue. Aenean at nulla vel lacus volutpat bibendum
                            vitae ut nibh. Aliquam eu metus et purus rutrum
                            malesuada. Aenean in auctor mauris, non vulputate
                            libero. Nullam auctor, purus ut cursus convallis,
                            lectus tellus dignissim lectus, id tempor ipsum leo
                            ut nulla. Vestibulum vitae elit erat.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam luctus convallis sem. Nunc sed tristique
                            augue. Aenean at nulla vel lacus volutpat bibendum
                            vitae ut nibh. Aliquam eu metus et purus rutrum
                            malesuada. Aenean in auctor mauris, non vulputate
                            libero. Nullam auctor, purus ut cursus convallis,
                            lectus tellus dignissim lectus, id tempor ipsum leo
                            ut nulla. Vestibulum vitae elit erat.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam luctus convallis sem. Nunc sed tristique
                            augue. Aenean at nulla vel lacus volutpat bibendum
                            vitae ut nibh. Aliquam eu metus et purus rutrum
                            malesuada. Aenean in auctor mauris, non vulputate
                            libero. Nullam auctor, purus ut cursus convallis,
                            lectus tellus dignissim lectus, id tempor ipsum leo
                            ut nulla. Vestibulum vitae elit erat.
                            <br />
                            &nbsp;
                            <br />
                            &nbsp;
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        <div class="main-overlay">
          <div class="overlay-full"></div>
        </div>
        {/* <Helmet>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
          <script src="https://cdn.jsdelivr.net/foundation/6.2.0/foundation.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/Shuffle/4.0.0/shuffle.min.js"></script>
          <script src="./components/home/script.js"></script>
        </Helmet> */}
      </div>
    );
  }
}
