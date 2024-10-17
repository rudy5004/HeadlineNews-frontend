import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";
import notSavedIcon from "../../assets/notSavedIcon.svg";
import notSavedIconHover from "../../assets/notSavedIconHover.svg";
import defaultImage from "../../assets/Nature.svg";

function NewsCard({ article }) {
  const [isIconHovered, setIsIconHovered] = useState(false);
  const location = useLocation();

  const imageSrc =
    article.urlToImage && article.urlToImage.startsWith("http")
      ? article.urlToImage
      : defaultImage;

  return (
    <div className="news-card">
      {/* Display the keyword */}
      <div className="news-card__header">
        <span className="news-card__keyword">
          {article.keyword || "General"} {/* Display the keyword */}
        </span>
      </div>

      {/* Image */}
      <img
        src={imageSrc}
        alt={article.title || "No title available"}
        className="news-card__image"
        onError={(e) => (e.target.src = defaultImage)}
      />

      {/* Icon and hover text */}
      <div className="news-card__delete-container">
        {isIconHovered && (
          <div className="news-card__hover-box">
            {location.pathname === "/"
              ? "Sign in to save articles"
              : "Remove from saved"}
          </div>
        )}
        <img
          src={isIconHovered ? notSavedIconHover : notSavedIcon}
          alt="Not saved"
          className="news-card__not-saved-icon"
          onMouseEnter={() => setIsIconHovered(true)}
          onMouseLeave={() => setIsIconHovered(false)}
        />
      </div>

      {/* Content */}
      <div className="news-card__content">
        <p className="news-card__date">
          {article.publishedAt
            ? new Date(article.publishedAt).toLocaleDateString()
            : "Unknown date"}
        </p>
        <h3 className="news-card__title">
          {article.title || "No title available"}
        </h3>
        <p className="news-card__description">
          {article.description || "No description available"}
        </p>
        <p className="news-card__source">
          {article.source.name || "Unknown source"}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
