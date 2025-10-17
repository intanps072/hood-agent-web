import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductList, Slider, Slider2, ProductHighlight, Testimonials } from "../component"; 

function Home() {
  return (
    <>
      <Slider />
      <ProductHighlight />
      <ProductList />
      <Slider2 />
      <Testimonials />
      <div className="my-5 text-center">
        <h2 className="fw-bold display-5 mb-3">
            Those Who <span style={{ color: "#CB3B0F" }}>Already Trust Us</span>
          </h2>
        <p className="text-muted mb-4">
          Our products are trusted by various communities and law enforcement agencies across Indonesia.
        </p>
        <img
          src="/Map/MapNew.gif"  
          alt="Store Location Map"
          className="d-block mx-auto justify-content-center"
          style={{ width: "100%"}}
        />
        
      </div>
      
    </>
  );
}

export default Home;