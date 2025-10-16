import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
  Spinner,
  Alert,
} from "react-bootstrap";

const API_URL = "http://localhost:5000";

const ProjectsManagement = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [imageError, setImageError] = useState("");
  const [imageFileName, setImageFileName] = useState("");
  const [formData, setFormData] = useState({ image: "" });

  // Fetch projects
  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_URL}/projects`);
      setProjects(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageError("");
    if (!file) return;

    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!validTypes.includes(file.type)) {
      setImageError("Please upload a valid image file (JPG, PNG, or WebP)");
      return;
    }

    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setImageError("Image size must be less than 5MB");
      return;
    }

    setImageLoading(true);
    setImageFileName(file.name);
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
      setImageLoading(false);
    };
    reader.onerror = () => {
      setImageError("Failed to read the file. Please try again.");
      setImageLoading(false);
    };
    reader.readAsDataURL(file);
  };

  // Remove image
  const removeImage = () => {
    setFormData({ ...formData, image: "" });
    setImageFileName("");
    setImageError("");
    const fileInput = document.getElementById("project-image-input");
    if (fileInput) fileInput.value = "";
  };

  // Open/close modal
  const openModal = (project = null) => {
    if (project) {
      setEditingProject(project);
      setFormData(project);
      setImageFileName(project.image ? "Current image" : "");
    } else {
      setEditingProject(null);
      setFormData({ image: "" });
      setImageFileName("");
    }
    setImageError("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
    setFormData({ image: "" });
    setImageFileName("");
    setImageError("");
    setImageLoading(false);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) {
      setImageError("Please upload an image");
      return;
    }

    try {
      if (editingProject) {
        await axios.put(`${API_URL}/projects/${editingProject.id}`, formData);
      } else {
        await axios.post(`${API_URL}/projects`, formData);
      }
      fetchProjects();
      closeModal();
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  // Delete
  const handleDelete = async (id) => {
    if (window.confirm("Yakin ingin menghapus project ini?")) {
      try {
        await axios.delete(`${API_URL}/projects/${id}`);
        fetchProjects();
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="danger" /> <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark">Catalog Management</h2>
        <Button
          variant="danger"
          className="px-4 py-2 fw-semibold"
          onClick={() => openModal()}
        >
          + Add Project
        </Button>
      </div>

      <Row className="g-4">
        {projects.map((project) => (
          <Col md={6} lg={4} key={project.id}>
            <Card className="shadow-sm border-0">
              <Card.Img
                variant="top"
                src={project.image}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body>
                <div className="d-flex gap-2">
                  <Button
                    variant="primary"
                    className="flex-fill"
                    onClick={() => openModal(project)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="flex-fill"
                    onClick={() => handleDelete(project.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal
        show={isModalOpen}
        onHide={closeModal}
        centered
        size="lg"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {editingProject ? "Edit Project" : "Add New Project"}
          </Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">Project Image *</Form.Label>

              {!formData.image ? (
                <div className="p-4 border border-2 border-secondary rounded text-center">
                  <Form.Control
                    id="project-image-input"
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={handleImageUpload}
                    className="mb-2"
                  />
                  <div className="text-muted small">
                    JPG, PNG, or WebP (max 5MB)
                  </div>
                </div>
              ) : (
                <div className="position-relative">
                  <div className="border rounded overflow-hidden">
                    {imageLoading ? (
                      <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: "250px" }}>
                        <Spinner animation="border" variant="danger" />
                      </div>
                    ) : (
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-100"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                    )}
                  </div>

                  <div className="mt-3 d-flex justify-content-between align-items-center bg-light p-2 rounded">
                    <span className="text-success small text-truncate">
                      ✓ {imageFileName}
                    </span>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={removeImage}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              )}

              {imageError && (
                <Alert variant="danger" className="mt-2 py-2">
                  ⚠️ {imageError}
                </Alert>
              )}

              {imageLoading && (
                <div className="text-muted small mt-2">
                  ⏳ Processing image...
                </div>
              )}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              type="submit"
              variant="danger"
              disabled={imageLoading}
              className="fw-semibold"
            >
              {editingProject ? "Update Project" : "Add Project"}
            </Button>
            <Button variant="secondary" onClick={closeModal}>
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default ProjectsManagement;
