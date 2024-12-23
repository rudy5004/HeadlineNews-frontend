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
          <a
            href="https://newsapi.org/"
            className="footer__link footer__link--copyright"
            target="_blank"
            rel="noreferrer"
          >
            © 2024 Supersite, Powered by News API
          </a>
        </p>
        <nav className="footer__nav">
          <a href="/" className="footer__link footer__link--home">
            Home
          </a>
          <a
            href="https://tripleten.com"
            className="footer__link footer__link--tripleten"
            target="_blank"
            rel="noreferrer"
          >
            TripleTen
          </a>
          <a
            href="https://github.com"
            className="footer__link footer__link--github"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={GitHubIcon}
              alt="GitHub"
              className="footer__icon footer__icon--github"
            />
          </a>
          <a
            href="https://facebook.com"
            className="footer__link footer__link--facebook"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={FacebookIcon}
              alt="Facebook"
              className="footer__icon footer__icon--facebook"
            />
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
