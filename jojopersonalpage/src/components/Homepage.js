import React from "react";

import "../css/Homepage.css";

import profilePic from "../photos/github.svg";

class Homepage extends React.Component {
  render() {
    return (
      <div className="home_Links">
        <img src={profilePic} alt="" width="100px" />
        <img src={profilePic} alt="" width="100px" />
        <img src={profilePic} alt="" width="100px" />
        <img src={profilePic} alt="" width="100px" />
      </div>
    );
  }
}

export default Homepage;
