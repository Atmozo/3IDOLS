import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ProductDetailsModal = ({ show, onHide, product }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{product.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={product.image} alt={product.name} className="img-fluid" />
        <p>{product.price}</p>
        <p>Product details go here...</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductDetailsModal;
