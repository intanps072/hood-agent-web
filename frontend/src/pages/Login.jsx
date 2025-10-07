import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", { email, password });
    // Tambahkan logika autentikasi di sini (misalnya ke API)
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 shadow" style={{ width: "400px", borderRadius: "12px" }}>
        <h3 className="text-center mb-4" style={{ color: "#CB3B0F" }}>Login</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" variant="dark" className="w-100" style={{ backgroundColor: "#CB3B0F", border: "none" }}>
            Masuk
          </Button>
        </Form>

        <p className="text-center mt-3">
          Belum punya akun? <a href="/Signup" style={{ color: "#CB3B0F", textDecoration: "none" }}>Daftar di sini</a>
        </p>
      </Card>
    </Container>
  );
}

export default Login;
