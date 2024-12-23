import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ articles, isUserLoggedIn, onSave }) {
  const [visibleCount, setVisibleCount] = useState(3); // Show only 3 articles initially

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Show 3 more articles at a time
  };

  return (
    <div className="news-card-list">
      <div className="news-card-list__container">
        {articles.slice(0, visibleCount).map((article, index) => (
          <NewsCard
            key={index}
            article={article}
            isUserLoggedIn={isUserLoggedIn} // Pass login status
            onSave={onSave} // Pass the save handler
          />
        ))}
      </div>

      {/* Show "Show More" button here within the news-card-list */}
      {visibleCount < articles.length && (
        <button className="news-card-list__show-more" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
