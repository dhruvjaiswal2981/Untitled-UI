import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection";
import FeaturedSection from "./components/FeaturedSection";
import FAQSection from "./components/FAQSection";
import BlogSection from "./components/BlogSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <Testimonial/>
        <FeaturedSection/>
        <FAQSection/>
        <BlogSection/>
        <CTASection/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
