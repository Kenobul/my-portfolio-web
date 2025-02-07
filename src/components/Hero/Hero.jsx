import React from "react";
import "./Hero.css";
import profile_pic from "../../assets/profile_pic.jpg";
import AnchorLink from 'react-anchor-link-smooth-scroll';


const handleResumeClick = () => {
  window.open("/resume.docx", "_blank");
};

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile_pic} alt="" />
      <div className="hero-description">
        <h1>
          <span>
            Hello! am Obul Kenneth. <br></br> A frontend web developer based in
            Kenya
          </span>
        </h1>
        <p>
          I have been practising web development for the past 5 years and have<br></br>
          great interest and knowledge in web building and software development.
        </p>
      </div>
      <div className="more-hero-info">
      <div className="more-connect">
      <AnchorLink className="anchor-link" href="#contact" offset="50">
        Connect
      </AnchorLink>
    </div>
        <div className="resume" onClick={handleResumeClick} >
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
