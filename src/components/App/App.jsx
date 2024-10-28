import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../Main/Main"; // Main page component
import Footer from "../Footer/Footer"; // Footer component
import SavedNews from "../SavedNews/SavedNews"; // Saved news page component
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader"; // Saved news header component
import "./App.css";

function App() {
  const [user] = useState({ name: "Elise" });

  const [savedArticles] = useState([
    {
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      keyword: "Nature",
      imageUrl: "/path/to/image1.jpg", // Replace with actual image path or URL
      publishedAt: "November 4, 2020",
      description:
        "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...",
      source: { name: "Treehugger" },
    },
    {
      title: "Nature makes you better",
      keyword: "Nature",
      imageUrl: "/path/to/image2.jpg", // Replace with actual image path or URL
      publishedAt: "February 19, 2019",
      description:
        "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest, the way dappled sunlight dances through leaves.",
      source: { name: "National Geographic" },
    },
    {
      title: "Nostalgic Photos of Tourists in U.S. National Parks",
      keyword: "Yellowstone",
      imageUrl: "/path/to/image3.jpg", // Replace with actual image path or URL
      publishedAt: "October 19, 2020",
      description:
        "Uri Løvveid Golman and Helle Løvveid Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...",
      source: { name: "National Geographic" },
    },
    {
      title: "Grand Teton Renews Historic Crest Trail",
      keyword: "Parks",
      imageUrl: "/path/to/image4.jpg", // Replace with actual image path or URL
      publishedAt: "November 4, 2020",
      description:
        "The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933, and marked the first step in the realization of a plan whereby the hiker will be...",
      source: { name: "National Parks Traveler" },
    },
    {
      title: "Scientists Don't Know Why Polaris Is So Weird",
      keyword: "Photography",
      imageUrl: "/path/to/image5.jpg", // Replace with actual image path or URL
      publishedAt: "March 16, 2020",
      description:
        "Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.",
      source: { name: "Treehugger" },
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
