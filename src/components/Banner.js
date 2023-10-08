// Banner.js
import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import PlanetImageOne from "../assets/images/num1.png";
import PlanetImageTwo from "../assets/images/num2.png";
import PlanetImageThree from "../assets/images/num3.png";
import PlanetImageFour from "../assets/images/num4.png";
import PlanetImageFive from "../assets/images/num5.png";
import PlanetImageSix from "../assets/images/num6.png";
import PlanetImageSeven from "../assets/images/num7.png";
import PlanetImageEight from "../assets/images/num8.png";

function Banner() {
  return (
    <div className="banner__container">
      {/* <div className="banner__stars"></div>
      <div className="banner__lines"></div>
      <div className="banner__sun"></div> */}
      <Link to="/portfolio/technology" className="banner__link banner__linkOne">
        <p>Marketing</p>
        <img src={PlanetImageOne} alt="Planet 1" />
      </Link>
      <Link to="/portfolio/travel" className="banner__link banner__linkTwo">
        <img src={PlanetImageTwo} alt="Planet 2" />
        <p>Architectural Design</p>
      </Link>
      <Link to="/portfolio/food" className="banner__link banner__linkThree">
        <p>Photography</p>
        <img src={PlanetImageThree} alt="Planet 3" />
      </Link>
      <Link to="/portfolio/food" className="banner__link banner__linkFour">
        <p>Business Consulting</p>
        <img src={PlanetImageFour} alt="Planet 4" />
      </Link>
      <Link to="/portfolio/food" className="banner__link banner__linkFive">
        <img src={PlanetImageFive} alt="Planet 5" />
        <p>Videography</p>
      </Link>
      <Link to="/portfolio/food" className="banner__link banner__linkSix">
        <img src={PlanetImageSix} alt="Planet 6" />
        <p>Website & App</p>
      </Link>
      <Link to="/portfolio/food" className="banner__link banner__linkSeven">
        <img src={PlanetImageSeven} alt="Planet 7" />
        <p>AR & VR</p>
      </Link>
      <Link to="/portfolio/food" className="banner__link banner__linkEight">
        <p>Podcast</p>
        <img src={PlanetImageEight} alt="Planet 8" />
      </Link>
    </div>
  );
}

export default Banner;
