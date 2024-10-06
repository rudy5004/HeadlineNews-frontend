import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../Main/Main"; // Main page component
import Footer from "../Footer/Footer"; // Footer component
import SavedNews from "../SavedNews/SavedNews"; // Saved news page component
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader"; // Saved news header component
import "./App.css";

function App() {
  const [user] = useState({ name: "Elise" });
  const [savedArticles] = useState([
    {
      title: "Article 1",
      keyword: "Nature",
      imageUrl: "",
      publishedAt: "",
      description: "",
      source: { name: "" },
    },
    {
      title: "Article 2",
      keyword: "Parks",
      imageUrl: "",
      publishedAt: "",
      description: "",
      source: { name: "" },
    },
    {
      title: "Article 3",
      keyword: "Photography",
      imageUrl: "",
      publishedAt: "",
      description: "",
      source: { name: "" },
    },
    {
      title: "Article 4",
      keyword: "Wildlife",
      imageUrl: "",
      publishedAt: "",
      description: "",
      source: { name: "" },
    },
    {
      title: "Article 5",
      keyword: "Adventure",
      imageUrl: "",
      publishedAt: "",
      description: "",
      source: { name: "" },
    },
  ]);

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Main page */}
          <Route path="/" element={<Main />} />

          {/* Saved news page with SavedNewsHeader above SavedNews */}
          <Route
            path="/saved-news"
            element={
              <>
                <SavedNewsHeader user={user} />
                <SavedNews user={user} savedArticles={savedArticles} />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
