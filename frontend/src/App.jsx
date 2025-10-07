import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppNavbar, Footer } from "./component";
import { Home, OurStory, Catalog, Event, Divisions, Login, Signup } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/OurStory" element={<OurStory />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/Event" element={<Event />} />
            <Route path="/Divisions" element={<Divisions />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />
          </Routes>
          <Footer />
        </main>
      </div>
      </Router>
      
  );
}

export default App;
