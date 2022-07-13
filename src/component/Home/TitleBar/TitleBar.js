import React from "react";
import Typical from "react-typical";
import "./TitleBar.css";

const TitleBar = () => {
  return (
    <div className="container full-titlebar">
      <div className="big-Title">
        <Typical steps={["I am Md.Mohon", 2000]} loop={Infinity} wrapper="h1" />
        <Typical
          steps={["MERN-STACK DEVELOPER", 1000, "FRONTEND DEVELOPER", 1000]}
          loop={Infinity}
          wrapper="h2"
        />
      </div>
    </div>
  );
};

export default TitleBar;
