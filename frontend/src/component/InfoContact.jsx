import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp, FaInstagram, FaTiktok, FaShopify } from "react-icons/fa";
import Logo from "../assets/LOGO.png";
import QRIS from "../assets/MBayar/QRIS.jpg";
import BCA from "../assets/MBayar/BCA.jpg";
import BRI from "../assets/MBayar/BRI.jpg";
import BNI from "../assets/MBayar/BNI.jpg";
import MDR from "../assets/MBayar/MDR.jpg";
import JNE from "../assets/MKirim/JNE.jpg";
import JNT from "../assets/MKirim/JNT.jpg";
import SPX from "../assets/MKirim/SPX.jpg";
import "../style/InfoContact.css";


function Footer() {
  return (
    <footer className="footer-custom text-white py-4">
      <Container>
        <Row>

          {/* Sosial Media */}
          <Col md={3} className="mb-3">
           <img src = {Logo} alt="Logo" width="auto" height="45" className="mb-2"/>
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
          {/* <Col md={3} className="mb-3">
          <div className="footer-content">
            <h6 className="footer-title">METODE PEMBAYARAN</h6>
              <div className="payment-methods">
                <img src={QRIS} alt="QRIS" />
                <img src={BRI} alt="BRI" />
                <img src={BNI} alt="BNI" />
                <img src={BCA} alt="BCA" />
                <img src={MDR} alt="MDR" />
              </div>
          </div>
          </Col>  */}

          <Col md={3} className="mb-3">
            <h6 className="fw-bold mb-3">METODE PEMBAYARAN</h6>
                <img src={QRIS} alt="QRIS" style={{ width: '60px', marginRight: '10px', marginBottom :'10px' }} />
                <img src={BRI} alt="BRI" style={{ width: '60px', marginRight: '10px', marginBottom :'10px' }} />
                <img src={BNI} alt="BNI" style={{ width: '60px', marginRight: '10px', marginBottom :'10px' }}/>
                <img src={BCA} alt="BCA" style={{ width: '60px', marginRight: '10px', marginBottom :'10px'}}/>
                <img src={MDR} alt="MDR" style={{ width: '60px' }}/>
          </Col>

          {/* Metode Pengiriman */}
          <Col md={3} className="mb-3">
            <h6 className="fw-bold mb-3" >METODE PENGIRIMAN</h6>
            <img src = {JNE} alt="JNE" style={{ width: '60px', marginRight: '10px' }} />
            <img src = {JNT} alt="JNT" style={{ width: '60px', marginRight: '10px' }} />
            <img src = {SPX} alt="SPX" style={{ width: '60px' }} />
          </Col>

          {/* Alamat */}
          <Col md={3} className="mb-3">
            <h6 className="fw-bold mb-2">HOOD AGENT</h6>
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
