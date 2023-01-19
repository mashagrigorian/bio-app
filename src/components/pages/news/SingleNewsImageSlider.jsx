import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./singleNewsImageSlider.css";

const SingleNewsImageSlider = () => {
  return (
    <>
      <Carousel className="main-slide">
        <div>
          <img
            width="1170px"
            src={process.env.PUBLIC_URL + `/singleNewsSliderPhotos/photo1.jpg`}
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            width="1170px"
            src={process.env.PUBLIC_URL + `/singleNewsSliderPhotos/photo2.jpg`}
          />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
    </>
  );
};

export default SingleNewsImageSlider;
