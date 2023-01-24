import React from "react";
import Carousel from "react-material-ui-carousel";
import imageSlider from "./imageSlider.json";

function CarouselImages() {
  return (
    <Carousel>
      {imageSlider.map((item, index) => {
        return (
          <div key={item.id}>
            <img
              src={
                process.env.PUBLIC_URL + `/imageSlider/photo${index + 1}.jpg`
              }
            />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselImages;
