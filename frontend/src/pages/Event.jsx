import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  Spinner,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import GambarEvent from "../assets/GambarEvent.png";

const API_URL = "http://localhost:5000";

const Events = () => {
  const [eventsData, setEventsData] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch events dari json-server
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${API_URL}/events`);
        const data = response.data;
        setEventsData(data);
        setFilteredEvents(data);

        // Ambil kategori unik + "All"
        const uniqueCategories = ["All", ...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // Filter event berdasarkan kategori
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredEvents(eventsData);
    } else {
      const filtered = eventsData.filter(
        (event) => event.category === selectedCategory
      );
      setFilteredEvents(filtered);
    }
  }, [selectedCategory, eventsData]);

  const getCategoryVariant = (category) => {
    const variants = {
      Technology: "primary",
      Networking: "success",
      Workshop: "secondary",
      Startup: "warning",
    };
    return variants[category] || "dark";
  };

  return (
    <section id="event">
      {/* Header Image */}
      <img
        src={GambarEvent}
        alt="Gambar Event"
        style={{
          width: "100vw",
          height: "90vh",
          objectFit: "cover",
          display: "block",
          margin: 0,
          padding: 0,
        }}
      />

      <Container className="py-5">
        {/* Header Section */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fw-bold display-5 text-dark mb-3">
            Upcoming <span style={{ color: "#CB3B0F" }}>Events</span>
          </h2>
          <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "700px" }}>
            Don't miss out on our exciting events and networking opportunities
          </p>
        </motion.div>

        {/* Category Filter */}
        <Row className="justify-content-center mb-4">
          <Col xs="auto">
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "danger" : "light"}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 fw-semibold rounded-pill border-0 shadow-sm ${
                    selectedCategory === category
                      ? "text-white scale-105"
                      : "text-secondary"
                  }`}
                  style={{
                    backgroundColor:
                      selectedCategory === category ? "#CB3B0F" : "#f8f9fa",
                    transition: "all 0.3s ease",
                  }}
                >
                  {category}
                </Button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-5">
            <Spinner
              animation="border"
              variant="danger"
              role="status"
              style={{ width: "3rem", height: "3rem", borderWidth: "3px" }}
              className="mb-3"
            />
            <p className="text-muted">Loading events...</p>
          </div>
        ) : (
          <>
            {/* Results Count */}
            <div className="text-center mb-4">
              <p className="text-secondary fs-5">
                Showing{" "}
                <span style={{ color: "#CB3B0F", fontWeight: "bold" }}>
                  {filteredEvents.length}
                </span>{" "}
                event
                {filteredEvents.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Event Cards */}
            <Row className="g-4">
              {filteredEvents.map((event, index) => (
                <Col md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="shadow-lg border-0 rounded-4 h-100 transition-all">
                      <Card.Body className="p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <Badge
                            bg={getCategoryVariant(event.category)}
                            className="px-3 py-2 text-uppercase fw-semibold"
                          >
                            {event.category}
                          </Badge>
                          <Badge
                            bg="light"
                            text="danger"
                            className="fw-semibold text-uppercase"
                          >
                            {event.status}
                          </Badge>
                        </div>

                        <Card.Title className="fw-bold fs-4 text-dark mb-3">
                          {event.title}
                        </Card.Title>

                        <Card.Text
                          className="text-muted mb-4"
                          style={{ lineHeight: 1.6 }}
                        >
                          {event.description}
                        </Card.Text>

                        <div className="mb-4">
                          <div className="d-flex align-items-center mb-2 text-muted">
                            <span className="me-2 fs-5">📅</span>
                            <span>{event.date}</span>
                          </div>
                          <div className="d-flex align-items-center mb-2 text-muted">
                            <span className="me-2 fs-5">🕐</span>
                            <span>{event.time}</span>
                          </div>
                          <div className="d-flex align-items-center text-muted">
                            <span className="me-2 fs-5">📍</span>
                            <span>{event.location}</span>
                          </div>
                        </div>

                        <Button
                          variant="warning"
                          className="w-100 text-white fw-semibold py-2"
                          style={{ backgroundColor: "#CB3B0F", border: "none" }}
                          onMouseOver={(e) =>
                            (e.target.style.backgroundColor = "#FFAE00")
                          }
                          onMouseOut={(e) =>
                            (e.target.style.backgroundColor = "#CB3B0F")
                          }
                        >
                          Register Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>

            {/* CTA Section */}
            <motion.div
              className="text-center mt-5 p-5 rounded-4 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: "linear-gradient(to right, #CB3B0F, #FFAE00)",
              }}
            >
              <h3 className="fw-bold text-white mb-3" style={{ fontSize: "2rem" }}>
                Want to Host an Event?
              </h3>
              <p
                className="text-white-50 mb-4 mx-auto"
                style={{ maxWidth: "600px", fontSize: "1.1rem" }}
              >
                Partner with us to organize amazing events for the community.
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Button
                  variant="light"
                  className="fw-semibold px-4 py-3 shadow-sm"
                  style={{
                    color: "#CB3B0F",
                    border: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#f8f9fa")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "white")
                  }
                >
                  Contact Us
                </Button>

                <Button
                  variant="outline-light"
                  className="fw-semibold px-4 py-3"
                  style={{
                    borderWidth: "2px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "#CB3B0F";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "white";
                  }}
                  href="/"
                >
                  Back to Home
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </Container>
    </section>
  );
};

export default Events;
