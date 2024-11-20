// components/HeroSection.jsx
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="team-dash">
          <span className="badge">New feature</span>
          <a href="#team-dashboard" className="link">
            Check out the team dashboard →
          </a>
        </div>
        <h1 className="hero-title">Beautiful analytics to grow smarter</h1>
        <p className="hero-description">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="hero-actions">
          <button className="btn demo-btn">Demo</button>
          <button className="btn signup-btn">Sign up</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
