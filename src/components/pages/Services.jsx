import React from "react";
import "./Services.css";

import businessLoan from "../../assets/images/business.png";
import personalLoan from "../../assets/images/personlaLoan.png";
import salariedLoan from "../../assets/images/salaried.png";
import msmeLoan from "../../assets/images/msme.png";
import loanProperty from "../../assets/images/property.png";
import why from "../../assets/images/why.png";

const loanTypes = [
  {
    title: "MSME Loans",
    desc: "Empower your micro, small, or medium enterprise with our specialized loan schemes. Quick approval and flexible terms.",
    img: msmeLoan,
    number: "01",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Loan Against Property",
    desc: "Get instant access to funds by pledging your property as collateral. Secure and flexible loan options.",
    img: loanProperty,
    number: "02",
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Cattle Loans",
    desc: "Support your agricultural and livestock business with specialized cattle loans. Flexible terms for dairy farmers and cattle owners.",
    img: require("../../assets/images/cow.jpg"), // Using cow.jpg for cattle loans
    number: "03",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Personal Loans",
    desc: "Instant funds for life's unexpected expenses. Flexible repayment and competitive rates for individuals.",
    img: personalLoan,
    number: "04",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Salaried Loans",
    desc: "Access quick funds designed for salaried individuals. Simple process, flexible terms and instant approval.",
    img: salariedLoan,
    number: "05",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Home Loans",
    desc: "Realize your dream of owning a home with our competitive home loan options. Low interest rates and flexible EMI.",
    img: require("../../assets/images/home.jpg"), // Using home.jpg for home loans
    number: "06",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  }
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        {/* Background Animation */}
        <div className="services-bg-animation">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="services-animated-circle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} />
          ))}
        </div>
        
        <div className="hero-content">
          <span className="section-tag">Premium Services</span>
          <h1>Comprehensive Financial <span className="gradient-text">Solutions</span></h1>
          <p>Discover our range of tailored loan products designed to meet your unique financial needs with AI-powered processing</p>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="loan-types-section">
        {/* Background Animation */}
        <div className="loan-bg-animation">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="loan-animated-circle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} />
          ))}
        </div>
        
        <div className="section-header">
          <span className="section-tag">Loan Products</span>
          <h2>Choose the Right <span className="gradient-text">Loan</span> for You</h2>
          <p className="section-description">From MSME to Home Loans, we offer comprehensive financial solutions for every need</p>
        </div>
        <div className="loan-cards-grid">
          {loanTypes.map((loan, idx) => (
            <div className="loan-card" key={idx}>
              <div className="loan-card-inner">
                <div className="loan-card-content">
                  <div className="loan-icon">{loan.icon}</div>
                  <div className="loan-number">{loan.number}</div>
                  <h3>{loan.title}</h3>
                  <p>{loan.desc}</p>
                </div>
                <div className="loan-image">
                  <img src={loan.img} alt={loan.title} />
                  <div className="loan-image-glow"></div>
                </div>
                <div className="loan-card-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        {/* Background Animation */}
        <div className="why-bg-animation">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="why-animated-circle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} />
          ))}
        </div>
        
        <div className="why-choose-content">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>Benefits That Make Us <span className="gradient-text">Stand Out</span></h2>
            <p className="section-description">Experience the difference with our AI-powered platform and customer-centric approach</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-card-inner">
                <div className="benefit-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>Low Interest Rates</h3>
                <p>Competitive rates that make your loan experience affordable and manageable</p>
                <div className="benefit-glow"></div>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-card-inner">
                <div className="benefit-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3>Fast Processing</h3>
                <p>Quick and efficient loan processing to help you achieve your goals faster</p>
                <div className="benefit-glow"></div>
              </div>
            </div>

            <div className="benefit-card">
              <div className="benefit-card-inner">
                <div className="benefit-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3>Minimal Documentation</h3>
                <p>Streamlined application process with minimal paperwork requirements</p>
                <div className="benefit-glow"></div>
              </div>
            </div>
          </div>

          <div className="stats-container">
            <div className="stats-card">
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <p>Customer Satisfaction</p>
              </div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <p>Monthly Active Users</p>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <p>New Customers Weekly</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;