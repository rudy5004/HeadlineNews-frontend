import React, { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import SignUpModal from "../SignUpModal/SignUpModal"; // Assuming you have the SignUpModal
import { fetchNews } from "../../utils/ThirdPartyApi";
import "./Main.css";

function Main() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // State for logged in

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsUserLoggedIn(loggedInStatus);

    const storedArticles =
      JSON.parse(localStorage.getItem("savedArticles")) || [];
    setSavedArticles(storedArticles);
  }, []);

  const handleSignIn = () => {
    setIsUserLoggedIn(true); // Set user logged in state immediately after sign in
  };

  const handleSearch = async (searchQuery) => {
    setLoading(true);
    setError("");
    setArticles([]);
    setQuery(searchQuery);

    try {
      const fetchedArticles = await fetchNews(searchQuery);
      const articlesWithKeywords = fetchedArticles.map((article) => ({
        ...article,
        keyword: searchQuery,
      }));
      setArticles(articlesWithKeywords);
    } catch (err) {
      setError(
        "Sorry, something went wrong during the request. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSaveArticle = (article) => {
    const isAlreadySaved = savedArticles.some(
      (saved) => saved.title === article.title
    );
    let updatedSavedArticles;
    if (isAlreadySaved) {
      updatedSavedArticles = savedArticles.filter(
        (saved) => saved.title !== article.title
      );
    } else {
      updatedSavedArticles = [...savedArticles, article];
    }

    setSavedArticles(updatedSavedArticles);
    localStorage.setItem("savedArticles", JSON.stringify(updatedSavedArticles));
  };

  return (
    <main className="main">
      <section className="main__background-section">
        <Header />
        <div className="main__overlay">
          <div className="main__title-container">
            <h1 className="main__title">
              What’s going on
              <br />
              in the world?
            </h1>
          </div>
          <p className="main__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm onSearch={handleSearch} />
        </div>
      </section>
      <SignUpModal onSignIn={handleSignIn} />
      {loading && <Preloader />}
      {error && <p className="main__error">{error}</p>} {/* Updated class */}
      {articles.length > 0 && (
        <section className="main__news-cards">
          {" "}
          {/* Updated class */}
          <NewsCardList
            articles={articles}
            savedArticles={savedArticles}
            onSave={handleSaveArticle}
            isUserLoggedIn={isUserLoggedIn} // Pass login state to NewsCardList
          />
        </section>
      )}
      <About />
    </main>
  );
}

export default Main;
