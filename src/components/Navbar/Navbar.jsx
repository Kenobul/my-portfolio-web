import React from "react";
import "./Navbar.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="menu">
        <h1 className="name">Kenato 👋</h1>
        <ul className="list">
          <li>
            <AnchorLink className="anchor-link" href="#hero" >
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#about" offset="50">
              About me
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#services" offset="50">
              Services
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#portfolio" offset="50">
              Portfolio
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" href="#contact" offset="50">
              Contact
            </AnchorLink>
          </li>
        </ul>
        <div className="home-connect">
          <AnchorLink className="anchor-link" href="#contact" offset="50">
            Connect with me
          </AnchorLink>
        </div>
      </div>


    </div>
  );
};

export default Navbar;
