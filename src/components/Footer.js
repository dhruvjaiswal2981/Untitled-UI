import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-2  value" >
            <h3>Product</h3>
            <ul>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Releases</a></li>
            </ul>
          </div>
          <div className="col-md-2  value">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Media kit</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-2 value">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Help centre</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className="col-md-2 value">
            <h3>Use cases</h3>
            <ul>
              <li><a href="#">Startups</a></li>
              <li><a href="#">Enterprise</a></li>
              <li><a href="#">Government</a></li>
              <li><a href="#">SaaS centre</a></li>
              <li><a href="#">Marketplaces</a></li>
              <li><a href="#">Ecommerce</a></li>
            </ul> 
          </div>
          <div className="col-md-2 value">
            <h3>Social</h3>
            <ul>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Linkedin</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">AngelList</a></li>
              <li><a href="#">Dribble</a></li>
            </ul> 
          </div>
          <div className="col-md-2 value">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Licenses</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Contact</a></li>
            </ul> 
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="logo">
            <img
                src="./images/logo (1).png"
                alt="company logo"
                className="logo-image"
            />
        </div>
        <p className="logo-de">&copy; 2077 Untitled UI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;