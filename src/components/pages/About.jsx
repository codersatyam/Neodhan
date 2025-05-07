import React from 'react';
import './About.css';
import person1 from "../../assets/images/rohit.png";


function About() {
  const loanStats = [
    { number: "₹5Cr+", label: "Loan Disbursed" },
    { number: "1000+", label: "Happy Customers" },
    { number: "98%", label: "Approval Rate" },
    { number: "24hrs", label: "Fast Approval" }
  ];

  const awards = [
    { year: "2024", title: "Best Fintech Startup of the Year", organization: "India Fintech Awards" },
    { year: "2023", title: "Excellence in Customer Service", organization: "Banking Tech Awards" },
    { year: "2023", title: "Most Innovative Loan Platform", organization: "Financial Innovation Summit" }
  ];

  const founders = [
    { 
      name: "Rohit Kumar",
      role: "Founder & CEO",
      image: person1,
      description: "With over 10 years of experience in financial services, Rohit leads our vision to revolutionize lending."
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <span className="section-tag">About Us</span>
          <h1>Transforming Lives Through <span className="gradient-text">Smart Financial Solutions</span></h1>
          <p>At Neodhan, we believe everyone deserves access to hassle-free financial solutions. Our innovative approach combines technology with personalized service to make loans accessible, transparent, and quick.</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="section-header">
          <span className="section-tag">Why Choose Us</span>
          <h2>Your Trusted Partner in <span className="gradient-text">Financial Growth</span></h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3>Quick Processing</h3>
            <p>Get your loan approved within 24 hours with our streamlined digital process</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3>Secure & Transparent</h3>
            <p>Bank-grade security with clear terms and no hidden charges</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3>Personal Support</h3>
            <p>Dedicated relationship managers to guide you through the process</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {loanStats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <div className="section-header">
          <span className="section-tag">Recognition</span>
          <h2>Our <span className="gradient-text">Achievements</span></h2>
        </div>
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={index} className="award-card">
              <div className="award-year">{award.year}</div>
              <h3>{award.title}</h3>
              <p>{award.organization}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section">
        <div className="section-header">
          <span className="section-tag">Leadership</span>
          <h2>Meet Our <span className="gradient-text">Founders</span></h2>
        </div>
        <div className="founders-grid">
          {founders.map((founder, index) => (
            <div key={index} className="founder-card">
              <div className="founder-image">
                <img src={founder.image} alt={founder.name} />
              </div>
              <div className="founder-info">
                <h3>{founder.name}</h3>
                <span className="founder-role">{founder.role}</span>
                <p>{founder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;