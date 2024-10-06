import React, { useState } from "react";
import "./NewsCard.css";
import GreyDeleteButton from "../../assets/GreyDeleteButton.svg"; // Path to GreyDeleteButton
import BlackDeleteButton from "../../assets/BlackDeleteButton.svg"; // Path to BlackDeleteButton

function NewsCard({ article }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="news-card"
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
      onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
    >
      <div className="news-card__header">
        <span className="news-card__keyword">{article.keyword}</span>
      </div>

      {/* Delete button container */}
      <div className="news-card__delete-container">
        {isHovered && (
          <div className="news-card__remove-text">Remove from saved</div>
        )}
        <img
          src={isHovered ? BlackDeleteButton : GreyDeleteButton} // Swap images based on hover
          alt="Delete"
          className="news-card__delete-button"
        />
      </div>

      <div className="news-card__content">
        <h3 className="news-card__title">{article.title}</h3>
      </div>
    </div>
  );
}

export default NewsCard;
