import React from "react";
import "../css/Resume.css";
import resume from "../photos/jbain_resume1.jpg";

export const Resume = () => {
  return (
    <>
      <div className="resume">
        <img src={resume} alt="resume" height="800"/>
      </div>
    </>
  );
};
