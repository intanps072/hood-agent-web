import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { testimonialsData, assets } from "../assets/assets";

const Testimonials = () => {
  return (
    <section
      style={{
        backgroundColor: "#f9fafb",
        padding: "80px 24px",
        overflow: "hidden",
      }}
    >
      <Container>
        {/* Section Title */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="fw-bold mb-3"
            style={{
              fontSize: "2.5rem",
              color: "#1f2937",
            }}
          >
            What Our <span style={{ color: "#CB3B0F" }}>Community Says</span>
          </h2>
          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "600px", fontSize: "1rem" }}
          >
            Hear from our valued community members about their experiences with
            Hood Agent
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <Row className="gy-4 gx-4 justify-content-center">
          {testimonialsData.map((testimonial, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              lg={4}
              className="d-flex align-items-stretch"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="w-100"
              >
                <Card
                  className="h-100 shadow-sm border-0"
                  style={{
                    borderRadius: "1rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Card.Body className="p-4">
                    {/* Stars Rating */}
                    <div className="d-flex gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Image
                          key={i}
                          src={assets.star_icon}
                          alt="star"
                          width={20}
                          height={20}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <Card.Text
                      className="text-muted mb-4 fst-italic"
                      style={{ lineHeight: "1.6" }}
                    >
                      “{testimonial.text}”
                    </Card.Text>

                    {/* Profile */}
                    <div
                      className="d-flex align-items-center gap-3 pt-3 border-top"
                      style={{ borderColor: "#f3f4f6" }}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.alt}
                        roundedCircle
                        width={56}
                        height={56}
                        className="object-fit-cover"
                        style={{
                          border: "2px solid #CB3B0F",
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.border = "4px solid #CB3B0F")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.border = "2px solid #CB3B0F")
                        }
                      />
                      <div>
                        <h5
                          className="fw-bold mb-0"
                          style={{
                            color: "#1f2937",
                            transition: "color 0.3s ease",
                          }}
                          onMouseOver={(e) =>
                            (e.target.style.color = "#CB3B0F")
                          }
                          onMouseOut={(e) =>
                            (e.target.style.color = "#1f2937")
                          }
                        >
                          {testimonial.name}
                        </h5>
                        <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
