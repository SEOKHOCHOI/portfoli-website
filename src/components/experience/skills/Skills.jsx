import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./skills.css";

const Skills = ({ skill, level, detail }) => {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
        <h4>{skill}</h4>
        <small className="text-light">{detail}</small>
        <br />
        <small className="text-light">{level}</small>
      </div>
    </article>
  );
};

export default Skills;
