import React from "react";
import { Card } from "react-bootstrap";
import "../style/ProductCard.css"; 

function ProductCard({ image, title, price }) {
  return (
    <Card className="product-card">
      <div className="image-container">
        <img 
        src={image} 
        alt={title} 
        className="product-image" />
        <span className="badge-free">Limited</span>
      </div>
      <Card.Body>
        <Card.Title className="product-title">{title}</Card.Title>
        <Card.Text className="product-price">Rp {price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
