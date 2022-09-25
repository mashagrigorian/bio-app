import React, { useState } from "react";

import "./slider.css";
import ButtonSlider from "./ButtonSlider";
import dataSlider from "./dataSlider";
import { Box } from "@mui/material";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div
      className="container-slider"
      style={{
        height: "500px",
        margin: "0",
        position: "relative",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        clipPath: "none",
      }}
    >
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img
              src={process.env.PUBLIC_URL + `/images/photo${index + 1}.jpg`}
            />
          </div>
        );
      })}
      <ButtonSlider moveSlide={nextSlide} direction={"next"} />
      <ButtonSlider moveSlide={prevSlide} direction={"prev"} />

      <div
        className="container-dots"
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
        }}
      >
        {Array.from({ length: 4 }).map((item, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
            // style={{
            //   width: "20px",
            //   height: "20px",
            //   borderRadius: "50%",
            //   border: "3px solid #f1f1f1",
            //   margin: "0 5px",
            //   background: "#f1f1f1",
            // }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
