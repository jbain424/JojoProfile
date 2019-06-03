import React from "react";

import "../css/Homepage.css";

import profilePic from "../photos/github.svg";

class Homepage extends React.Component {
  render() {
    return (
      <div className="home_Links">
        <a href="https://www.linkedin.com/in/jonelle-bain/"></a> <img src={profilePic} alt="" />
        <img src={profilePic} alt="" />
        <img src={profilePic} alt="" />
        <img src={profilePic} alt="" />

      </div>
    );
  }
}

export default Homepage;
