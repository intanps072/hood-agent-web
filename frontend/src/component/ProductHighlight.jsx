import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Container, Button, Spinner, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import axios from "axios";

const API_URL = "http://localhost:5000";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [projectsData, setProjectsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/projects`);
        setProjectsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    setIsAutoPlaying(true);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + projectsData.length) % projectsData.length
    );
    setIsAutoPlaying(true);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(true);
  };

  // Auto play
  useEffect(() => {
    if (!isAutoPlaying || projectsData.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, projectsData.length]);

  // Responsive card count
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <div className="d-flex flex-column align-items-center py-5">
          <Spinner
            animation="border"
            variant="danger"
            style={{ width: "3rem", height: "3rem" }}
          />
          <p className="text-secondary mt-3 fs-5">Loading projects...</p>
        </div>
      </Container>
    );
  }

  return (
    <section id="catalog" style={{ overflow: "hidden" }}>
      <Container className="py-5">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="fw-bold display-5 mb-3">
            Our <span style={{ color: "#CB3B0F" }}>Catalog</span>
          </h2>
          <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: "600px" }}>
            Explore our featured projects and discover amazing opportunities
          </p>
        </motion.div>

        {projectsData.length > 0 ? (
          <div className="position-relative">
            {/* Navigation Buttons */}
            <Button
              variant="light"
              onClick={prevProject}
              className="position-absolute top-50 start-0 translate-middle-y shadow rounded-circle p-3 border-0"
              style={{
                transform: "translate(-40%, -50%)",
                zIndex: 10,
                transition: "0.3s",
              }}
              aria-label="Previous project"
            >
              <img
                src={assets.left_arrow}
                alt="Previous"
                width="24"
                height="24"
              />
            </Button>

            <Button
              variant="light"
              onClick={nextProject}
              className="position-absolute top-50 end-0 translate-middle-y shadow rounded-circle p-3 border-0"
              style={{
                transform: "translate(40%, -50%)",
                zIndex: 10,
                transition: "0.3s",
              }}
              aria-label="Next project"
            >
              <img
                src={assets.right_arrow}
                alt="Next"
                width="24"
                height="24"
              />
            </Button>

            {/* Slider */}
            <div className="overflow-hidden">
              <div
                className="d-flex gap-4"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
                  transition: "transform 0.5s ease-in-out",
                }}
              >
                {projectsData.map((project, index) => (
                  <motion.div
                    key={project.id || index}
                    className="flex-shrink-0"
                    style={{
                      width:
                        cardsToShow === 4
                          ? "25%"
                          : cardsToShow === 2
                          ? "50%"
                          : "100%",
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Card
                      className="border-0 shadow-sm rounded-4 overflow-hidden"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="position-relative" style={{ height: "260px" }}>
                        <Card.Img
                          src={project.image}
                          alt={project.title}
                          className="w-100 h-100"
                          style={{
                            objectFit: "cover",
                            transition: "transform 0.5s",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.transform = "scale(1.1)")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.transform = "scale(1)")
                          }
                        />
                        <div
                          className="position-absolute top-0 start-0 w-100 h-100"
                          style={{
                            background: "rgba(0,0,0,0)",
                            transition: "0.3s",
                          }}
                        ></div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Indicators */}
            <div className="d-flex justify-content-center mt-4 gap-2">
              {projectsData.map((_, index) => (
                <Button
                  key={index}
                  onClick={() => goToSlide(index)}
                  variant="link"
                  style={{
                    width: index === currentIndex ? "32px" : "10px",
                    height: "10px",
                    borderRadius: "5px",
                    backgroundColor:
                      index === currentIndex ? "#CB3B0F" : "#ccc",
                    transition: "all 0.3s",
                    padding: 0,
                  }}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

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
                Want to See More Projects?
              </h3>
              <p className="mb-4" style={{ opacity: 0.9, maxWidth: "600px", margin: "0 auto" }}>
                Browse our complete catalog of projects and exclusive collections
              </p>
              <Link
                to="/projects"
                className="btn btn-light text-danger fw-semibold px-4 py-2 rounded-3 shadow-sm"
                style={{
                  backgroundColor: "white",
                  transition: "0.3s",
                }}
              >
                View All Projects
              </Link>
            </motion.div>
          </div>
        ) : (
          <div className="text-center py-5">
            <p className="text-secondary fs-5">No projects available</p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;
