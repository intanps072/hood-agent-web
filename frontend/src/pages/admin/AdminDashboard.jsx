import React, { useState } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useAdminAuth } from "../../context/AdminAuthContext";
import {
  Container,
  Button,
  ListGroup,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminDashboard = () => {
  const { admin, logout } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const menuItems = [
    { path: "/admin/dashboard/products", icon: "🛍️", label: "Products" },
    { path: "/admin/dashboard/projects", icon: "📁", label: "Catalog (Projects)" },
    { path: "/admin/dashboard/events", icon: "📅", label: "Events" },
    { path: "/admin/dashboard/divisi", icon: "👥", label: "Divisi" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <Container fluid className="min-vh-100 bg-light d-flex p-0">
      {/* Sidebar */}
      <div
        className={`d-flex flex-column text-white transition-all ${
          isSidebarOpen ? "p-0" : "p-0"
        }`}
        style={{
          width: isSidebarOpen ? "260px" : "80px",
          backgroundColor: "#1f2937",
          transition: "width 0.3s ease",
        }}
      >
        {/* Header */}
        <div
          className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom border-secondary"
          style={{ height: "70px" }}
        >
          {isSidebarOpen && (
            <h5 className="fw-bold mb-0" style={{ color: "#FFAE00" }}>
              Admin Panel
            </h5>
          )}
          <Button
            variant="link"
            className="text-secondary p-0 text-decoration-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{ fontSize: "1.2rem" }}
          >
            {isSidebarOpen ? "←" : "→"}
          </Button>
        </div>

        {/* Admin Info */}
        <div className="px-4 py-3 border-bottom border-secondary">
          <div className="d-flex align-items-center">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center me-3"
              style={{
                width: "40px",
                height: "40px",
                backgroundColor: "#CB3B0F",
                fontWeight: "bold",
              }}
            >
              {admin?.name?.charAt(0).toUpperCase()}
            </div>
            {isSidebarOpen && (
              <div>
                <div className="fw-semibold small">{admin?.name}</div>
                <div className="text-muted" style={{ fontSize: "0.8rem" }}>
                  {admin?.email}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-grow-1 px-2 py-3">
          <ListGroup variant="flush">
            {menuItems.map((item) => (
              <ListGroup.Item
                key={item.path}
                as={Link}
                to={item.path}
                className={`d-flex align-items-center rounded-3 mb-2 text-decoration-none ${
                  isActive(item.path)
                    ? "bg-danger text-white"
                    : "bg-transparent text-secondary"
                }`}
                style={{
                  padding: "10px 16px",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  if (!isActive(item.path))
                    e.currentTarget.style.backgroundColor = "#2d3748";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  if (!isActive(item.path))
                    e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = isActive(item.path)
                    ? "#fff"
                    : "#6c757d";
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                {isSidebarOpen && (
                  <span className="ms-3 fw-medium">{item.label}</span>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        {/* Footer (Logout & Home) */}
        <div className="px-3 py-3 border-top border-secondary">
          <Link
            to="/"
            className="d-flex align-items-center rounded-3 mb-2 text-secondary text-decoration-none"
            style={{ padding: "10px 16px" }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#2d3748";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#6c757d";
            }}
          >
            <span style={{ fontSize: "1.3rem" }}>🏠</span>
            {isSidebarOpen && (
              <span className="ms-3 fw-medium">Homepage</span>
            )}
          </Link>

          <Button
            variant="link"
            onClick={handleLogout}
            className="d-flex align-items-center w-100 rounded-3 text-secondary text-decoration-none"
            style={{ padding: "10px 16px" }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#dc3545";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#6c757d";
            }}
          >
            <span style={{ fontSize: "1.3rem" }}>🚪</span>
            {isSidebarOpen && (
              <span className="ms-3 fw-medium">Logout</span>
            )}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Top Bar */}
        <Card className="rounded-0 shadow-sm border-bottom">
          <Card.Body className="d-flex justify-content-between align-items-center px-4 py-3">
            <h4 className="fw-bold mb-0 text-dark">Dashboard Management</h4>
            <div className="text-muted small">
              Welcome, <span className="fw-semibold">{admin?.name}</span>
            </div>
          </Card.Body>
        </Card>

        {/* Content Area */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default AdminDashboard;
