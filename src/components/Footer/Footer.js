import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://stackoverflow.com/users/youruserid/yourusername"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <FaStackOverflow />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
