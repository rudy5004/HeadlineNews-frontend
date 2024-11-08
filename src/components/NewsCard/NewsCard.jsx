import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";
import savedIcon from "../../assets/savedIcon.svg";
import notSavedIcon from "../../assets/notSavedIcon.svg";
import notSavedIconHover from "../../assets/notSavedIconHover.svg";
import GreyDeleteButton from "../../assets/GreyDeleteButton.svg";
import BlackDeleteButton from "../../assets/BlackDeleteButton.svg";
import defaultImage from "../../assets/Nature.svg";

function NewsCard({ article, isUserLoggedIn, onSave }) {
  const [isSaved, setIsSaved] = useState(false);
  const [isIconHovered, setIsIconHovered] = useState(false);
  const location = useLocation();

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
    onSave(article);
    setIsSaved((prevState) => !prevState);
  };

  // Determine if the current page is /saved-news
  const isSavedNewsPage = location.pathname === "/saved-news";

  // Determine which icon to display based on the page and hover state
  const iconSrc = (() => {
    if (isSaved) return savedIcon;
    if (isSavedNewsPage) {
      return isIconHovered ? BlackDeleteButton : GreyDeleteButton;
    }
    return isIconHovered ? notSavedIconHover : notSavedIcon;
  })();

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

      {/* Save icon with text */}
      <div
        className="news-card__save-icon-container"
        onMouseEnter={() => setIsIconHovered(true)}
        onMouseLeave={() => setIsIconHovered(false)}
        onClick={handleSaveClick}
      >
        {isSavedNewsPage && (
          <span className="news-card__remove-text">Remove from saved</span>
        )}
        <img
          src={iconSrc}
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
