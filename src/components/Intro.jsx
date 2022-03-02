import React from "react";
import "./intro.css";
import { imgList } from "./data.js";

const introMainContainer = {
  background: 'url("./imgs/footballmain.jpeg") no-repeat center center/cover',
  height: "100vh",
};

// looping image list.
const imgIterate = (list) => {
  return (
    <img
      src={list}
      alt="team"
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        marginLeft: "20px",
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
            border: "2px solid red",
            padding: "10px 0px",
            backdropFilter: "blur(5px)",
          }}
        >
          <p className="intro-text">Cartel Cup</p>
          <p className="intro-text">3.0</p>
          <marquee scrollamount="10">
            {imgList.map((list) => {
              return imgIterate(list);
            })}
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Intro;
