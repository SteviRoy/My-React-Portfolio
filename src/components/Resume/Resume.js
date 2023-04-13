import React from "react";
import "./Resume.css";
import resumeFile from "../../assets/resume.pdf";

const Resume = () => {
  const proficiencies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    ];
    
    return (
    <section className="resume">
    <h2 className="resume-title">My Resume</h2>
    <div className="resume-content">
    <a
           href={resumeFile}
           target="_blank"
           rel="noreferrer"
           className="download-resume"
         >
    Download Resume
    </a>
    <h3 className="proficiencies-title">Proficiencies</h3>
    <ul className="proficiencies-list">
    {proficiencies.map((proficiency, index) => (
    <li key={index} className="proficiency">
    {proficiency}
    </li>
    ))}
    </ul>
    </div>
    </section>
    );
    };
    
    export default Resume;
