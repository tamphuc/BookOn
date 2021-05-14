import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {
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
                          <a href="/read/1jhlg8761jk432875">

                          <div class="bk-front">
                              <img
                                  src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Of_Mice_and_Men_%281937_1st_ed_dust_jacket%29.jpg"
                                  alt="Book Cover">

                              </img>
                          </div>
                          </a>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    {/*<div class="bk-img">*/}
                    {/*  <img*/}
                    {/*      src="https://salt.tikicdn.com/cache/w400/media/catalog/product/i/m/img398_6.jpg"*/}
                    {/*      alt="Book Cover">*/}
                    {/*  </img>                    </div>*/}
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

                    <div className="item-write pt-5">

                      <a href="/write" className="button">
                        Write
                      </a>

                    </div>

                    <div class="overlay-details">
                      <a href="#" class="close-overlay-btn">
                        Close
                      </a>
                      <div class="overlay-image">
                        {/*<img*/}
                        {/*  src="https://salt.tikicdn.com/cache/w400/media/catalog/product/i/m/img398_6.jpg"*/}
                        {/*  alt="Book Cover">*/}
                        {/*</img>*/}
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
                          <a href="/read/1097876jgak000">
                          <div class="bk-front">
                            <img
                                src="https://salt.tikicdn.com/cache/w400/media/catalog/product/i/m/img398_6.jpg"
                                alt="Book Cover">
                            </img>
                          </div>
                          </a>
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
                          src="http://salt.tikicdn.com/cache/w400/media/catalog/product/i/m/img398_6.jpg"
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

                  <li
                    class="book-item small-12 medium-6 columns"
                    data-groups='["classic","young"]'
                    data-date-created="1954"
                    data-title="Lord of the Flies"
                    data-color="#db2e0f"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <a href="/read/1hak08755279hjk">
                          <div class="bk-front">
                            <img
                                src="https://static.wikia.nocookie.net/harrypotter/images/3/31/Order_of_the_Phoenix_New_Cover.jpg/revision/latest?cb=20170109054726"
                                alt="Book Cover">
                            </img>
                          </div>
                          </a>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>

                    <div class="item-details">
                      <h3 class="book-item_title">Lord of the Flies</h3>
                      <p class="author">by William Golding &bull; 1954</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam tellus nisi, eget pulvinar in, molestie et arcu.

                      </p>
                      <a href="#" class="button">
                        Details
                      </a>
                    </div>

                    <div className="item-write pt-5">

                      <a href="#" className="button">
                        Write
                      </a>
                    </div>


                    <div class="overlay-details">
                      <a href="#" class="close-overlay-btn">
                        Close
                      </a>
                      <div class="overlay-image">
                        <img
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_4-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">Lord of the Flies</h2>
                        <p class="author">by William Golding</p>
                        <p class="published">1954</p>
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
                    data-groups='["classic"]'
                    data-date-created="1925"
                    data-title="The Great Gatsby"
                    data-color="#e3b005"
                  >

                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <a href="/read/10978761097432875">
                          <div class="bk-front">
                            <img
                                src="https://render.fineartamerica.com/images/rendered/default/wood-print/6.5/8/break/images-medium-5/the-great-gatsby-book-cover-movie-poster-art-4-nishanth-gopinathan.jpg"
                                alt="Book Cover">
                            </img>
                          </div>
                          </a>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-details">
                      <h3 class="book-item_title">The Great Gatsby</h3>
                      <p class="author">by F. Scott Fitzgerald &bull; 1925</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam tellus nisi, eget pulvinar in, molestie et arcu.
                      </p>
                      <a href="#" class="button">
                        Details
                      </a>
                    </div>

                    <div className="item-write pt-5">

                      <a href="#" className="button">
                        Write
                      </a>
                    </div>


                    <div class="overlay-details">
                      <a href="#" class="close-overlay-btn">
                        Close
                      </a>
                      <div class="overlay-image">
                        <img
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_5-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">The Great Gatsby</h2>
                        <p class="author">by F. Scott Fitzgerald</p>
                        <p class="published">1925</p>
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
                    data-groups='["classic"]'
                    data-date-created="1851"
                    data-title="Moby Dick"
                    data-color="#a9afad"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <div class="bk-front">
                            <img
                                src="https://target.scene7.com/is/image/Target/GUEST_af01abae-16d1-46ed-b663-d931beec2138?fmt=webp&wid=700&qlt=80"
                                alt="Book Cover">
                            </img>
                          </div>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-details">
                      <h3 class="book-item_title">Moby Dick</h3>
                      <p class="author">by Herman Melville &bull; 1851</p>
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
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_6-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">Moby Dick</h2>
                        <p class="author">by Herman Melville</p>
                        <p class="published">1851</p>
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
                    data-groups='["classic","sci-fi"]'
                    data-date-created="1962"
                    data-title="A Clockwork Orange"
                    data-color="#fe7b21"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <div class="bk-front">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/I/411WOn6Z3XL._SX331_BO1,204,203,200_.jpg"
                                alt="Book Cover">
                            </img>
                          </div>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-details">
                      <h3 class="book-item_title">A Clockwork Orange</h3>
                      <p class="author">by Anthony Burgess &bull; 1962</p>
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
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_7-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">A Clockwork Orange</h2>
                        <p class="author">by Anthony Burgess</p>
                        <p class="published">1962</p>
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
                    data-groups='["classic","fairy"]'
                    data-date-created="1835"
                    data-title="The Princess and the Pea"
                    data-color="#aea98c"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <div class="bk-front">
                            <img
                                src="https://salt.tikicdn.com/cache/w444/ts/product/b6/97/9f/8812f92e0ecfc0c5fa17eedb8d6e37b3.png"
                                alt="Book Cover">
                            </img>
                          </div>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-details">
                      <h3 class="book-item_title">The Princess and the Pea</h3>
                      <p class="author">
                        by Hans Christian Andersen &bull; 1835
                      </p>
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
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_8-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">The Princess and the Pea</h2>
                        <p class="author">by Hans Christian Andersen</p>
                        <p class="published">1835</p>
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
                    data-groups='["classic","fairy"]'
                    data-date-created="1900"
                    data-title="The Wonderful Wizard of Oz"
                    data-color="#705e1e"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <div class="bk-front">
                            <img
                                src="https://m.media-amazon.com/images/I/51YvI3qCC2L.jpg"
                                alt="Book Cover">
                            </img>
                          </div>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-details">
                      <h3 class="book-item_title">
                        The Wonderful Wizard of Oz
                      </h3>
                      <p class="author">by L. Frank Baum &bull; 1900</p>
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
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_9-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">
                          The Wonderful Wizard of Oz
                        </h2>
                        <p class="author">by L. Frank Baum</p>
                        <p class="published">1900</p>
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
                    data-groups='["classic","fairy"]'
                    data-date-created="1934"
                    data-title="Mary Poppins"
                    data-color="#939894"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <div class="bk-front">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/I/9134M22gEbL.jpg"
                                alt="Book Cover">
                            </img>
                          </div>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-details">
                      <h3 class="book-item_title">Mary Poppins</h3>
                      <p class="author">by P.L. Travers &bull; 1934</p>
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
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_10-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">Mary Poppins</h2>
                        <p class="author">by P.L. Travers</p>
                        <p class="published">1934</p>
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
                    data-groups='["classic","fairy"]'
                    data-date-created="1740"
                    data-title="Beauty and the Beast"
                    data-color="#b4aa91"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <div class="bk-front">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/I/51wPXAA2puL._SX258_BO1,204,203,200_.jpg"
                                alt="Book Cover">
                            </img>
                          </div>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-details">
                      <h3 class="book-item_title">Beauty and the Beast</h3>
                      <p class="author">
                        by Gabrielle-Suzanne Barbot de Villeneuve &bull; 1740
                      </p>
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
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_11-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">Beauty and the Beast</h2>
                        <p class="author">
                          by Gabrielle-Suzanne Barbot de Villeneuve
                        </p>
                        <p class="published">1740</p>
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
                    data-groups='["classic","fairy"]'
                    data-date-created="1812"
                    data-title="Rapunzel"
                    data-color="#725d64"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <div class="bk-front">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/I/51ulyeOR-GL._SX258_BO1,204,203,200_.jpg"
                                alt="Book Cover">
                            </img>
                          </div>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-details">
                      <h3 class="book-item_title">Rapunzel</h3>
                      <p class="author">by Friedrich Schulz &bull; 1812</p>
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
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_12-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">Rapunzel</h2>
                        <p class="author">by Friedrich Schulz</p>
                        <p class="published">1812</p>
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
                    data-date-created="1997"
                    data-title="Harry Potter and the Sorcerer's Stone"
                    data-color="#7a4930"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <div class="bk-front">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/I/71k5%2Ba4ap0L._SL1156_.jpg"
                                alt="Book Cover">
                            </img>

                          </div>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-details">
                      <h3 class="book-item_title">
                        Harry Potter and the Sorcerer's Stone
                      </h3>
                      <p class="author">by J.K. Rowling &bull; 1997</p>
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
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_13-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">
                          Harry Potter and the Sorcerer's Stone
                        </h2>
                        <p class="author">by J.K. Rowling</p>
                        <p class="published">1997</p>
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
                    data-date-created="1998"
                    data-title="Harry Potter and the Chamber of Secrets"
                    data-color="#800020"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <div class="bk-front">
                            <img
                                src="https://cdn.hmv.com/r/w-1280/hmv/files/ee/ee0a6931-ce04-4bde-857b-f6e8f5fadc27.jpg"
                                alt="Book Cover">
                            </img>
                          </div>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-details">
                      <h3 class="book-item_title">
                        Harry Potter and the Chamber of Secrets
                      </h3>
                      <p class="author">by J.K. Rowling &bull; 1998</p>
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
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_14-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">
                          Harry Potter and the Chamber of Secrets
                        </h2>
                        <p class="author">by J.K. Rowling</p>
                        <p class="published">1998</p>
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
                    data-date-created="1999"
                    data-title="Harry Potter and the Prisoner of Azkaban"
                    data-color="#603060"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <div class="bk-front">
                            <img
                                src="https://cdn.hmv.com/r/w-1280/hmv/files/ee/ee0a6931-ce04-4bde-857b-f6e8f5fadc27.jpg"
                                alt="Book Cover">
                            </img>
                          </div>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-details">
                      <h3 class="book-item_title">
                        Harry Potter and the Prisoner of Azkaban
                      </h3>
                      <p class="author">by J.K. Rowling &bull; 1999</p>
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
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_15-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">
                          Harry Potter and the Prisoner of Azkaban
                        </h2>
                        <p class="author">by J.K. Rowling</p>
                        <p class="published">1999</p>
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
                    data-date-created="2000"
                    data-title="Harry Potter and the Goblet of Fire"
                    data-color="#9a9c43"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <div class="bk-front">
                            <img
                                src="https://salt.tikicdn.com/cache/w400/media/catalog/product/i/m/img398_6.jpg"
                                alt="Book Cover">
                            </img>
                          </div>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-details">
                      <h3 class="book-item_title">
                        Harry Potter and the Goblet of Fire
                      </h3>
                      <p class="author">by J.K. Rowling &bull; 2000</p>
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
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_16-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">
                          Harry Potter and the Goblet of Fire
                        </h2>
                        <p class="author">by J.K. Rowling</p>
                        <p class="published">2000</p>
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
                    data-date-created="2003"
                    data-title="Harry Potter and the Order of the Phoenix"
                    data-color="#2c63a0"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <div class="bk-front">
                            <img
                                src="http://ielts-share.com/wp-content/uploads/2018/09/5.-Harry-Potter-and-the-Order-of-the-Phoenix.jpg"
                                alt="Book Cover">
                            </img>
                          </div>
                          <div class="bk-back"></div>
                          <div class="bk-left"></div>
                        </div>
                      </div>
                    </div>
                    <div class="item-details">
                      <h3 class="book-item_title">
                        Harry Potter and the Order of the Phoenix
                      </h3>
                      <p class="author">by J.K. Rowling &bull; 2003</p>
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
                          src="http://interactivejoe.com/book-viewer/assets/images/bk_17-large.jpg"
                          alt="Book Cover"
                        />
                        <div class="back-color"></div>
                      </div>
                      <div class="overlay-desc activated">
                        <h2 class="overlay_title">
                          Harry Potter and the Order of the Phoenix
                        </h2>
                        <p class="author">by J.K. Rowling</p>
                        <p class="published">2003</p>
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
                    data-date-created="2005"
                    data-title="Harry Potter and the Half-Blood Prince"
                    data-color="#658539"
                  >
                    <div class="bk-img">
                      <div class="bk-wrapper">
                        <div class="bk-book bk-bookdefault">
                          <div class="bk-front">
                            <img
                                src="https://salt.tikicdn.com/cache/w400/media/catalog/product/i/m/img398_6.jpg"
                                alt="Book Cover">
                            </img>
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
                            <img
                                src="https://static.wikia.nocookie.net/harrypotter/images/3/31/Order_of_the_Phoenix_New_Cover.jpg/revision/latest?cb=20170109054726"
                                alt="Book Cover">
                            </img>
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

      //******************************************************* */
    );
  }
}
