import React, { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = ["About Me", "Portfolio", "Contact", "Resume"];

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`nav-item ${tab === activeTab ? "active" : ""}`}
            onClick={() => handleClick(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
