import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaTiktok, FaShopify, FaGift } from "react-icons/fa";
import "./InfoContact.css";

function Footer() {
  return (
    <footer className="footer-custom text-white py-4">
      <Container>
        <Row>
          {/* Sosial Media */}
          <Col md={3} className="mb-3">
            <div className="d-flex gap-3 fs-4">
              <FaWhatsapp />
              <FaInstagram />
              <FaTiktok />
              <FaShopify />
              <FaGift />
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
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
