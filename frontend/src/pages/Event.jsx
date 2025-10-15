import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import GambarEvent from "../assets/GambarEvent.png";

const Event = () => {
  return (
    <img
        src={GambarEvent}
        alt="Gambar"
        style={{
        width: "100vw",     // penuh lebar layar
        height: "90vh",     // tinggi bisa diatur
        objectFit: "cover", // isi penuh tanpa distorsi
        display: "block",   // hilangkan jarak bawaan
        margin: 0,
        padding: 0,
        }}
        />

        
      

        
  );
};

export default Event;
