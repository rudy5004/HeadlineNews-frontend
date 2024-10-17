import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ articles }) {
  // State to track the number of articles to display
  const [visibleCount, setVisibleCount] = useState(3);

  // Function to handle the "Show More" button click
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Show 3 more articles at a time
  };

  return (
    <div className="news-card-list">
      <div className="news-card-list__container">
        {articles.slice(0, visibleCount).map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>

      {/* Show "Show More" button only if there are more articles to show */}
      {visibleCount < articles.length && (
        <button className="news-card-list__show-more" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
}

export default NewsCardList;
