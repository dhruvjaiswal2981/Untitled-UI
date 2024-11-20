import React from 'react';
import './FeaturesSection.css';


const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="features-header">
        <p className="features-tagline">Features</p>
        <h2 className="features-title">Analytics that feels like it’s from the future</h2>
        <p className="features-description">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <img src="/images/Featured icon.png" alt="Share team inboxes" className="feature-icon" />
          <h3 className="feature-title">Share team inboxes</h3>
          <p className="feature-description">
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
          </p>
        </div>

        <div className="feature-card">
          <img src="/images/Featured icon (1).png" alt="Deliver instant answers" className="feature-icon" />
          <h3 className="feature-title">Deliver instant answers</h3>
          <p className="feature-description">
            An all-in-one customer service platform that helps you balance everything your customers need to be happy.
          </p>
        </div>

        <div className="feature-card">
          <img src="/images/Featured icon (2).png" alt="Manage your team with reports" className="feature-icon" />
          <h3 className="feature-title">Manage your team with reports</h3>
          <p className="feature-description">
            Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.
          </p>
        </div>

        <div className="feature-card">
          <img src="/images/Featured icon (3).png" alt="Connect with customers" className="feature-icon" />
          <h3 className="feature-title">Connect with customers</h3>
          <p className="feature-description">
            Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
          </p>
        </div>

        <div className="feature-card">
          <img src="/images/Featured icon (4).png" alt="Connect the tools you already use" className="feature-icon" />
          <h3 className="feature-title">Connect the tools you already use</h3>
          <p className="feature-description">
            Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
          </p>
        </div>

        <div className="feature-card">
          <img src="/images/Featured icon (5).png" alt="Our people make the difference" className="feature-icon" />
          <h3 className="feature-title">Our people make the difference</h3>
          <p className="feature-description">
            We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
