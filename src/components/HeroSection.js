import React from "react";
import HeroImg from "../assets/heroImage.svg";
import Bg from "../assets/bgf.png";
import "./hero.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div className="hero">
        <img className="hero__bg" src={Bg} alt="backgroung" />
        <Link className="hero__link" to="/login">
          Get started
        </Link>
        <div className="hero__content">
          <h1 className="hero__bannerText">
            A WEBSITE TO HELP YOU REMEMBER ALL YOUR TASK
          </h1>
        </div>
        <img className="hero__img" src={HeroImg} alt="" />
      </div>
    </>
  );
}

export default HeroSection;
