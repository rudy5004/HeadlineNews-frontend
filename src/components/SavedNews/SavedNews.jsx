import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList"; // Import the NewsCardList component
import "./SavedNews.css";

function SavedNews({ user, savedArticles }) {
  const uniqueKeywords = [
    ...new Set(savedArticles.map((article) => article.keyword)),
  ]; // Get unique keywords

  return (
    <div className="saved-news">
      <div className="saved-news__header">
        <h2 className="saved-news__title">Saved articles</h2>
        <h3 className="saved-news__subheading">
          {`${user.name}, you have ${savedArticles.length} saved`} <br />{" "}
          articles
        </h3>
        <p className="saved-news__description">
          By keywords:{" "}
          {uniqueKeywords.map((keyword, index) => (
            <span key={index} className="saved-news__keyword">
              {keyword}
              {index < uniqueKeywords.length - 1 && ", "}
            </span>
          ))}
        </p>
      </div>
      <NewsCardList articles={savedArticles} />{" "}
      {/* Pass the articles to NewsCardList */}
    </div>
  );
}

export default SavedNews;
