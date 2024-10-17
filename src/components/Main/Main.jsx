import React, { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Header from "../Header/Header";
import NewsCardList from "../NewsCardList/NewsCardList";
import { fetchNews } from "../../utils/ThirdPartyApi";
import "./Main.css";

function Main() {
  // State hooks for managing articles, loading, and errors
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [query, setQuery] = useState(""); // State for storing the current search query

  // Load saved articles from localStorage when the component mounts
  useEffect(() => {
    const savedArticles = localStorage.getItem("articles");
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    }
  }, []);

  // Function to handle search and fetch news based on the query
  const handleSearch = async (searchQuery) => {
    setLoading(true);
    setError(""); // Reset error state before fetching
    setArticles([]); // Reset articles before fetching
    setQuery(searchQuery); // Update the query state

    try {
      const fetchedArticles = await fetchNews(searchQuery);

      // Map over the fetched articles and add the keyword (search query)
      const articlesWithKeywords = fetchedArticles.map((article) => ({
        ...article,
        keyword: searchQuery, // Add the search query as the keyword
      }));

      setArticles(articlesWithKeywords); // Store the fetched articles in state

      // Save the fetched articles to localStorage
      localStorage.setItem("articles", JSON.stringify(articlesWithKeywords));
    } catch (err) {
      // If API call fails, set an error message
      setError(
        "Sorry, something went wrong during the request. Please try again later."
      );
    } finally {
      setLoading(false); // Ensure loading stops after the request
    }
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
          <SearchForm onSearch={handleSearch} />{" "}
          {/* Pass handleSearch to SearchForm */}
        </div>
      </section>

      {/* Preloader while fetching */}
      {loading && <Preloader />}

      {/* Display error if there's an issue */}
      {error && <p className="error">{error}</p>}

      {/* Display NewsCardList component if articles are fetched */}
      {articles.length > 0 && (
        <section className="news-cards">
          <NewsCardList articles={articles} />{" "}
          {/* Pass articles to NewsCardList */}
        </section>
      )}

      {/* About section */}
      <About />
    </main>
  );
}

export default Main;
