import React from "react";
import closeIcon from "../../assets/close.svg"; // Ensure close icon is imported
import "./PopupWithForm.css";

function PopupWithForm({
  isOpen,
  onClose,
  onOverlayClick,
  title,
  children,
  onSubmit,
}) {
  return (
    <div
      className={`popup ${isOpen ? "popup_open" : ""}`}
      onClick={onOverlayClick}
    >
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button className="popup__close" onClick={onClose}>
          <img
            src={closeIcon}
            alt="Close popup"
            className="popup__close-icon"
          />
        </button>
        <h3 className="popup__title">{title}</h3>
        <form className="popup__form" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
