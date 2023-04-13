import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Stevi P. Roy</h1>
      <Navigation />
    </header>
  );
};

export default Header;
