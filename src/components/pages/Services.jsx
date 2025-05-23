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
    title: "Personal Loans",
    desc: "Instant funds for life's unexpected expenses. Flexible repayment and competitive rates.",
    img: personalLoan,
    number: "01",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Salaried Loans",
    desc: "Access quick funds designed for salaried individuals. Simple process, flexible terms.",
    img: salariedLoan,
    number: "02",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Business Loans",
    desc: "Grow your business with or without collateral. Competitive rates and easy repayment.",
    img: businessLoan,
    number: "03",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "MSME Loans",
    desc: "Empower your micro, small, or medium enterprise with our specialized loan schemes.",
    img: msmeLoan,
    number: "04",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: "Loan against property",
    desc: "Get instant access to funds by pledging your property as collateral. Secure and flexible loan options.",
    img: loanProperty,
    number: "05",
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <span className="section-tag">Our Services</span>
          <h1>Comprehensive Financial <span className="gradient-text">Solutions</span></h1>
          <p>Discover our range of tailored loan products designed to meet your unique financial needs</p>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="loan-types-section">
        <div className="section-header">
          <span className="section-tag">Loan Products</span>
          <h2>Choose the Right <span className="gradient-text">Loan</span> for You</h2>
        </div>
        <div className="loan-cards-grid">
          {loanTypes.map((loan, idx) => (
            <div className="loan-card" key={idx}>
              <div className="loan-card-content">
                <div className="loan-icon">{loan.icon}</div>
                <div className="loan-number">{loan.number}</div>
                <h3>{loan.title}</h3>
                <p>{loan.desc}</p>
              </div>
              <div className="loan-image">
                <img src={loan.img} alt={loan.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="why-choose-content">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2>Benefits That Make Us <span className="gradient-text">Stand Out</span></h2>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Low Interest Rates</h3>
              <p>Competitive rates that make your loan experience affordable and manageable</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>Fast Processing</h3>
              <p>Quick and efficient loan processing to help you achieve your goals faster</p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Minimal Documentation</h3>
              <p>Streamlined application process with minimal paperwork requirements</p>
            </div>
          </div>

          <div className="stats-container">
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
      </section>
    </div>
  );
};

export default Services;