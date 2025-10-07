import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    // Tambahkan logika daftar user ke API di sini
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 shadow" style={{ width: "400px", borderRadius: "12px" }}>
        <h3 className="text-center mb-4" style={{ color: "#CB3B0F" }}>Sign Up</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Nama Lengkap</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Masukkan nama lengkap"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Masukkan email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Masukkan password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit" variant="dark" className="w-100" style={{ backgroundColor: "#CB3B0F", border: "none" }}>
            Daftar
          </Button>
        </Form>

        <p className="text-center mt-3">
          Sudah punya akun? <a href="/login" style={{ color: "#CB3B0F", textDecoration: "none" }}>Masuk di sini</a>
        </p>
      </Card>
    </Container>
  );
}

export default Signup;
