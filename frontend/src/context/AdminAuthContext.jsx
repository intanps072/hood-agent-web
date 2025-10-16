import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { Spinner, Alert, Container } from "react-bootstrap";

const AdminAuthContext = createContext();
const API_URL = "http://localhost:5000";

// Custom hook untuk mempermudah akses context
export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
};

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 Cek apakah admin sudah login saat pertama kali load
  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
    setLoading(false);
  }, []);

  // 🔹 Fungsi login
  const login = async (email, password) => {
    try {
      setError("");
      const response = await axios.get(`${API_URL}/admins`);
      const admins = response.data;

      const foundAdmin = admins.find(
        (a) => a.email === email && a.password === password
      );

      if (foundAdmin) {
        const adminData = {
          id: foundAdmin.id,
          name: foundAdmin.name,
          email: foundAdmin.email,
        };
        setAdmin(adminData);
        localStorage.setItem("admin", JSON.stringify(adminData));
        return { success: true };
      } else {
        return { success: false, message: "Email atau password salah." };
      }
    } catch (error) {
      setError("Terjadi kesalahan saat login. Silakan coba lagi.");
      return { success: false, message: error.message };
    }
  };

  // 🔹 Fungsi register
  const register = async (name, email, password) => {
    try {
      setError("");
      const response = await axios.get(`${API_URL}/admins`);
      const admins = response.data;

      const existingAdmin = admins.find((a) => a.email === email);
      if (existingAdmin) {
        return { success: false, message: "Email sudah terdaftar." };
      }

      const newAdmin = { name, email, password };
      const createResponse = await axios.post(`${API_URL}/admins`, newAdmin);

      const adminData = {
        id: createResponse.data.id,
        name: createResponse.data.name,
        email: createResponse.data.email,
      };

      setAdmin(adminData);
      localStorage.setItem("admin", JSON.stringify(adminData));
      return { success: true };
    } catch (error) {
      setError("Terjadi kesalahan saat registrasi. Silakan coba lagi.");
      return { success: false, message: error.message };
    }
  };

  // 🔹 Fungsi logout
  const logout = () => {
    setAdmin(null);
    localStorage.removeItem("admin");
  };

  const value = {
    admin,
    loading,
    error,
    login,
    register,
    logout,
  };

  // 🔹 Saat loading tampilkan spinner (React Bootstrap)
  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" role="status" />
      </Container>
    );
  }

  // 🔹 Jika ada error tampilkan alert
  if (error) {
    return (
      <Container className="mt-3">
        <Alert variant="danger">{error}</Alert>
        {children}
      </Container>
    );
  }

  // 🔹 Render context provider
  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};
