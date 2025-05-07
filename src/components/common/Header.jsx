import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo.jpeg';
import logo1 from '../../assets/images/logo1.png';

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen((open) => !open);
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-content">
        {/* Logo */}
        <Link to="/" className="logo" onClick={handleNavLinkClick}>
          <div className="logo-container">
            {/* <span className="logo-icon">N</span>
            <span className="logo-text">Neodhan</span> */}
            <img src={logo1} alt="Logo" />
          </div>
        </Link>

        {/* Navigation Menu */}
        <div className={`nav-container${menuOpen ? ' show' : ''}`}>
          <nav className="nav-menu">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={handleNavLinkClick}
            >
              <span className="nav-text">Home</span>
            </Link>
            <Link
              to="/services"
              className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}
              onClick={handleNavLinkClick}
            >
              <span className="nav-text">Services</span>
            </Link>
            <Link
              to="/about"
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={handleNavLinkClick}
            >
              <span className="nav-text">About Us</span>
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={handleNavLinkClick}
            >
              <span className="nav-text">Contact</span>
            </Link>
          </nav>
        </div>

        {/* Contact Button */}
        <Link to="/contact" className="contact-button" onClick={handleNavLinkClick}>
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Hamburger Menu */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={handleMenuToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu${menuOpen ? ' show' : ''}`}>
        <nav className="mobile-nav">
          <Link to="/" className={`mobile-link ${location.pathname === '/' ? 'active' : ''}`} onClick={handleNavLinkClick}>
            Home
          </Link>
          <Link to="/services" className={`mobile-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={handleNavLinkClick}>
            Services
          </Link>
          <Link to="/about" className={`mobile-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={handleNavLinkClick}>
            About Us
          </Link>
          <Link to="/contact" className={`mobile-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={handleNavLinkClick}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;