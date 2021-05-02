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
                <a href="#">Chapter 1</a>
              </li>
              <li>
                <a href="#">Next</a>
              </li>
            </ul>
          </nav>
          <section>
            <div class="page">
              <h1>Chapter 1: We are the best</h1>
              <p>
                W hat does it mean to manage well? As a young man, I certainly
                had no idea, but I was about to begin guring it out by taking a
                series of jobs—working for three iconoclastic men with very di
                erent styles—that would provide me with a crash course in
                leadership. In the next decade, I would learn much about what
                managers should and shouldn’t do, about vision and delusion,
                about con dence and arrogance, about what encourages creativity
                and what snu s it out. As I gained experience, I was asking
                questions that intrigued me even as they confused me. Even now,
                forty years later, I’ve never stopped questioning. I want to
                start with my rst boss, Alex Schure—the man whose secretary
                called me out of the blue that day in 1974 to book me an
                airplane ticket and then, realizing her mistake, slammed down
                the receiver. When the phone rang again, a few minutes later, an
                unfamiliar voice—this time, a man who said he worked for Alex—
                lled me in: Alex was starting a research lab on Long Island’s
                North Shore whose mission was to bring computers into the
                animation process. Money was not a problem, he assured me—Alex
                was a multimillionaire. What they needed was someone to run the
                place. Was I interested in talking?
              </p>

              <p>
                Alex, a former college chancellor, had zero expertise in the eld
                of computer science. At the time, that wasn’t unusual, but
                Alexhimself certainly was. He naïvely thought that computers
                would soon replace people, and leading that charge was what
                excited him. (We knew this was a misconception, if a common one
                at that point, but we were grateful for his eagerness to fund
                our work.) He had a bizarre way of speaking that mixed bluster,
                non sequiturs, and even snippets of rhyming verse into a sort of
                Mad Hatter–ish patois—or “word salad,” as one of my colleagues
                called it. (“Our vision will speed up time,” he would say,
                “eventually deleting it.”) Those of us who worked with him often
                had trouble understanding what he meant. Alex had a secret
                ambition—well, not so secret. He said almost every day that he
                didn’t want to be the next Walt Disney, which only made us all
                think that he did. When I arrived, he was in the process of
                directing a hand-drawn animated movie called Tubby the Tuba.
                Really, the thing never had a chance—no one at NYIT had the
                training or the story sensibility to make a lm, and when it was
                nally released, it vanished without a trace.
              </p>
              <img
                src="http://theawesomer.com/photos/2010/06/061210_venn_diagram_math_1.jpg"
                alt=""
              />
              <p>
                Deluded though he may have been about his own skills, Alex was a
                visionary. He was incredibly prescient about the role computers
                would someday play in animation, and he was willing to spend a
                lot of his own money to push that vision forward. His unwavering
                commitment to what many labeled a pipe dream—the melding of
                technology and this hand-drawn art form—enabled much
                groundbreaking work to be done. Once Alex brought me in, he left
                it to me to assemble a team. I have to give that to him: He had
                total con dence in the people he hired. This was something I
                admired and, later, sought to do myself. One of the rst people I
                interviewed was Alvy Ray Smith, a charismatic Texan with a Ph.D.
                in computer science and a sparkling resume that included
                teaching stints at New York University and UC Berkeley and a gig
                at Xerox PARC, the distinguished R&D lab in Palo Alto. I had con
                icting feelings when I met Alvy because, frankly, he seemed more
                quali ed to lead the lab than I was. I can still remember the
                uneasiness in my gut, that instinctual twinge spurred by a
                potential threat: This, I thought, could be the guy who takes my
                job one day. I hired him anyway.
              </p>
              <img src="https://d3gqasl9vmjfd8.cloudfront.net/cbd6879c-fcf9-4685-83aa-488e78584eec.png" />
            </div>
          </section>
        </article>
      </div>
    );
  }
}
