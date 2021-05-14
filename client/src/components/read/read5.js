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
                                <a href="#">Previous</a>
                            </li>
                            <li>
                                <a href="#">Chapter 4</a>
                            </li>
                            <li>
                                <a href="/read5/1jhlg8761jk432875">Next</a>
                            </li>
                        </ul>s
                    </nav>
                    <section>
                        <div class="page">
                            <h1>Chapter 5: he black stable-hand </h1>
                            <p>
                                At the end of the workday, Slim and George return to the bunkhouse. Slim has agreed to give one of the pups to Lennie, and George thanks him for his kindness, insisting that Lennie is “dumb as hell,” but is neither crazy nor mean. Slim appreciates George’s friendship with Lennie, saying that it is a welcome change in a world where no one ever “seems to give a damn about nobody.” George confides in Slim the story of how he and Lennie came to be companions. They were born in the same town, and George took charge of Lennie after the death of Lennie’s Aunt Clara. At first, George admits, he pushed Lennie around, getting him to do ridiculous things, such as jumping into a river even though he didn’t know how to swim. After watching his friend nearly drown, George felt ashamed of his behavior. Since that day, he has taken good care of his companion, protecting him even when he gets in trouble. For example, in Weed, the last town where they worked, Lennie wanted to touch the fabric of a girl’s red dress. When she pulled away, Lennie became frightened and held on to her until George hit him over the head to make him let go. The girl accused Lennie of rape, and George and Lennie had to hide in an irrigation ditch to escape a lynch mob.
                            </p>


                        </div>
                    </section>
                </article>
            </div>
        );
    }
}
