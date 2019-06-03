import React from "react";
import "../css/AboutMe.css";
import profile_pic from "../photos/jojoProfilePic.jpg";

export const AboutMe = () => {
  return (
    <>
      <div className="profile">
        <div className="profile_pic">
          <img src={profile_pic} alt="picture" width="350px"/>
        </div>

        <div className="profile_bio">
          Enrolled in an intensive 10-month, Google-funded software engineering
          fellowship with a 9% acceptance rate (out of 1500+ applicants) whose
          graduates are prepared with both technical and professional skills and
          have been hired as developers at leading companies such as Pinterest,
          JP Morgan, and Spotify. Gained hands-on experience with Javascript,
          HTML, CSS, Node, Express, React/Redux, PostgreSQL, APIs, Git, Data
          Structures, Algorithms, and tech principles and culture via both
          team/individual projects, code reviews, and pair programming.
        </div>
      </div>
    </>
  );
};
