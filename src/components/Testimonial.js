
import React from "react";
import "./HeroSection.css";
import "./FAQSection.css";
import "./StatsSection.css";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="hero">
      <div className="testimonial-content">
      <img
          src="./images/Fictional company logo (6).png"
          alt="company logo"
          className="logo-image"
        />
        <h1 className="testimonial-title">We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h1>
        <div className="faq-contact-info">
          <img
            src="/images/Avatar (3).png"
            alt="Team Avatars"
            className="contact-avatars"
          />
          <p className="contact-text">
          Candice Wu
            <br />
            Product Manager, Sisyphus
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
