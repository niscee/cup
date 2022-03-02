import React from "react";
import "./intro.css";

const introMainContainer = {
  background: 'url("./imgs/footballmain.jpeg") no-repeat center center/cover',
  height: "100vh",
};

const Intro = () => {
  return (
    <div style={introMainContainer}>
      <div className="intro-inner">
        <div style={{ border: "2px solid white", padding: "5px" }}>
          <p id="intro-text">Cartel Cup</p>
          <p id="intro-text">3.0</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
