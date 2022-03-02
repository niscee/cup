import React from "react";
import "./intro.css";
import { imgList } from "./data.js";

const introMainContainer = {
  background: 'url("./imgs/footballmain.jpeg") no-repeat center center/cover',
  height: "100vh",
};

// looping image list.
const imgIterate = (list, key) => {
  return (
    <img
      src={list}
      key={key}
      alt="team"
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        marginLeft: "10px",
      }}
    />
  );
};

const Intro = () => {
  return (
    <div style={introMainContainer}>
      <div className="intro-inner">
        <div
          style={{
            border: "2px ridge red",
            padding: "10px 0px",
            backdropFilter: "blur(5px)",
          }}
        >
          <p className="intro-text">Cartel Cup</p>
          <p className="intro-text">3.0</p>
          {imgList.map((list, key) => {
            return imgIterate(list, key);
          })}
        </div>
      </div>
    </div>
  );
};

export default Intro;
