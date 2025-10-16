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
      <div className="my-5 text-align-center">
        <h3 className="text-center mb-4">Those Who Already Trust Us</h3>
        <p className="text-center text-muted mb-4">
          Our products are trusted by various communities and law enforcement agencies across Indonesia.
        </p>
        <img
          src="/Map/MapNew.gif"  
          alt="Store Location Map"
          className="d-block mx-auto justify-content-center"
          style={{ width: "100%"}}
        />
        
      </div>
      <Testimonials />
    </>
  );
}

export default Home;