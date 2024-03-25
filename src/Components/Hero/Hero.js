import React from "react";
import "./hero.css";
import BackgroundImage from "../../Assets/images/HeroSection-bg-image.jpg";

function Hero() {
  return (
    <section className="hero">
      <img src={BackgroundImage} alt="Paper airplane flying at crescent moon" />
      <h1>Epic Travel Blog!!!!</h1>
      <h2>
        This is where we post about our travels to various cities across the
        globe, and they are all SUPER epic!!
      </h2>
    </section>
  );
}

export default Hero;
