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
          src="./Slide/2B.png"
          alt="Second slide"
        />
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Slide/2F.png"
          alt="Third slide"
        />
      </Carousel.Item>

      {/* Slide 4 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Slide/3 (2).png"
          alt="Fourth slide"
        />
      </Carousel.Item>

      {/* Slide 5 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./Slide/5 (2).png"
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
