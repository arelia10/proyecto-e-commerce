import React, { useContext, useState } from "react";
import { DataContext } from "../context/Datacontext";
import { Modal, Button } from "react-bootstrap";
import "./Products.css";

const Products = () => {
  const { products} = useContext(DataContext);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
    setCount(0); // reset count when closing modal
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div className="product-card-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img
            className="card-img-top"
            src={product.thumbnail}
            alt={product.title}
          />
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p className="card-text">{product.description}</p>
          </div>
          <div className="card-footer">
            <span className="card-price">$ {product.price}</span>
            <button
              type="button"
              className="btn btn-lg btn-outline-secondary card-btn"
              onClick={() => handleOpenModal(product)}
            >
              <i className="bi bi-cart-fill" id="cart-icon"></i>
            </button>
          </div>
        </div>
      ))}
      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              className="modal-img"
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
            />
            <p>{selectedProduct.description}</p>
            <p>
              <strong>Precio:</strong> $ {selectedProduct.price}
            </p>
            <p>
              <strong>Descuento:</strong> {selectedProduct.discountPercentage}%
            </p>
            <p>
              <strong>Rating:</strong> {selectedProduct.rating}/5
            </p>
            <p>
              <strong>Stock:</strong> {selectedProduct.stock}
            </p>
            <div className="modal-counter btn-group">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="btn btn-outline-secondary">{count}</span>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleCloseModal}>
              Añadir a carrito
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Products;