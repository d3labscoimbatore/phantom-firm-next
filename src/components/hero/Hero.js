"use client";
import React, { useRef } from "react";
import "../hero/hero.css";

const Hero = ({ heroSection }) => {
  const { title, subTitle, lottiePlayerURL } = heroSection;

  const firstTitle = title.substring(0, 19);
  const secondTitle = title.substring(20, 33);
  const thirdTitle = title.substring(34, 41);

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  },[]);

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
          <lottie-player
            ref={ref}
            autoplay
            loop
            src={lottiePlayerURL}
            speed="1"
            style={{ width: "50rem", height: "auto", marginTop: "-5rem" }}
            debug
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Hero;
