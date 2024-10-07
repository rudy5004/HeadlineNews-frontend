import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import SignUpModal from "../SignUpModal/SignUpModal";
import NewsExplorerLogo from "../../assets/NewsExplorer.svg";
import MenuIcon from "../../assets/menu.svg";
import CloseIcon from "../../assets/close.svg";
import "./Header.css";

function Header() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const location = useLocation();

  const handleSignInPopupOpen = () => {
    setIsSignInPopupOpen(true);
    setIsSignUpPopupOpen(false);
  };

  const handleSignUpPopupOpen = () => {
    setIsSignUpPopupOpen(true);
    setIsSignInPopupOpen(false);
  };

  const handlePopupClose = () => {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsMenuOpen(false);
    setEmailError("");
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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

        {/* Main navigation links (visible by default, hidden in overlay) */}
        <ul
          className={`header__menu ${isMenuOpen ? "header__menu--open" : ""}`}
        >
          <li className="header__item">
            <Link
              to="/"
              className={`header__link ${
                location.pathname === "/" ? "header__link--active" : ""
              }`}
              onClick={handleMenuToggle}
            >
              Home
            </Link>
          </li>

          <li className="header__item">
            <button
              onClick={handleSignInPopupOpen}
              className="header__login-button"
            >
              Sign in
            </button>
          </li>
        </ul>

        {/* Menu Overlay */}
        {isMenuOpen && (
          <div className="header__menu-overlay">
            <img
              src={CloseIcon}
              alt="Close icon"
              className="header__menu-close"
              onClick={handleMenuToggle}
            />
            <ul className="header__menu">
              <li className="header__item">
                <Link
                  to="/"
                  className="header__link"
                  onClick={handleMenuToggle}
                >
                  Home
                </Link>
              </li>

              <li className="header__item">
                <button
                  onClick={handleSignInPopupOpen}
                  className="header__login-button"
                >
                  Sign in
                </button>
              </li>
            </ul>
          </div>
        )}
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
        onSignInClick={handleSignInPopupOpen}
      />
    </header>
  );
}

export default Header;
