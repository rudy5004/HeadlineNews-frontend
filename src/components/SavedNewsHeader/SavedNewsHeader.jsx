import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewsExplorerLogoBlack from "../../assets/NewsExplorerBlack.svg"; // Black logo
import MenuIcon from "../../assets/BlackMenu.svg"; // Menu icon
import CloseIcon from "../../assets/close.svg"; // Close icon
import LogoutIcon from "../../assets/logout.svg";
import "./SavedNewsHeader.css"; // Custom CSS for this header

function SavedNewsHeader({ user }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu overlay
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("keydown", handleEscClose);
    }

    return () => {
      window.removeEventListener("keydown", handleEscClose);
    };
  }, [isMenuOpen]);

  return (
    <header className="saved-news-header">
      <nav className="saved-news-header__nav">
        {/* Logo on the far left */}
        <Link to="/" className="saved-news-header__logo">
          <img
            src={NewsExplorerLogoBlack}
            alt="News Explorer logo"
            className="saved-news-header__logo-img"
          />
        </Link>

        {/* Menu icon, visible only at 320px breakpoint */}
        <img
          src={MenuIcon}
          alt="Menu icon"
          className="saved-news-header__menu-icon"
          onClick={handleMenuToggle} // Handle menu toggle
        />

        {/* Links and Elise button on the far right (hidden at 320px when menu isn't clicked) */}
        <div className={`saved-news-header__right ${isMenuOpen ? "open" : ""}`}>
          <ul className="saved-news-header__menu">
            <li className="saved-news-header__item">
              <Link to="/" className="saved-news-header__link">
                Home
              </Link>
            </li>

            <li className="saved-news-header__item">
              <Link
                to="/saved-news"
                className="saved-news-header__link saved-news-header__link--active"
              >
                Saved articles
              </Link>
              {/* Underline for "Saved articles" */}
              <div className="saved-news-header__underline" />
            </li>
          </ul>

          {/* Elise button with Logout icon */}
          <button className="saved-news-header__elise-button">
            {user.name}
            <img src={LogoutIcon} alt="Logout icon" />
          </button>
        </div>
      </nav>

      {/* Add the horizontal line below the nav */}
      <div className="saved-news-header__horizontal-line"></div>

      {/* Menu overlay, shown when menu is open */}
      {isMenuOpen && (
        <div className="saved-news-header__menu-overlay">
          <img
            src={CloseIcon}
            alt="Close icon"
            className="saved-news-header__menu-close"
            onClick={handleMenuToggle}
          />

          {/* Logo and Home button inside the overlay */}
          <div className="saved-news-header__overlay-content">
            <Link to="/" className="saved-news-header__overlay-logo">
              <img
                src={NewsExplorerLogoBlack}
                alt="News Explorer logo"
                className="saved-news-header__logo-img"
              />
            </Link>

            <ul className="saved-news-header__overlay-menu">
              <li className="saved-news-header__overlay-item">
                <Link
                  to="/"
                  className="saved-news-header__link"
                  onClick={handleMenuToggle}
                >
                  Home
                </Link>
              </li>
              <li className="saved-news-header__overlay-item">
                <Link
                  to="/saved-news"
                  className="saved-news-header__link saved-news-header__link--active"
                  onClick={handleMenuToggle}
                >
                  Saved articles
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default SavedNewsHeader;
