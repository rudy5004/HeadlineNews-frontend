import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../Main/Main"; // Main page component
import Footer from "../Footer/Footer"; // Footer component
import SavedNews from "../SavedNews/SavedNews"; // Saved news page component
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
  ]);

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* This route should point to "/" to load the Main component */}
          <Route path="/" element={<Main />} />
          <Route
            path="/saved-news"
            element={<SavedNews user={user} savedArticles={savedArticles} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
