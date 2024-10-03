import React from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({ user, savedArticles }) {
  const keywords = savedArticles.map((article) => article.keyword);

  return (
    <div className="saved-news">
      <SavedNewsHeader
        name={user.name}
        savedArticles={savedArticles}
        keywords={[...new Set(keywords)]} // Unique keywords
      />
      <NewsCardList articles={savedArticles} />
    </div>
  );
}

export default SavedNews;
