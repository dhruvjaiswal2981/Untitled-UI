import React, { useState } from "react";
import "./FAQSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    { question: "Can I change my plan later?", answer: "" },
    { question: "What is your cancellation policy?", answer: "" },
    { question: "Can other info be added to an invoice?", answer: "" },
    { question: "How does billing work?", answer: "" },
    { question: "How do I change my account email?", answer: "" },
  ];

  return (
    <section className="faq-section">
      <header className="faq-header">
        <h2>Frequently asked questions</h2>
        <p>Everything you need to know about the product and billing.</p>
      </header>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="faq-contact">
        <div className="faq-contact-info">
          <img
            src="/images/Avatar group.png"
            alt="Team Avatars"
            className="contact-avatars"
          />
          <p className="contact-text">
            Still have questions?
            <br />
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <a href="#get-in-touch" className="get-in-touch">
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default FAQSection;
