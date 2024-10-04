import React, { useEffect } from "react";
import closeIcon from "../../assets/close.svg"; // Import the close icon
import "./RegistrationSuccessModal.css"; // Ensure the CSS file is properly imported

function RegistrationSuccessModal({ isOpen, onClose, onSignInClick }) {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscClose);
    }
    return () => {
      window.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);

  // Close modal on overlay click
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("success-popup")) {
      onClose();
    }
  };

  // Handle the Sign In button click - close the modal and open the sign-in modal
  const handleSignInClick = () => {
    onClose(); // Close the registration success modal
    onSignInClick(); // Open the sign-in modal
  };

  return (
    <div
      className={`success-popup ${isOpen ? "success-popup_open" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="success-popup__container">
        <button className="success-popup__close" onClick={onClose}>
          <img
            src={closeIcon}
            alt="Close"
            className="success-popup__close-icon"
          />
        </button>
        <h3 className="success-popup__title">
          Registration successfully
          <br />
          completed!
        </h3>
        {/* Trigger the Sign In modal when clicking the Sign In button */}
        <button className="success-popup__submit" onClick={handleSignInClick}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default RegistrationSuccessModal;
