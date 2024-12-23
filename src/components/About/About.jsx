import React from "react";
import "./About.css";
import profilePic from "../../assets/ProfilePic.jpg";

function About() {
  return (
    <section className="about">
      <img src={profilePic} alt="Author" className="about__image" />
      <div className="about__info">
        {/* Separate container for the title */}
        <div className="about__title-container">
          <h2 className="about__title">About the author</h2>
        </div>
        {/* Separate container for the text */}
        <div className="about__text-container">
          <p className="about__text">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
          </p>
          <p className="about__text">
            You can also talk about your experience with TripleTen, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
