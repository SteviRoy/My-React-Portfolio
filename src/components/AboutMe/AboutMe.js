import React from "react";
import "./AboutMe.css";
import avatar from "../../assets/avatar.jpg";

const AboutMe = () => {
  return (
    <section className="about-me">
      <img className="about-me-avatar" src={avatar} alt="Developer's avatar" />
      <p className="about-me-text">
        Hi, I'm a passionate web developer with experience in creating
        responsive and user-friendly web applications. I specialize in React,
        JavaScript, HTML, and CSS.
      </p>
    </section>
  );
};

export default AboutMe;
