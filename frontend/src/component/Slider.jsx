import React from "react";
import { Carousel } from "react-bootstrap";

function Slider() {
  return (
    <Carousel>
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Slide/Slider1.png"   
          alt="First slide"
        />
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Slide/Slider2New.jpg"
          alt="Second slide"
        />
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Slide/Slider3New.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
