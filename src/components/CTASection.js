
import React from "react";
import "./HeroSection.css";
import "./CTASection.css"

const CTASection = () => {
  return (
    <section className="hero-CTA">
      <div className="hero-content">
        <h1 className="hero-title">Start your free trial</h1>
        <p className="hero-description">
        Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="hero-actions">
          <button className="btn demo-btn">Learn more</button>
          <button className="btn signup-btn">Get started</button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
