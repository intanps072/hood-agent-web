import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppNavbar, Footer } from "./component";
import { Home, OurStory, Catalog, Event, Login, Signup } from "./pages";
import { AdminAuthProvider } from "./context/AdminAuthContext";
import AdminLoginPage from "./pages/Login";
import AdminRegisterPage from "./pages/Signup";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./component/ProtectedRoute";
import ProductsManagement from "./pages/admin/ProductsManagement";
import ProjectsManagement from "./pages/admin/ProjectsManagement";
import EventsManagement from "./pages/admin/EventsManagement";
import "./App.css";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        <main>
          <AdminAuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/OurStory" element={<OurStory />} />
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/Event" element={<Event />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />

            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin/signup" element={<AdminRegisterPage />} />

            <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
            <Route path="products" element={<ProductsManagement />} />
            <Route path="projects" element={<ProjectsManagement />} />
            <Route path="events" element={<EventsManagement />} />
          </Routes>
          </AdminAuthProvider>
          <Footer />
        </main>
      </div>
      </Router>
      
  );
}

export default App;
