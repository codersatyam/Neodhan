import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import EmiCalculator from './EmiCalculator';
import heroImg from '../../assets/images/loan.png';
import step1 from '../../assets/images/personlaLoan.png';
import step2 from '../../assets/images/business.png';
import step3 from '../../assets/images/salaried.png';
import reviewer from '../../assets/images/reviewer.png';
import main from "../../assets/images/main.png"
import mainNew from "../../assets/images/main-new.png"

const testimonials = [
  {
    name: 'Rahul',
    role: 'Customer',
    img: reviewer,
    text: "Excellent services and amazing customer service. Team is very responsive and i really appreciate their customer relationship. I admire the promptness and instant support. I'm so thankful to the entire team for helping me when i needed it the most.",
    stars: 5
  },
  {
    name: 'Manoj kumar',
    role: 'Customer',
    img: reviewer,
    text: "Excellent hassle-free loan service. My loan got approved, processed and disbursed in just couple of hours. Recommend to anyone who's looking for urgent loan.",
    stars: 5
  }
];

function renderStars(count) {
  return (
    <div className="testimonial-stars">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
    </div>
  );
}

export default function Home() {
  const [loanAmount, setLoanAmount] = useState('100000');
  const [interestRate, setInterestRate] = useState('5');
  const [loanTenure, setLoanTenure] = useState('6');
  const [isUpdating, setIsUpdating] = useState(false);

  const handleInputChange = (setter) => (e) => {
    const value = parseFloat(e.target.value);
    setter(value);
    
    // Calculate and set the percentage for the gradient
    const min = parseFloat(e.target.min);
    const max = parseFloat(e.target.max);
    const percent = (value - min) / (max - min);
    e.target.style.setProperty('--value-percent', percent);
    setIsUpdating(true);
    setTimeout(() => setIsUpdating(false), 300);
  };

  const formatCurrency = (amount) => {
    if (!amount) return '0';
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateEMI = () => {
    if (!loanAmount || !interestRate || !loanTenure) return 0;
    const principal = parseFloat(loanAmount);
    const monthlyRate = parseFloat(interestRate) / 12 / 100;
    const months = parseFloat(loanTenure);
  
    const powerTerm = Math.pow(1 + monthlyRate, months);
    const emi = Math.round(
      (principal * monthlyRate * powerTerm) / (powerTerm - 1)
    );
    return isNaN(emi) ? 0 : emi;
  };

  const calculateTotalInterest = () => {
    const emi = calculateEMI();
    const months = parseFloat(loanTenure || 0);
    const totalAmount = emi * months;
    const principal = parseFloat(loanAmount || 0);
    const totalInterest = Math.round(totalAmount - principal);
    return isNaN(totalInterest) ? 0 : totalInterest;
  };

  const calculateTotalPayment = () => {
    const emi = calculateEMI();
    const months = parseFloat(loanTenure || 0);
    const totalAmount = Math.round(emi * months);
    return isNaN(totalAmount) ? 0 : totalAmount;
  };

  return (
    <div className="home">
      <div className="above-fold">
        {/* HERO SECTION */}
        <section className="hero-section">
          {/* Decorative animated blobs background */}
          <div className="hero-blobs">
            <div className="blob blob1" />
            <div className="blob blob2" />
            <div className="blob blob3" />
          </div>
          <div className="hero-container">
            <div className="hero-content">
              <h1>Get the Best Loan for Your Needs</h1>
              <p className="hero-sub">Compare, calculate, and apply for loans in minutes. 100% online, secure, and transparent.</p>
              <Link to="/contact" className="hero-cta">Contact Us</Link>
            </div>
            <div className="hero-img">
              <img src={mainNew} alt="Loan Hero" />
            </div>
          </div>
        </section>

        {/* LOAN PROCESS FLOW SECTION */}
        <section className="loan-process-section">
          <div className="process-header">
            <span className="process-tag">HOW IT WORKS</span>
            <h2>Simple & Easy Process</h2>
            <p className="process-description">Get your loan approved in just a few simple steps</p>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-icon">
                <div className="icon-circle">
                  <img src={require('../../assets/images/payroll.png')} alt="Application" />
                </div>
                <div className="step-number">01</div>
              </div>
              <div className="step-content">
                <h3>Submit Application</h3>
                <p>Fill out our simple online application form with your basic details</p>
              </div>
              <div className="step-connector"></div>
            </div>

            <div className="process-step">
              <div className="step-icon">
                <div className="icon-circle">
                  <img src={require('../../assets/images/reviewer.png')} alt="Review" />
                </div>
                <div className="step-number">02</div>
              </div>
              <div className="step-content">
                <h3>Document Review</h3>
                <p>Our team reviews your application and verifies the documents</p>
              </div>
              <div className="step-connector"></div>
            </div>

            <div className="process-step">
              <div className="step-icon">
                <div className="icon-circle">
                  <img src={require('../../assets/images/business.png')} alt="Approval" />
                </div>
                <div className="step-number">03</div>
              </div>
              <div className="step-content">
                <h3>Loan Approval</h3>
                <p>Get instant approval decision based on your eligibility</p>
              </div>
              <div className="step-connector"></div>
            </div>

            <div className="process-step">
              <div className="step-icon">
                <div className="icon-circle">
                  <img src={require('../../assets/images/loan.png')} alt="Disbursement" />
                </div>
                <div className="step-number">04</div>
              </div>
              <div className="step-content">
                <h3>Quick Disbursement</h3>
                <p>Receive funds directly in your bank account within 24 hours</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* EMI CALCULATOR SECTION */}
      <section className="emi-calculator-section">
        <div className="emi-container">
          <div className="emi-content">
            <div className="emi-header">
              <span className="section-tag">Calculator</span>
              <h2>Loan EMI Calculator</h2>
              <p>Plan your loan better with our easy EMI calculator</p>
            </div>

            <div className="calculator-grid">
              <div className="input-section">
                <div className="input-card">
                  <div className="input-header">
                    <h3>Loan Details</h3>
                    <p>Adjust the values to calculate your EMI</p>
                  </div>
                  
                  <div className="input-group">
                    <label className="input-label">
                      <div className="label-row">
                        <span>Loan Amount</span>
                        <span className="value-display">₹ {formatCurrency(loanAmount || 0)}</span>
                      </div>
                      <div className="slider-container">
                        <input
                          type="range"
                          min="100000"
                          max="5000000"
                          step="10000"
                          value={loanAmount || 100000}
                          onChange={handleInputChange(setLoanAmount)}
                          className="range-slider"
                        />
                        <div className="range-labels">
                          <span>₹1L</span>
                          <span>₹50L</span>
                        </div>
                      </div>
                    </label>

                    <label className="input-label">
                      <div className="label-row">
                        <span>Interest Rate</span>
                        <span className="value-display">{interestRate || 0}%</span>
                      </div>
                      <div className="slider-container">
                        <input
                          type="range"
                          min="5"
                          max="36"
                          step="0.1"
                          value={interestRate || 5}
                          onChange={handleInputChange(setInterestRate)}
                          className="range-slider"
                        />
                        <div className="range-labels">
                          <span>5%</span>
                          <span>36%</span>
                        </div>
                      </div>
                    </label>

                    <label className="input-label">
                      <div className="label-row">
                        <span>Loan Tenure</span>
                        <span className="value-display">{loanTenure || 0} Months</span>
                      </div>
                      <div className="slider-container">
                        <input
                          type="range"
                          min="6"
                          max="36"
                          step="1"
                          value={loanTenure || 1}
                          onChange={handleInputChange(setLoanTenure)}
                          className="range-slider"
                        />
                        <div className="range-labels">
                          <span>6 Months</span>
                          <span>36 Months</span>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="results-section">
                <div className="results-card">
                  <div className="results-header">
                    <h3>Payment Summary</h3>
                    <p>Based on your inputs</p>
                  </div>

                  <div className="results-grid">
                    <div className="result-item">
                      <div className="result-icon monthly">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="result-info">
                        <span className="result-label">Monthly EMI</span>
                        <span className="result-value">₹ {formatCurrency(calculateEMI())}</span>
                      </div>
                    </div>

                    <div className="result-item">
                      <div className="result-icon total">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="result-info">
                        <span className="result-label">Total Interest</span>
                        <span className="result-value">₹ {formatCurrency(calculateTotalInterest())}</span>
                      </div>
                    </div>

                    <div className="result-item">
                      <div className="result-icon payment">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="result-info">
                        <span className="result-label">Total Payment</span>
                        <span className="result-value">₹ {formatCurrency(calculateTotalPayment())}</span>
                      </div>
                    </div>
                  </div>

                  <div className="breakdown-chart">
                    <div className="chart-header">
                      <h4>Payment Breakdown</h4>
                      <div className="chart-legend">
                        <span><span className="dot principal"></span>Principal</span>
                        <span><span className="dot interest"></span>Interest</span>
                      </div>
                    </div>
                    <div className="chart-bar">
                      <div 
                        className="principal-bar"
                        style={{
                          width: `${(loanAmount / calculateTotalPayment()) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>

                  <Link to="/contact" className="apply-now-btn">
                    Contact Us
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonials-section modern-testimonials">
        <div className="testimonials-header">
          <span className="testimonials-subtitle">Testimonial</span>
          <h2 className="testimonials-title">We Care About Our Customers<br/>Experience Too</h2>
        </div>
        <div className="modern-testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="modern-testimonial-card">
              <div className="modern-testimonial-avatar">
                <img src={t.img} alt={t.name} />
              </div>
              <div className="modern-testimonial-name">{t.name}</div>
              <div className="modern-testimonial-role">{t.role}</div>
              <div className="modern-testimonial-text">{t.text}</div>
              <div className="modern-testimonial-stars">
                {[...Array(t.stars)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}