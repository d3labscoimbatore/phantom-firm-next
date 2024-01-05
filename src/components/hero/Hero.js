"use client";

import React, { useRef } from "react";
import "../hero/hero.css";

const Hero = () => {
  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <div className="heroContainer">
      <div className="hero">
        <div className="heroLeft">
          <h1 className="oneLiner">
            We bring your brand <br /> closer to the
            <span className="animation"> People.</span>
          </h1>
          <h4 className="shortDescription">
            Crafting digital experiences to make your brand visible and
            relatable in the digital realm for a strong audience connection.
          </h4>
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
