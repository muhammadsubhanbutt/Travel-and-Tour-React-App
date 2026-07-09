import React from "react";
import "./hero.css";
import Destination from "../Destination/Destination";
function Hero({ image, title, text ,btnText,cName,cImg}) {
  return (
    <>
      <div className="hero-section">
        <div className="img">
          <img src={image} alt="Hero-img" className={cImg}/>
          <div className="text">
          <h1 className="title">{title}</h1>
          <div className="txt">{text}</div>
          <a href="#" className={cName}>{btnText}</a>
          </div>
        </div>
      </div>
       
    </>
  );
}

export default Hero;
