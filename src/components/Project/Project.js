import React from "react";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="project">
      <img
        className="project-image"
        src={project.image}
        alt={project.title}
      />
      <h3 className="project-title">{project.title}</h3>
      <div className="project-links">
        <a
          className="project-link"
          href={project.deployedUrl}
          target="_blank"
          rel="noreferrer"
        >
          Live App
        </a>
        <a
          className="project-link"
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;
