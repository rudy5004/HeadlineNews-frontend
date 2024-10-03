import React from "react";
import "./SavedNewsHeader.css";

function SavedNewsHeader({ name, savedArticles, keywords }) {
  return (
    <section className="saved-news-header">
      <h2 className="saved-news-header__title">{`${name}, you have ${savedArticles.length} saved articles`}</h2>
      <p className="saved-news-header__keywords">
        By keywords:{" "}
        {keywords.map((keyword, index) => (
          <span key={index} className="saved-news-header__keyword">
            {keyword}
            {index < keywords.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
    </section>
  );
}

export default SavedNewsHeader;
