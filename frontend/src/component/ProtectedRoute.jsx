import React from "react";
import { Navigate } from "react-router-dom";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import { useAdminAuth } from "../context/AdminAuthContext";

const ProtectedRoute = ({ children }) => {
  const { admin, loading } = useAdminAuth();

  // Jika masih loading, tampilkan spinner bootstrap
  if (loading) {
    return (
      <Container
        fluid
        className="min-vh-100 d-flex justify-content-center align-items-center bg-light"
      >
        <Row>
          <Col className="text-center">
            <Spinner
              animation="border"
              role="status"
              variant="warning"
              style={{
                width: "3rem",
                height: "3rem",
                borderWidth: "0.25rem",
                color: "#CB3B0F",
              }}
              className="mb-3"
            />
            <p className="text-muted mb-0">Loading...</p>
          </Col>
        </Row>
      </Container>
    );
  }

  // Jika belum login, arahkan ke halaman login admin
  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  // Jika sudah login dan tidak loading, tampilkan children
  return children;
};

export default ProtectedRoute;
