import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAdminAuth } from "../context/AdminAuthContext";
import {
  Container,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login, admin } = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (admin) {
      navigate("/admin/dashboard");
    }
  }, [admin, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email dan password harus diisi");
      return;
    }

    setIsLoading(true);
    const result = await login(email, password);
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
      <Container style={{ maxWidth: "480px" }}>
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="fw-bold text-white mb-2" style={{ fontSize: "2.5rem" }}>
            Admin Panel
          </h1>
          <p className="text-white-50 mb-0">
            Login untuk mengatur konten Hood Agent
          </p>
        </div>

        {/* Login Card */}
        <Card className="shadow-lg rounded-4 border-0">
          <Card.Body className="p-4">
            <h2 className="fw-bold text-dark mb-4 text-center">Login</h2>

            {error && (
              <Alert variant="danger" className="mb-4">
                {error}
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="fw-semibold">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="admin@hoodagent.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="py-3"
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formPassword">
                <Form.Label className="fw-semibold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-3"
                />
              </Form.Group>

              <Button
                type="submit"
                variant="warning"
                disabled={isLoading}
                className="w-100 py-3 fw-semibold text-white border-0"
                style={{
                  backgroundColor: "#CB3B0F",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#FFAE00";
                  e.target.style.color = "#212529";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#CB3B0F";
                  e.target.style.color = "#fff";
                }}
              >
                {isLoading ? "Loading..." : "Login"}
              </Button>
            </Form>

            {/* Register Link */}
            <div className="mt-4 text-center">
              <p className="text-muted mb-0">
                Belum punya akun?{" "}
                <Link
                  to="/admin/signup"
                  className="fw-semibold"
                  style={{ color: "#CB3B0F", textDecoration: "none" }}
                  onMouseOver={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.textDecoration = "none")
                  }
                >
                  Daftar Admin
                </Link>
              </p>
            </div>

            {/* Back Link */}
            <div className="mt-4 pt-3 border-top text-center">
              <Link
                to="/"
                className="text-muted"
                style={{ textDecoration: "none" }}
                onMouseOver={(e) => (e.target.style.color = "#CB3B0F")}
                onMouseOut={(e) => (e.target.style.color = "#6c757d")}
              >
                ← Kembali ke Homepage
              </Link>
            </div>
          </Card.Body>
        </Card>

        {/* Info Box */}
        <Card
          className="mt-4 bg-transparent border-white border-opacity-25 text-white"
          style={{
            backdropFilter: "blur(6px)",
            borderRadius: "1rem",
          }}
        >
          <Card.Body className="p-3">
            <p className="fw-semibold mb-1">Default Admin:</p>
            <p className="mb-0">Email: admin@hoodagent.com</p>
            <p className="mb-0">Password: admin123</p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AdminLoginPage;
