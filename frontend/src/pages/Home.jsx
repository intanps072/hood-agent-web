import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductList, Slider, Slider2 } from "../component";

function Home() {
  return (
    <>
      <Slider />
      <ProductList />
      <Slider2/>
      <div className="my-5 text-align-center">
        <h3 className="text-center mb-4">Our Location Ordered</h3>
        <img
          src="/Map/Map Location.gif"  
          alt="Store Location Map"
          style={{ width: "80%", justifyContent: "center" }}
        />
      </div>
    </>
  );
}

export default Home;