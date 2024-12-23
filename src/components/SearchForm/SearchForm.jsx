import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState(""); // Local state for managing the query

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query); // Pass the query to the parent component for search
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-form__input"
        placeholder="Enter topic"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state
        required
      />
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
