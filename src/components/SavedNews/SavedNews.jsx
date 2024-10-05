import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ user, savedArticles }) {
  const keywords = savedArticles.map((article) => article.keyword);

  return (
    <div className="saved-news">
      {/* Removed SavedNewsHeader */}
      <NewsCardList articles={savedArticles} />
    </div>
  );
}

export default SavedNews;
