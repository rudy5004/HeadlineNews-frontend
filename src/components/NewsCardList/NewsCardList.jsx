import React from "react";
import NewsCard from "../NewsCard/NewsCard"; // Assuming you have NewsCard built

function NewsCardList({ articles }) {
  return (
    <section className="news-card-list">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </section>
  );
}

export default NewsCardList;
