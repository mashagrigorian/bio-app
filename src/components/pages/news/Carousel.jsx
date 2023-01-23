import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import imageSlider from "./imageSlider.json";

function CarouselImages() {
  return (
    <Carousel>
      {imageSlider.map((item, index) => {
        return (
          <div key={item.id} style={{ width: "100%" }}>
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
