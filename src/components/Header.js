// components/Header.jsx
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-card">
        <div className="logo">
          <img
            src="./images/logo (1).png"
            alt="company logo"
            className="logo-image"
          />
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#resources">Resources</a>
          <a href="#pricing">Pricing</a>
        </nav>
      </div>
      <div className="profile">
        <img
          src="./images/Dropdown.png"
          alt="Profile"
          className="profile-img"
        />
      </div>
    </header>
  );
};

export default Header;
