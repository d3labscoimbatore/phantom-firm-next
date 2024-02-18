"use client";
import React from "react";
import "../hero/hero.css";

const Hero = ({ heroSection }) => {
  const { title, subTitle } = heroSection;

  const firstTitle = title.substring(0, 19);
  const secondTitle = title.substring(20, 33);
  const thirdTitle = title.substring(34, 41);


  return (
    <div className="heroContainer">
      <div className="hero container containerPadding">
        <div className="heroLeft">
          <h1 className="oneLiner">
            {firstTitle}
            <span className="lineBreak">
              {" "}
              {secondTitle}<span className="animation"> {thirdTitle}</span>
            </span>
          </h1>
          <h3 className="shortDescription">{subTitle}</h3>
        </div>
        <div className="heroRight">
        
        </div>
      </div>
    </div>
  );
};

export default Hero;
