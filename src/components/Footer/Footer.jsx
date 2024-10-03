import React from "react";
import "./Footer.css";

// Import your custom images
import GitHubIcon from "../../assets/GitHub.svg";
import FacebookIcon from "../../assets/Facebook.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          © 2024 Supersite, Powered by News API
        </p>
        <nav className="footer__nav">
          <a href="/" className="footer__link">
            Home
          </a>
          <a
            href="https://tripleten.com"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            TripleTen
          </a>
          {/* Use custom GitHub icon */}
          <a
            href="https://github.com"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHubIcon} alt="GitHub" className="footer__icon" />
          </a>
          {/* Use custom Facebook icon */}
          <a
            href="https://facebook.com"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FacebookIcon} alt="Facebook" className="footer__icon" />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
