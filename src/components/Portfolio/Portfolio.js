import React from "react";
import "./Portfolio.css";
import Project from "../Project/Project";
import projectData from "../../data/portfolio.json";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio-title">My Projects</h2>
      <div className="project-list">
        {projectData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
