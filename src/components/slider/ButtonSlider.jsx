import React from "react";

import "./slider.css";
import leftArrow from "./icons/left-arrow.svg";
import rightArrow from "./icons/right-arrow.svg";

const ButtonSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={
        direction === "next" ? "button-slide next" : "button-slide prev"
      }
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
};

export default ButtonSlider;
