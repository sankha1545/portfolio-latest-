import React from "react";
import "./style.css";

// Importing all images from the same relative path
import git from "../../../assets/git.png";

import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import java from "../../../assets/java.png";
import js from "../../../assets/js.png";
import linux from "../../../assets/linux.jpg";
import nodejs from "../../../assets/nodejs.png";
import reactLogo from "../../../assets/react.png";
import restapi from "../../../assets/restapi.png";
import scss from "../../../assets/scss.png";
import python from "../../../assets/python1.webp";
import sql from "../../../assets/sql.webp";
import oraclesql from "../../../assets/oraclesql.png";
import vitereact from "../../../assets/vitereact.png";

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
