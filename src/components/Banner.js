import React from "react";
import BannerImage from "../assets/images/banner-5.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner__container">
      <img className="banner__image" src={BannerImage} />
    </div>
  );
}

export default Banner;
