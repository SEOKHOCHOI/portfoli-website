import React from "react";
import "./experience.css";
import Skills from "./skills/Skills";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Fronted Development</h3>
          <div className="experience__content">
            <Skills skill="HTML5" level="Learning" />
            <Skills skill="CSS3" level="Learning" />
            <Skills skill="SCSS" level="Learning" />
            <Skills skill="Bootstrap" level="Experienced" />
            <Skills skill="JavaScript" level="Learning" />
            <Skills skill="React" level="Learning" />
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <Skills skill="I'm going to study." level="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
