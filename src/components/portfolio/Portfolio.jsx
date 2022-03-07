import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "MeetUp",
    github: "https://github.com/SEOKHOCHOI/MeetUp",
    demo: "https://youtu.be/IFjPYp3Kngs",
  },
  {
    id: 2,
    image: IMG2,
    title: "BookShop",
    github: "https://github.com/SEOKHOCHOI/kh-books",
    demo: "https://youtu.be/6eToTWvhzWU",
  },
  {
    id: 3,
    image: IMG3,
    title: "Accessory Shop",
    github: "https://github.com/SEOKHOCHOI/shop",
    demo: "https://youtu.be/V5LebeCGHLA",
  },
  {
    id: 4,
    image: IMG4,
    title: "Instagram",
    github: "https://github.com/SEOKHOCHOI/instagram",
    demo: "https://bit.ly/3rUM1g0",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
