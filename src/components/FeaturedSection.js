import React from "react";
import "./FeaturedSection.css";

const FeaturedSection = () => {
  return (
    <section className="features-section">
      <header className="features-header">
        <p className="features-tagline">Features</p>
        <h2 className="features-title">
          Cutting-edge features for advanced analytics
        </h2>
        <p className="features-description">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </header>

      <div className="features-image">
        <img
          src="/images/content.png"
          alt="Desktop Analytics"
          className="features-desktop"
        />
      </div>
      <div className="features-cards">
        <div className="feature-card">
          <div className="icon-wrapper">
            <img src="/images/Featured icon (6).png" alt="Team Inboxes" />
          </div>
          <h3>Share team inboxes</h3>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep
            everyone on the same page and in the loop.
          </p>
          <a href="#learn-more" className="learn-more">
            Learn more →
          </a>
        </div>
        <div className="feature-card">
          <div className="icon-wrapper">
            <img src="/images/Featured icon (7).png" alt="Instant Answers" />
          </div>
          <h3>Deliver instant answers</h3>
          <p>
            An all-in-one customer service platform that helps you balance
            everything your customers need to be happy.
          </p>
          <a href="#learn-more" className="learn-more">
            Learn more →
          </a>
        </div>
        <div className="feature-card">
          <div className="icon-wrapper">
            <img src="/images/Featured icon (7).png" alt="Team Reports" />
          </div>
          <h3>Manage your team with reports</h3>
          <p>
            Measure what matters with Untitled’s easy-to-use reports. You can
            filter, export, and drill down on the data in a couple clicks.
          </p>
          <a href="#learn-more" className="learn-more">
            Learn more →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
