import React, { useState, useEffect } from "react";

import axios from "axios"
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Form,
  Spinner,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const API_URL = "http://localhost:5000";

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/products`);
        setProductsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const categories = ["All", "Apparel", "Accessories", "Stationery", "Lifestyle"];

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatPrice = (price) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);

  return (
    <div className="w-100 overflow-hidden">

      {/* HERO SECTION */}
      <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: "50vh",
          background: "linear-gradient(90deg, #CB3B0F 0%, #FFAE00 100%)",
        }}
      >
        <Container className="py-5">
          <h1 className="display-4 fw-bold text-white mb-3">
            Hood Agent Products
          </h1>
          <p className="fs-5 text-white-50 mb-4">
            Exclusive merchandise and collectibles for the Hood Agent community
          </p>

          {/* Search Bar */}
          <Container style={{ maxWidth: "600px" }}>
            <div className="position-relative">
              <Form.Control
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-pill px-4 py-3 shadow-lg border-0 fs-5"
              />
              <span
                className="position-absolute top-50 end-0 translate-middle-y me-4"
                style={{ fontSize: "1.5rem" }}
              >
                🔍
              </span>
            </div>
          </Container>
        </Container>
      </div>

      {/* PRODUCTS SECTION */}
      <Container className="py-5">
        {/* Category Filter */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={
                selectedCategory === category ? "danger" : "outline-secondary"
              }
              className={`px-4 py-2 rounded-pill fw-semibold shadow-sm ${
                selectedCategory === category ? "scale-105" : ""
              }`}
              style={{
                backgroundColor:
                  selectedCategory === category ? "#CB3B0F" : "transparent",
                borderColor:
                  selectedCategory === category ? "#CB3B0F" : "#dee2e6",
                color: selectedCategory === category ? "white" : "#6c757d",
                transition: "all 0.3s ease",
              }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-5">
            <Spinner
              animation="border"
              variant="danger"
              className="mb-3"
              style={{ width: "3rem", height: "3rem" }}
            />
            <p className="text-muted">Loading products...</p>
          </div>
        ) : (
          <>
            {/* Results Count */}
            <div className="text-center mb-4">
              <p className="text-secondary fs-5">
                Showing{" "}
                <span className="fw-bold text-danger">
                  {filteredProducts.length}
                </span>{" "}
                product{filteredProducts.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Products Grid */}
            <Row className="g-4">
              {filteredProducts.map((product) => (
                <Col key={product.id} xs={12} md={6} lg={3}>
                  <Card
                    className="h-100 border-0 shadow-sm position-relative product-card"
                    style={{
                      transition: "all 0.3s ease",
                      borderRadius: "1rem",
                    }}
                  >
                    <div className="position-relative overflow-hidden">
                      <Card.Img
                        variant="top"
                        src={product.image}
                        alt={product.name}
                        style={{
                          height: "250px",
                          objectFit: "cover",
                          transition: "transform 0.5s ease",
                        }}
                        className="product-image"
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
                        <Card.Title className="fw-bold fs-5 text-dark">
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
                        <small className="text-muted">
                          Stock: <strong>{product.stock}</strong>
                        </small>
                      </div>

                      <Button
                        className="w-100 fw-semibold py-2"
                        style={{
                          backgroundColor: "#CB3B0F",
                          border: "none",
                          transition: "0.3s",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#FFAE00")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "#CB3B0F")
                        }
                      >
                        🛒 Add to Cart
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
            <div
              className="text-center mt-5 p-5 rounded-4 shadow-lg text-white"
              style={{
                background:
                  "linear-gradient(90deg, #CB3B0F 0%, #FFAE00 100%)",
              }}
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
          </>
        )}
      </Container>

     
    </div>
  );
};

export default ProductsPage;
