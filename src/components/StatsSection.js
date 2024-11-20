import React from "react";
import "./StatsSection.css";

const StatsSection = () => {
  return (
    <section className="stats">
      <div className="stats-content">
        {/* Centered Image */}
        <img
          src={`${process.env.PUBLIC_URL}/images/Dashboard.png`}
          alt="Dashboard Preview"
          className="stats-image"
        />
        <div className="stats-card">
          <p className="stats-description">Join 4,000+ companies already growing</p>
          <div className="logo-com">
            <img 
              src={`${process.env.PUBLIC_URL}/images/Fictional company logo.png`}
              alt="Company Logo "
              className="logo-image"
            />
            <img 
              src={`${process.env.PUBLIC_URL}/images/Fictional company logo (1).png`}
              alt="Company Logo"
              className="logo-image"
            />
            <img 
              src={`${process.env.PUBLIC_URL}/images/Fictional company logo (2).png`}
              alt="Company Logo"
              className="logo-image"
            />
            <img 
              src={`${process.env.PUBLIC_URL}/images/Fictional company logo (3).png`}
              alt="Company Logo"
              className="logo-image"
            />
            <img 
              src={`${process.env.PUBLIC_URL}/images/Fictional company logo (4).png`}
              alt="Company Logo"
              className="logo-image"
            />
            <img 
              src={`${process.env.PUBLIC_URL}/images/Fictional company logo (5).png`}
              alt="Company Logo"
              className="logo-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
