import React, { useState, useEffect, useId } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import RegistrationSuccessModal from "../../components/RegistrationSuccessModal/RegistrationSuccessModal";

function SignUpModal({ isOpen, onClose, onOverlayClick, onSignIn }) {
  // Generate unique IDs for each instance
  const emailId = useId();
  const usernameId = useId();
  const passwordId = useId();

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

      onSignIn();

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
    <div>
      <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        onOverlayClick={onOverlayClick}
        title="Sign up"
        onSubmit={handleSubmit}
      >
        {/* Email Field */}
        <div className="popup__input-container">
          <label htmlFor={emailId} className="popup__label">
            Email
          </label>
          <input
            type="email"
            id={emailId}
            placeholder="Enter email"
            required
            className="popup__input"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        {/* Username Field */}
        <div className="popup__input-container">
          <label htmlFor={usernameId} className="popup__label">
            Username
          </label>
          <input
            type="text"
            id={usernameId}
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

        {/* Password Field with autocomplete */}
        <div className="popup__input-container">
          <label htmlFor={passwordId} className="popup__label">
            Password
          </label>
          <input
            type="password"
            id={passwordId}
            placeholder="Enter password (min 6 characters)"
            required
            className="popup__input"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="new-password"
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
    </div>
  );
}

export default SignUpModal;
