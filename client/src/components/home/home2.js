import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div id="main-container" class="main-container nav-effect-1">
        <nav class="nav-menu nav-effect-1" id="menu-1">
          <h2 class="">The Library</h2>
          <ul>
            <li>
              <a class="" href="#">
                Checkout
              </a>
            </li>
            <li>
              <a class="" href="#">
                Return
              </a>
            </li>
            <li>
              <a class="" href="#">
                About
              </a>
            </li>
            <li>
              <a class="" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div class="main clearfix">
          <header id="header" class="page-header">
            <div class="page-header-container row">
              <div class="main-logo">
                <a href="#" class="logo">
                  The Library
                </a>
              </div>

              <div class="menu-search">
                <div class="main-navigation">
                  <a href="#">Menu</a>
                </div>

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
                    <span class="input_label-content">Search Library</span>
                    <span class="input_label-search"></span>
                  </label>
                </div>
              </div>
            </div>
          </header>

          <div class="page-container">
            <div class="page-title category-title"></div>

            <section id="book_list">
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
                    data-groups='["fantasy","young"]'
                    data-date-created="2005"
                    data-title="Harry Potter and the Half-Blood Prince"
                    data-color="#658539"
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
                      <h3 class="book-item_title">
                        Harry Potter and the Half-Blood Prince
                      </h3>
                      <p class="author">by J.K. Rowling &bull; 2005</p>
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
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_18-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">
                          Harry Potter and the Half-Blood Prince
                        </h2>
                        <p class="author">by J.K. Rowling</p>
                        <p class="published">2005</p>
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
                    data-groups='["fantasy","young"]'
                    data-date-created="2007"
                    data-title="Harry Potter and the Deathly Hallows"
                    data-color="#b06010"
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
                      <h3 class="book-item_title">
                        Harry Potter and the Deathly Hallows
                      </h3>
                      <p class="author">by J.K. Rowling &bull; 2007</p>
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
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_19-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">
                          Harry Potter and the Deathly Hallows
                        </h2>
                        <p class="author">by J.K. Rowling</p>
                        <p class="published">2007</p>
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
      </div>
    );
  }
}
