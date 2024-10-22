import React, { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import RegistrationSuccessModal from "../../components/RegistrationSuccessModal/RegistrationSuccessModal";

function SignUpModal({ isOpen, onClose, onOverlayClick, onSignIn }) {
  // Add onSignIn prop
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const validateForm = () => {
    const isUsernameValid = username.length > 0 && !usernameError;
    const isPasswordValid = password.length >= 6;
    setIsFormValid(isUsernameValid && isPasswordValid && email.includes("@"));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm();
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    if (["existingUser", "takenUsername"].includes(value)) {
      setUsernameError("Username isn't available");
    } else {
      setUsernameError("");
    }
    validateForm();
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("isLoggedIn", "true");

      onSignIn(); // Call this to immediately update state in Main.jsx

      setShowSuccessModal(true);
      setTimeout(() => {
        onClose();
      }, 200);
    }
  };

  useEffect(() => {
    validateForm();
  }, [email, username, password]);

  return (
    <>
      <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        onOverlayClick={onOverlayClick}
        title="Sign up"
        onSubmit={handleSubmit}
      >
        {/* Email Field */}
        <div className="popup__input-container">
          <label htmlFor="email" className="popup__label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            className="popup__input"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        {/* Username Field */}
        <div className="popup__input-container">
          <label htmlFor="username" className="popup__label">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            required
            className="popup__input"
            value={username}
            onChange={handleUsernameChange}
          />
          {usernameError && (
            <span className="popup__error">{usernameError}</span>
          )}
        </div>

        {/* Password Field */}
        <div className="popup__input-container">
          <label htmlFor="password" className="popup__label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password (min 6 characters)"
            required
            className="popup__input"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="popup__submit" disabled={!isFormValid}>
          Sign Up
        </button>

        {/* Success Modal */}
        {showSuccessModal && (
          <RegistrationSuccessModal
            isOpen={showSuccessModal}
            onClose={() => setShowSuccessModal(false)}
          />
        )}
      </PopupWithForm>
    </>
  );
}

export default SignUpModal;
