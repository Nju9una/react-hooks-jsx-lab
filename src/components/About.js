import React from "react";
import { image } from "/home/studentmoringa/phase2/react-hooks-jsx-lab/src/data/data.js";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Insert your content here</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;

