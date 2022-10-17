import React from "react";
import "./hero.css";
import "../assets/images/hero1.png";

import hero1 from "../assets/images/hero1.png";

function Hero() {
  return (
    // <div className="flex-column">
    <div className="hero-section-container flex-row-center">
      <div className="hero-img-container">
        <img src={hero1} className="hero-img" alt="hero-img" />
      </div>
      <div className="hero-text-container flex-column">
        <div className="hero-text flex-column">
          <p className="hero-text-header">
            DilDost by <span className="hero-header-hl">iBloom</span>
            <span className="hero-header-sl">.ai</span>
          </p>
          <p className="hero-para">
            Your anytime &amp; anywhere heart health monitoring and check-up
            device
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Hero;
