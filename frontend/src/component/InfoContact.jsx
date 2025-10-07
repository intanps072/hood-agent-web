import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaTiktok, FaShopify } from "react-icons/fa";
import "../style/InfoContact.css";

function Footer() {
  return (
    <footer className="footer-custom text-white py-4">
      <Container>
        <Row>

          {/* Sosial Media */}
          <Col md={3} className="mb-3">
            <div className="d-flex gap-3 fs-4">
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

          {/* Metode Pembayaran */}
          <Col md={3} className="mb-3">
            <h6 className="fw-bold">METODE PEMBAYARAN</h6>
            <p className="mb-1">QRIS</p>
            <p className="mb-1">BCA</p>
            <p className="mb-1">BRI</p>
            <p className="mb-1">Mandiri</p>
          </Col>

          {/* Metode Pengiriman */}
          <Col md={3} className="mb-3">
            <h6 className="fw-bold">METODE PENGIRIMAN</h6>
            <p className="mb-1">JNE Express</p>
            <p className="mb-1">J&T Express</p>
          </Col>

          {/* Alamat */}
          <Col md={3} className="mb-3">
            <h6 className="fw-bold">HOOD AGENT</h6>
            <p className="mb-1">
              Jl. Pasundan No.4, Kota Kulon, Kec. Garut <br />
              Kota, Kabupaten Garut, Jawa Barat 44112
            </p>
            <p className="fw-bold mb-1">Layanan Customer Service</p>
            <p className="mb-0">+62 853-5254-6060</p>
          </Col>

          {/* Copyright */}
          <Col className="text-center text-secondary small">
            <a href="/" className="text-secondary text-decoration-none me-2">
              Terms & Conditions
            </a>
            <a href="/" className="text-secondary text-decoration-none me-2">
              Privacy Policy
            </a>
            © 2025 HOOD AGENT. Site by{" "}
            <a href="/" className="text-secondary text-decoration-none">
              Diamond
            </a>
            .
          </Col>
        </Row>
      </Container>
       
    </footer>
    
  );
}

export default Footer;
