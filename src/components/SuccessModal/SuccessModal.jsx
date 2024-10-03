import React from "react";
import "./SuccessModal.css"; // Create a CSS file for styling this modal if needed

function SuccessModal({ isOpen, onClose, onSignInClick }) {
  return (
    <div className={`popup ${isOpen ? "popup_open" : ""}`}>
      <div className="popup__container">
        <button className="popup__close" onClick={onClose}>
          &times;
        </button>
        <h2 className="popup__title">Registration successfully completed!</h2>
        <a href="#" className="popup__link" onClick={onSignInClick}>
          Sign in
        </a>
      </div>
    </div>
  );
}

export default SuccessModal;
