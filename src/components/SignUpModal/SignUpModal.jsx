import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function SignUpModal({
  isOpen,
  onClose,
  onOverlayClick,
  onSubmit,
  onSignInClick,
}) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const checkUsernameAvailability = (value) => {
    const unavailableUsernames = ["existingUser", "takenUsername"];
    return unavailableUsernames.includes(value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsFormValid(
      username.length > 0 && password.length > 0 && !usernameError
    );
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (checkUsernameAvailability(value)) {
      setUsernameError("Username isn't available");
      setIsFormValid(false);
    } else {
      setUsernameError("");
      setIsFormValid(password.length > 0 && value.length > 0);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsFormValid(username.length > 0 && !usernameError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onSubmit({ email, username, password });
      onClose(); // Close modal on successful submission
    }
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onOverlayClick={onOverlayClick}
      title="Sign up"
      onSubmit={handleSubmit}
    >
      {/* First Field - Email */}
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

      {/* Second Field - Password */}
      <div className="popup__input-container">
        <label htmlFor="password" className="popup__label">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          required
          className="popup__input"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      {/* Third Field - Username */}
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
        {usernameError && <span className="popup__error">{usernameError}</span>}
      </div>

      <button type="submit" className="popup__submit" disabled={!isFormValid}>
        Sign Up
      </button>

      <div className="popup__separator">
        or{" "}
        <a href="#" className="popup__link" onClick={onSignInClick}>
          Sign in
        </a>
      </div>
    </PopupWithForm>
  );
}

export default SignUpModal;
