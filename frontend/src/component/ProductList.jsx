import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

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
      <h3 className="text-center mb-4">Product Ready</h3>
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
    </Container>
  );
}

export default ProductList;
