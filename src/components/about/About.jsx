import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import AboutMe from "./about-me/AboutMe";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className=".container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <AboutMe
              me="Experience"
              info="New Recruit"
              icon={<FaAward className="about__icon" />}
            />
            <AboutMe
              me="Clients"
              info="12+ Worldwide"
              icon={<FiUsers className="about__icon" />}
            />
            <AboutMe
              me="Projects"
              info="4+ Completed"
              icon={<VscFolderLibrary className="about__icon" />}
            />
          </div>

          <p>FrontEnd Developer</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
