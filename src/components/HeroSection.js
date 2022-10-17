import React from "react";
import "./heropage.css";
import "../assets/images/hero1.png";
import Hero from "./hero";
import Steps from "./Steps";
import Info from "./Info";

function HeroSection() {
  return (
    <div className="flex-column">
      <Hero />
      <Steps />
      <Info />
    </div>
  );
}

export default HeroSection;
