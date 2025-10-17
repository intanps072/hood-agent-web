import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProductList() {
  const products = [
    {
      id: 1,
      image: "./Product/TS.jpg",
      title: "T-Shirt - 5AILEND2A MAHE5A 6ALA 1ST ANNIVERSARY",
      price: "219,000",
    },
    {
      id: 2,
      image: "./Product/PS.jpg",
      title: "Poloshirt - 5AILEND2A MAHE5A 6ALA 1ST ANNIVERSARY",
      price: "259,000",
    },
    {
      id: 3,
      image: "./Product/WS.jpg",
      title: "Workshirt - 5AILEND2A MAHE5A 6ALA 1ST ANNIVERSARY",
      price: "339,000",
    },
    {
      id: 4,
      image: "./Product/JS.jpg",
      title: "Jersey - 5AILEND2A MAHE5A 6ALA 1ST ANNIVERSARY",
      price: "349,000",
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="fw-bold display-5 mb-3 text-center">
          Product <span style={{ color: "#CB3B0F" }}>Ready</span>
      </h2>
      <p className="text-center mb-4">
        Explore our range of ready products available for immediate purchase
      </p>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3} sm={6} xs={12} className="mb-4">
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
            />
          </Col>
        ))}
      </Row>

      {/* CTA Section */}
            <motion.div
              className="text-center mt-5 text-white rounded-4 p-5 shadow"
              style={{
                background: "linear-gradient(90deg, #CB3B0F, #FFAE00)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="fw-bold mb-3 display-6">
                Want to See More Event Product?
              </h3>
              <p className="mb-4" style={{ opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
                Browse our complete catalog of products and exclusive collections
              </p>
              <Link
                to="/Event"
                className="btn btn-light text-danger fw-semibold px-4 py-2 rounded-3 shadow-sm"
                style={{
                  backgroundColor: "white",
                  transition: "0.3s",
                }}
              >
                View All Event Product
              </Link>
            </motion.div>        

    </Container>
  );
}

export default ProductList;
