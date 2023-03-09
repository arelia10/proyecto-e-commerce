import React from "react";

const Modal = ({ product, count, onClose, onCountChange, onAddToCart }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="count-container">
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => onCountChange(-1)}
          >
            -
          </button>
          <span className="count">{count}</span>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            onClick={() => onCountChange(1)}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="btn btn-lg btn-primary"
          onClick={() => onAddToCart(product.id, count)}
        >
          Añadir a carrito
        </button>
      </div>
    </div>
  );
};

export default Modal;
