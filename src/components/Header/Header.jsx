import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import SignUpModal from "../SignUpModal/SignUpModal"; // Import the SignUpModal component
import NewsExplorerLogo from "../../assets/NewsExplorer.svg";
import MenuIcon from "../../assets/menu.svg"; // Import the menu icon
import "./Header.css";

function Header() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const location = useLocation();

  const handleSignInPopupOpen = () => {
    setIsSignInPopupOpen(true);
    setIsSignUpPopupOpen(false); // Ensure sign-up modal is closed
  };

  const handleSignUpPopupOpen = () => {
    setIsSignUpPopupOpen(true);
    setIsSignInPopupOpen(false); // Ensure sign-in modal is closed
  };

  const handlePopupClose = () => {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsMenuOpen(false); // Close the menu when popups are closed
    setEmailError(""); // Clear errors when popups are closed
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handlePopupClose();
      }
    };

    if (isSignInPopupOpen || isSignUpPopupOpen || isMenuOpen) {
      window.addEventListener("keydown", handleEscClose);
    }

    return () => {
      window.removeEventListener("keydown", handleEscClose);
    };
  }, [isSignInPopupOpen, isSignUpPopupOpen, isMenuOpen]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup_open")) {
      handlePopupClose();
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
      setEmailError("Invalid email address");
      setIsFormValid(false);
    } else {
      setEmailError("");
      setIsFormValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      handlePopupClose();
      // Additional logic for form submission
    }
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__logo">
          <img
            src={NewsExplorerLogo}
            alt="News Explorer logo"
            className="header__logo-img"
          />
        </Link>

        {/* Menu icon, visible only at 320px breakpoint */}
        <img
          src={MenuIcon}
          alt="Menu icon"
          className="header__menu-icon"
          onClick={handleMenuToggle}
        />

        <ul
          className={`header__menu ${isMenuOpen ? "header__menu--open" : ""}`}
        >
          <li className="header__item">
            <Link
              to="/"
              className={`header__link ${
                location.pathname === "/" ? "header__link--active" : ""
              }`}
              onClick={handleMenuToggle} // Close menu when Home is clicked
            >
              Home
            </Link>
          </li>

          {location.pathname === "/saved-news" && (
            <li className="header__item">
              <Link
                to="/saved-news"
                className="header__link"
                onClick={handleMenuToggle} // Close menu when Saved Articles is clicked
              >
                Saved articles
              </Link>
            </li>
          )}

          <li className="header__item">
            <button
              onClick={handleSignInPopupOpen}
              className="header__login-button"
            >
              Sign in
            </button>
          </li>
        </ul>
      </nav>
      <div className="header__horizontal-line"></div>

      {/* Sign-in Popup */}
      <PopupWithForm
        isOpen={isSignInPopupOpen}
        onClose={handlePopupClose}
        onOverlayClick={handleOverlayClick}
        title="Sign in"
        onSubmit={handleSubmit}
      >
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
          {emailError && <span className="popup__error">{emailError}</span>}
        </div>

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
          />
        </div>

        <button type="submit" className="popup__submit" disabled={!isFormValid}>
          Sign In
        </button>

        <div className="popup__separator">
          or{" "}
          <a href="#" className="popup__link" onClick={handleSignUpPopupOpen}>
            Sign up
          </a>
        </div>
      </PopupWithForm>

      {/* Sign-up Popup */}
      <SignUpModal
        isOpen={isSignUpPopupOpen}
        onClose={handlePopupClose}
        onOverlayClick={handleOverlayClick}
        onSubmit={(data) => {
          console.log("Sign up form submitted:", data);
          handlePopupClose();
        }}
        onSignInClick={handleSignInPopupOpen} // Switch to sign-in modal when clicking "Sign in"
      />
    </header>
  );
}

export default Header;
