import React from "react";
import "./ModalWithForm.css"; // Ensure you have this CSS file

function ModalWithForm({ isOpen, onClose, onSubmit, title, children }) {
  return (
    <div className={`modal ${isOpen ? "modal_open" : ""}`}>
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children} {/* Dynamic content */}
          <button type="submit" className="modal__submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
