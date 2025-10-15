import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaWhatsapp } from "react-icons/fa";
import GambarCatalog from "../assets/GambarCatalog.png";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const productsData = [
    {
      id: 1,
      name: "Hood Agent T-Shirt",
      category: "Apparel",
      price: 150000,
      image: "/api/placeholder/400/400",
    },
    {
      id: 2,
      name: "Hoodie Premium",
      category: "Apparel",
      price: 350000,
      image: "/api/placeholder/400/400",
    },
    {
      id: 3,
      name: "Tote Bag Canvas",
      category: "Accessories",
      price: 125000,
      image: "/api/placeholder/400/400",
    },
    {
      id: 4,
      name: "Sticker Pack",
      category: "Accessories",
      price: 25000,
      image: "/api/placeholder/400/400",
    },
    {
      id: 5,
      name: "Cap Snapback",
      category: "Accessories",
      price: 175000,
      image: "/api/placeholder/400/400",
    },
    {
      id: 6,
      name: "Notebook A5",
      category: "Stationery",
      price: 75000,
      image: "/api/placeholder/400/400",
    },
    {
      id: 7,
      name: "Water Bottle",
      category: "Lifestyle",
      price: 95000,
      image: "/api/placeholder/400/400",
    },
    {
      id: 8,
      name: "Enamel Pin Set",
      category: "Accessories",
      price: 50000,
      image: "/api/placeholder/400/400",
    },
  ];

  const categories = ["All", "Apparel", "Accessories", "Stationery", "Lifestyle"];

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  const formatPrice = (price) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  

  return (
    
    <section id="products"> 
      {/* Gambar full layar */}
        <img
          src={GambarCatalog}
          alt="Gambar"
          style={{
          width: "100vw",     // penuh lebar layar
          height: "90vh",     // tinggi bisa diatur
          objectFit: "cover", // isi penuh tanpa distorsi
          display: "block",   // hilangkan jarak bawaan
          margin: 0,
          padding: 0,
          }}
          />
      <div className="py-5"> 
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-dark">
            Our <span style={{ color: "#CB3B0F" }}>Products</span>
          </h2>
          <p className="text-muted">
            Browse our exclusive collection of Hood Agent merchandise
          </p>
        </div>

        {/* Category Filter */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={
                selectedCategory === category ? "warning" : "outline-secondary"
              }
              className="rounded-pill px-4 fw-semibold"
              onClick={() => setSelectedCategory(category)}
              style={{
                minWidth: "120px",
                transition: "all 0.2s ease-in-out",
              }}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <Row className="g-4">
          {filteredProducts.map((product) => (
            <Col key={product.id} xs={12} md={6} lg={3}>
              <Card className="h-100 shadow-sm border-0">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.name}
                    className="object-fit-cover"
                    style={{ height: "250px" }}
                  />
                  {product.stock < 20 && (
                    <Badge
                      bg="danger"
                      className="position-absolute top-0 end-0 m-2 px-3 py-2"
                    >
                      Limited Stock
                    </Badge>
                  )}
                </div>

                <Card.Body>
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <Card.Title className="fw-bold text-dark fs-5">
                      {product.name}
                    </Card.Title>

                    <Badge bg="warning" text="dark">
                      {product.category}
                    </Badge>
                  </div>

                  <Card.Text className="text-muted small">
                    {product.description}
                  </Card.Text>

                  <div className="d-flex justify-content-between align-items-center my-3">
                    <span className="fw-bold fs-5 text-danger">
                      {formatPrice(product.price)}
                    </span>
                  </div>

                  <Button
                    variant="danger"
                    className="w-100 fw-semibold"
                    style={{
                      backgroundColor: "#CB3B0F",
                      border: "none",
                    }}
                  >
                    <FaWhatsapp/> Order via WhatsApp
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-5">
                <p className="fs-1 mb-3 text-muted">😕</p>
                <p className="fs-5 text-secondary">No products found</p>
                <p className="text-muted">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}

        {/* CTA SECTION */}
        <div className="text-center mt-5 p-5 rounded-4 shadow-lg text-white"
            style={{ background: "linear-gradient(90deg, #CB3B0F 0%, #FFAE00 100%)",}}
                    >
              <h3 className="fw-bold fs-2 mb-3">Need Bulk Orders?</h3>
              <p className="text-light mb-4">
                Contact us for special pricing on bulk orders and custom
                merchandise
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Button
                variant="light"
                className="fw-semibold px-4 py-3"
                style={{ color: "#CB3B0F" }}
                >
                  Contact Sales Team
                </Button>

                <Button
                variant="outline-light"
                className="fw-semibold px-4 py-3"
                href="/"
                >
                  Back to Home
                </Button>
              </div>
          </div>
      </Container>
      </div>
    </section>
  );
};

export default Products;
