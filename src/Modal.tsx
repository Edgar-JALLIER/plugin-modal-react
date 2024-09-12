import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  children?: React.ReactNode;
}

const Modal = ({ isOpen, onClose, onConfirm, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <p>{title}</p>
          <button className="modal-button-close-X" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">{children}</div>
        <div className="modal-buttons">
          <button className="modal-button modal-button-close" onClick={onClose}>
            Cancel
          </button>
          <button
            className="modal-button modal-button-confirm"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Modal;
