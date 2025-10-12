import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductList, Slider  } from "../component"; // Slider2

function Home() {
  return (
    <>
      <Slider />
      <div className="my-5 text-align-center">
        <h3 className="text-center mb-4">Those Who Already Trust Us</h3>
        <img
          src="/Map/NewMap.gif"  
          alt="Store Location Map"
          className="d-block mx-auto justify-content-center"
          style={{ width: "80%"}}
        />
      </div>
      <ProductList />

      <div className="text-center mt-5">
        <video className="w-600 rounded shadow" controls>
          <source src="../assets/Promosi.mp4" type="video/mp4" />
          Browser Anda tidak mendukung video tag.
        </video>
      </div>

      {/* <Slider2/> */}
      
    </>
  );
}

export default Home;