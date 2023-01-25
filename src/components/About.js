import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>
      About Me
    </h2>
    <p>
      Im having fun now
    </p>
    <img src={image} alt="I made this" srcset=""></img>
  </div>;
}

export default About;
