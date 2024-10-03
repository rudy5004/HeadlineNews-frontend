import React, { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Header from "../Header/Header"; // Import your Header component
import "./Main.css"; // Import your Main.css file for styling

function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main">
      {loading ? (
        <Preloader />
      ) : (
        <div className="main__content">
          {/* This section includes the background image and wraps both the Header and SearchForm */}
          <section className="main__background-section">
            {/* Header now inside the background section */}
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
              <SearchForm />
            </div>
          </section>
          <About />
        </div>
      )}
    </main>
  );
}

export default Main;
