import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/" className="navigation__link">
        Home
      </Link>
      <Link to="/saved-news" className="navigation__link">
        Saved articles
      </Link>
      <Link
        to="/profile"
        className="navigation__link navigation__link--profile"
      >
        Elise <span className="navigation__icon">➔</span>
      </Link>
    </nav>
  );
}

export default Navigation;
