import React from "react";
import "./heropage.css";
import "../assets/images/hero1.png";
// import { Link } from "react-router-dom";
import hero1 from "../assets/images/hero1.png";

function HeroSection() {
  return (
    <div className="flex-column">
      <div className="hero-section-container flex-row-center">
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
        <div className="hero-img-container">
          <img src={hero1} className="hero-img" alt="hero-img" />
        </div>
      </div>
      <div className="step-container">
        <p className="steps-para">
          Step 1: Download iBloom app &amp; buy DilDost personal home heart
          sound recording device
        </p>
        <p className="steps-para">
          Step 2: Record heart sound when your loved ones feel any symptoms or
          whenever you want or for your daily AI heart checkup
        </p>
        <p className="steps-para">
          step 3: Get heart health diagnosis at comfort of your home by sharing
          heart soundwith our online cardiologists.You can also share with any
          doctor on Whatsapp,SMS,email or platforms like TATA 1mg
        </p>
      </div>
      <div className="info-container">
        <p className="info-text">
          Our members can have daily free AI heart sound analysis, so you can
          monitor your loved ones heart on day to day basis and consult
          cardiologist earlier.
        </p>
        <p className="info-text">
          Upload your heart sound recorded by DilDost device below and get
          instant AI heart sound analysis.
        </p>
        <div className="flex-row-center">
          <input type="file"></input>
        </div>
      </div>
      <div className="waitlist-container">
        <p className="waitlist-text">
          Join waitlist to get DilDost device :{" "}
          <span className="mail-text">contact@ibloom.ai</span>
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
