import image1 from "./singleNewsSliderPhotos/photo1.jpg";
import image2 from "./singleNewsSliderPhotos/photo2.jpg";

export const images = [image1, image2];

const ImagesSingleNewsSlider = (index) => images[index % images.length];

export default ImagesSingleNewsSlider;
