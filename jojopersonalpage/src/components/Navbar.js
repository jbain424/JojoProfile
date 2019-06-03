import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
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
        <a href="/https://www.linkedin.com/in/jonelle-bain/">LinkedIn</a>
        <a href="/https://github.com/jbain424/">GitHub</a>
        <Link to="/resume">Resume</Link>
        <Link to="/aboutme">About Me</Link>
      </div>
    </div>
  );
};

export default Navbar;
