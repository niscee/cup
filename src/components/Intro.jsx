import React from "react";
import "./intro.css";

const introMainContainer = {
  background: 'url("./imgs/footballmain.jpeg") no-repeat center center/cover',
  height: "100vh",
};

const imgList = [
  "./imgs/celta.png",
  "./imgs/gladbach.jpeg",
  "imgs/leicester.png",
  "imgs/lyon.jpeg",
  "imgs/sassuolo.png",
];

const Intro = () => {
  return (
    <div style={introMainContainer}>
      <div className="intro-inner">
        <div
          style={{
            border: "2px solid red",
            padding: "2px",
            backdropFilter: "blur(5px)",
          }}
        >
          <p className="intro-text">Cartel Cup</p>
          <p className="intro-text">3.0</p>
          <div className="intro-text">
            {imgList.map((list) => {
              return (
                <img
                  src={list}
                  alt="team"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginLeft: "10px",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
