import React from "react";
import "./style.css";

// Importing all images
import git from "../../../assets/git.png";

import html from "/src/assets/html.png";
import css from "/src/assets/css.png";
import java from "/src/assets/java.png";
import js from "/src/assets/js.png";
import linux from "/src/assets/linux.jpg";
import nodejs from "/src/assets/nodejs.png";
import reactLogo from "/src/assets/react.png";
import restapi from "/src/assets/restapi.png";
import scss from "/src/assets/scss.png";
import python from "/src/assets/python1.webp";
import sql from "/src/assets/sql.webp";
import oraclesql from "/src/assets/oraclesql.png";
import vitereact from "/src/assets/vitereact.png";

const techImages = [
  git,
 
  html,
  css,
  java,
  js,
  linux,
  nodejs,
  reactLogo,
  restapi,
  scss,
  python,
  sql,
  oraclesql,
  vitereact,
];

const renderImages = (repeatCount = 3) =>
  Array.from({ length: repeatCount }).flatMap((_, i) =>
    techImages.map((imgSrc, index) => (
      <img key={`${i}-${index}`} src={imgSrc} alt={`Tech ${index + 1}`} />
    ))
  );

const Marquee = () => {
  return (
    <div className="marquee-container">
      <h2 className="marquee-title">My technologies</h2>
      <span className="span">
        Crafting seamless experiences with cutting-edge technologies.
      </span>

      <div className="marquee">
        <div className="marquee-content marquee-line1">{renderImages()}</div>
      </div>

      <br />

      <div className="marquee">
        <div className="marquee-content marquee-line2">{renderImages()}</div>
      </div>
    </div>
  );
};

export default Marquee;
