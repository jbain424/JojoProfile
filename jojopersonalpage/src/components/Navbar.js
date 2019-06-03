import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import logo from "../photos/personalLogo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="nav_logo">
        <Link to={"/"}>
          <img className="logo" src={logo} alt="" width="120px" height="auto" />
        </Link>
      </span>

      <div className="links">
        <Link to="/https://www.linkedin.com/in/jonelle-bain/">LinkedIn</Link>
        <Link to="/https://github.com/jbain424/">GitHub</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/aboutme">About Me</Link>
      </div>
    </div>
  );
};

export default Navbar;
