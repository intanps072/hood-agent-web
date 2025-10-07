import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Slider2() {
  return (
    <Carousel
      controls={false}        // ❌ hilangkan panah kiri-kanan
      indicators={false}      // ❌ hilangkan titik navigasi
      interval={3000}         // ⏱ durasi perpindahan 3 detik
      fade                    // 🌫️ transisi halus
      pause={false}           // ▶️ tetap berjalan (tidak berhenti saat hover)
      style={{ marginTop: "75px" }}
    >
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Gambar1.jpg"
          alt="Slide 1"
        />
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Gambar2.jpg"
          alt="Slide 2"
        />
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/Gambar3.jpg"
          alt="Slide 3"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider2;
