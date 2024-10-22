import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";
import savedIcon from "../../assets/savedIcon.svg"; // Import saved icon
import notSavedIcon from "../../assets/notSavedIcon.svg"; // Grey default icon
import notSavedIconHover from "../../assets/notSavedIconHover.svg"; // Black hover icon
import defaultImage from "../../assets/Nature.svg"; // Default image

function NewsCard({ article, isUserLoggedIn, onSave }) {
  const [isSaved, setIsSaved] = useState(false); // Track save status
  const [isIconHovered, setIsIconHovered] = useState(false); // Track hover state

  // Check if the article is already saved
  useEffect(() => {
    const savedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];
    const isArticleSaved = savedArticles.some(
      (saved) => saved.title === article.title
    );
    setIsSaved(isArticleSaved);
  }, [article.title]);

  const handleSaveClick = () => {
    if (!isUserLoggedIn) {
      alert("Please sign in to save articles.");
      return;
    }
    onSave(article); // Call save handler
    setIsSaved((prevState) => !prevState); // Toggle saved state
  };

  const imageSrc = article.urlToImage?.startsWith("http")
    ? article.urlToImage
    : defaultImage;

  return (
    <div className="news-card">
      {/* Display the keyword */}
      <div className="news-card__header">
        <span className="news-card__keyword">
          {article.keyword || "General"}
        </span>
      </div>

      {/* Image */}
      <img
        src={imageSrc}
        alt={article.title || "No title available"}
        className="news-card__image"
        onError={(e) => (e.target.src = defaultImage)}
      />

      {/* Save icon */}
      <div
        className="news-card__save-icon-container"
        onMouseEnter={() => setIsIconHovered(true)}
        onMouseLeave={() => setIsIconHovered(false)}
        onClick={handleSaveClick}
      >
        <img
          src={
            isSaved
              ? savedIcon
              : isIconHovered
              ? notSavedIconHover
              : notSavedIcon
          }
          alt={isSaved ? "Saved" : "Not saved"}
          className="news-card__save-icon"
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
