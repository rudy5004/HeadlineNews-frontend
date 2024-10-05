import React from "react";
import { Link } from "react-router-dom";
import NewsExplorerLogoBlack from "../../assets/NewsExplorerBlack.svg"; // Use your logo path
import LogoutIcon from "../../assets/logout.svg"; // Import your logout icon path
import "./SavedNewsHeader.css"; // Custom CSS for this header

function SavedNewsHeader({ user }) {
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

        {/* Links and Elise button on the far right */}
        <div className="saved-news-header__right">
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
            </li>
          </ul>

          {/* Elise button with Logout icon */}
          <button className="saved-news-header__elise-button">
            {user.name}
            <img src={LogoutIcon} alt="Logout icon" />
          </button>
        </div>
      </nav>
      <div className="saved-news-header__horizontal-line"></div>
    </header>
  );
}

export default SavedNewsHeader;
