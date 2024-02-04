"use client";

import React, { useRef } from "react";
import "../hero/hero.css";

const Hero = ({ heroSection }) => {
  const { Title, SubTitle } = heroSection;

  const firstTitle = Title.substring(0, 19);
  const secondTitle = Title.substring(20, 33);
  const thirdTitle = Title.substring(34, 41);



  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="heroContainer">
      <div className="hero container containerPadding">
        <div className="heroLeft">
          <h1 className="oneLiner">
            {firstTitle}{" "}
            <span className="lineBreak">
              {secondTitle}
              <span className="animation"> {thirdTitle}</span>
            </span>
          </h1>
          <h3 className="shortDescription">{SubTitle}</h3>
        </div>
        <div className="heroRight">
          <lottie-player
            ref={ref}
            autoplay
            loop
            src="https://lottie.host/f8c80bcd-3498-4e22-9430-e00de1aceb33/iQEF5v4cA3.json"
            speed="1"
            style={{ width: "50rem", height: "50rem", marginTop: "-5rem" }}
            debug
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Hero;
