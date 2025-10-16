import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, Button, Alert, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAdminAuth } from "../context/AdminAuthContext";

const AdminRegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { register, admin } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (admin) {
      navigate("/admin/dashboard");
    }
  }, [admin, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validasi
    if (!name || !email || !password || !confirmPassword) {
      setError("Semua field harus diisi");
      return;
    }

    if (password.length < 6) {
      setError("Password minimal 6 karakter");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password tidak cocok");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Format email tidak valid");
      return;
    }

    setIsLoading(true);
    const result = await register(name, email, password);
    setIsLoading(false);

    if (result.success) {
      navigate("/admin/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #CB3B0F, #FFAE00)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
      }}
    >
      <Container style={{ maxWidth: "500px" }}>
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-white mb-2" style={{ fontSize: "2.5rem" }}>
            Admin Panel
          </h1>
          <p className="text-white-50">Daftar sebagai admin Hood Agent</p>
        </div>

        {/* Form Card */}
        <Card className="shadow-lg rounded-4 border-0">
          <Card.Body className="p-4 p-md-5">
            <h2 className="fw-bold text-dark mb-4">Daftar Admin Baru</h2>

            {error && (
              <Alert variant="danger" className="mb-4">
                {error}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Nama Lengkap</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="rounded-3"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="admin@hoodagent.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-3"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Minimal 6 karakter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="rounded-3"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Konfirmasi Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ulangi password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="rounded-3"
                />
              </Form.Group>

              <div className="d-grid">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="fw-semibold rounded-3 py-2"
                  style={{
                    backgroundColor: "#CB3B0F",
                    border: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#FFAE00";
                    e.target.style.color = "#212529";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#CB3B0F";
                    e.target.style.color = "#fff";
                  }}
                >
                  {isLoading ? "Loading..." : "Daftar"}
                </Button>
              </div>
            </Form>

            {/* Login Redirect */}
            <div className="text-center mt-4">
              <p className="text-muted">
                Sudah punya akun?{" "}
                <Link to="/admin/login" className="text-decoration-none fw-semibold" style={{ color: "#CB3B0F" }}>
                  Login
                </Link>
              </p>
            </div>

            {/* Back to Homepage */}
            <div className="text-center mt-4 pt-3 border-top">
              <Link
                to="/"
                className="text-muted text-decoration-none"
                style={{ transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.target.style.color = "#CB3B0F")}
                onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
              >
                ← Kembali ke Homepage
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AdminRegisterPage;
