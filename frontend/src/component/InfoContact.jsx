import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaTiktok, FaShopify } from "react-icons/fa";
import Logo from "../assets/LOGO.png";
import "../style/InfoContact.css";

function Footer() {
  return (
    <footer className="footer-custom text-white py-5">
      <Container>

        <Row className="mb-4 align-items-start">
        {/* Sosial Media */}
        <Col md={6} className="mb-4 text-center text-md-start">
          <img
            src={Logo}
            alt="Logo"
            height="45"
            className="mb-3"
            style={{ width: "auto" }}
          />
          <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-4">
            <a
              href="https://wa.me/6285352546060"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/hoodagent.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@hoodagent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaTiktok />
            </a>
            <a
              href="https://hoodagent.myshopify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaShopify />
            </a>
          </div>
        </Col>

        {/* Alamat */}
        <Col md={6} className="mb-4 text-center text-md-end">
          <div className="d-inline-block text-start">
            <h5 className="fw-bold mb-2">Store Address</h5>
            <p className="mb-1">
              Jl. Pasundan No.4, Kota Kulon, Kec. Garut Kota, Kabupaten Garut,
              Jawa Barat 44112
            </p>
            <p className="mb-0">Open: 08.00 - 17.00 WIB</p>
            <h5 className="fw-bold mb-1 mt-2">Customer Service</h5>
            <p className="mb-0">+62 853-5254-6060</p>
          </div>
        </Col>
      </Row>

        {/* Newsletter Section */}
        <Row className="border-top border-secondary pt-4 mb-4">
          <Col md={{ span: 6, offset: 3 }} className="text-center">
            <h5 className="fw-bold mb-3">Stay Updated</h5>
            <p className="text-secondary mb-4">
              Subscribe to our newsletter for the latest updates
            </p>
            <Form className="d-flex justify-content-center gap-2">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="bg-dark text-white border-secondary rounded-3"
                style={{ maxWidth: "300px" }}
              />
              <Button
                variant="warning"
                className="fw-semibold text-dark px-4 rounded-3"
              >
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row className="border-top border-secondary pt-3 align-items-center text-secondary small">
          {/* Kiri */}
          <Col md={6} className="text-start mb-2 mb-md-0">
            &copy; 2025 Hood Agent. All rights reserved.
          </Col>

          {/* Kanan */}
          <Col md={6} className="text-end">
            <div className="d-flex justify-content-end gap-3">
              <Button
                variant="link"
                className="text-secondary text-decoration-none p-0"
                onClick={() => alert('Privacy Policy page coming soon')}
              >
                Privacy Policy
              </Button>
              <Button
                variant="link"
                className="text-secondary text-decoration-none p-0"
                onClick={() => alert('Terms of Service page coming soon')}
              >
                Terms of Service
              </Button>
              <Button
                variant="link"
                className="text-secondary text-decoration-none p-0"
                onClick={() => alert('Cookie Policy page coming soon')}
              >
                Cookie Policy
              </Button>
            </div>
          </Col>
        </Row>

      </Container>
    </footer>
  );
}

export default Footer;
