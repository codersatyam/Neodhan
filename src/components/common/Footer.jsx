import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <h2>Neodhan</h2>
          <p>Brings you the best options, tailored to your needs, saving your time and money. Experience the difference today</p>
          <Link to="/demo" className="get-started-button">
            Contact Us
          </Link>
        </div>

        <div className="footer-links">
          <nav className="footer-nav">
            <Link to="#">FAQ</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="/services">Services</Link>
            <Link to="/demo">Contact Us</Link>
            <Link to="https://www.linkedin.com/company/neodhan/posts/?feedView=all" target="_blank" rel="noopener noreferrer">Follow Us on LinkedIn</Link>
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2025 Neodhan. All Rights Reserved.</p>
          <p> Powered by Nexus</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 