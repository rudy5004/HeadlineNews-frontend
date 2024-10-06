import React from "react";
import NewsCard from "../NewsCard/NewsCard"; // Assuming you have a NewsCard component
import "./NewsCardList.css"; // Ensure this CSS file is imported

function NewsCardList({ articles }) {
  return (
    <div className="cards-container">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsCardList;
