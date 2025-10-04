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
        <Carousel.Caption>
          <h3>HOOD AGENT BHAPRI</h3>
          <p>Apparel for Bhayangkara</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Gambar2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Our Team</h3>
          <p>Deskripsi slide kedua di sini.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Gambar3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Best Seller</h3>
          <p>Deskripsi slide ketiga di sini.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
