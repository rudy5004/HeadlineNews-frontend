import React from "react";
import NewsCard from "../NewsCard/NewsCard"; // Import the NewsCard component

function NewsCardList({ articles }) {
  return (
    <div className="cards-container">
      {articles.map((article) => (
        <NewsCard key={article.id} article={article} /> // Pass each article to NewsCard
      ))}
    </div>
  );
}

export default NewsCardList;
