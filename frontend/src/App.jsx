import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Slider from "./component/Slider";
import Footer from "./component/InfoContact";
import OurStory from "./pages/OurStory";
import Catalog from "./pages/Catalog";
import Event from "./pages/Event";
import Divisions from "./pages/Divisions";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <AppNavbar />
        <Routes>
          <Route path="/OurStory" element={<OurStory />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Divisions" element={<Divisions />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      <Slider />
      <ProductList />
        <div className="d-flex justify-content-center">
          <img src = "./Map/Map.gif" alt="Map" style={{ width: '80%', marginTop: '20px', marginBottom: '20px'}} />
        </div>
      <Footer />
      </Router>
  );
}

export default App;
