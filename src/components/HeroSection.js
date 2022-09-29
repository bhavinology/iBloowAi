import React from "react";
import "./heropage.css";
import "../assets/images/hero1.png";

function HeroSection() {
  return (
    <div className="flex-column">
      <div className="hero-section-container flex-row-center">
        <div className="hero-text-container flex-column">
          <div className="hero-text flex-column">
            <p className="hero-text-header">
              DilDost by <span className="hero-header-hl">iBloow</span>
              <span className="hero-header-sl">.ai</span>
            </p>
            <p className="hero-para">
              Your anytime and anywhere heart health monitoring and check-up
              device
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
        <div className="hero-img-container">
          <img src="../assets/images/logo.png" className="logo" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
