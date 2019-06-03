import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to="/https://www.linkedin.com/in/jonelle-bain/">LinkedIn</Link>
        <Link to="/https://github.com/jbain424/">GitHub</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/bio">About Me</Link>
      </div>
    </div>
  );
};

export default Navbar;
