import React, { useState } from 'react';
import './ReferralProgram.css';

const ReferralProgram = () => {
  const [activeTab, setActiveTab] = useState('financial');

  const financialProducts = [
    {
      name: 'Personal Loans',
      commission: 'Attractive commissions',
      description: 'Help customers get quick personal loans with competitive rates',
      icon: '💰',
      requirements: 'Basic financial knowledge'
    },
    {
      name: 'Business Loans',
      commission: 'High-value commissions',
      description: 'Connect businesses with MSME and business loan solutions',
      icon: '🏢',
      requirements: 'Business networking skills'
    },
    {
      name: 'Property Loans',
      commission: 'Premium commissions',
      description: 'Assist customers with home and property financing',
      icon: '🏠',
      requirements: 'Real estate knowledge'
    },
    {
      name: 'Payroll Services',
      commission: 'Recurring commissions',
      description: 'Help businesses streamline their payroll processes',
      icon: '💼',
      requirements: 'HR knowledge'
    }
  ];

  const benefits = [
    {
      title: 'Unlock extra income for all your needs',
      description: 'Earn money by helping others access financial solutions',
      icon: '💸'
    },
    {
      title: 'Work from Anywhere & Anytime',
      description: 'You don\'t need to go to an office or follow fixed working hours—we are flexible',
      icon: '🌍'
    },
    {
      title: 'Zero Investment Business',
      description: 'Find customers and earn money online without investment like you always wanted',
      icon: '🚀'
    },
    {
      title: 'Instant Payout',
      description: 'No more waiting for weeks to get your sales earning! Get your online earning the moment your sale is success',
      icon: '⚡'
    },
    {
      title: 'Attend Trainings',
      description: 'Get trained by our experts and enroll for online courses to learn how to sell and earn money online',
      icon: '🎓'
    }
  ];

  return (
    <div className="referral-page">
      {/* Background Animation */}
      <div className="referral-bg-animation">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="referral-animated-circle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }} />
        ))}
      </div>

      {/* Hero Section */}
      <section className="referral-hero">
        <div className="referral-container">
          <div className="referral-hero-content">
            <div className="referral-tag">Made for India, Made in India</div>
            <h1 className="referral-title">
              Sell Financial Products & <span className="gradient-text">Earn Real Money Online!</span>
            </h1>
            <p className="referral-subtitle">
              Join our financial products referral program and start earning attractive commissions by helping customers access loans, 
              business solutions, and financial services. Start earning from day one!
            </p>
            
            {/* Mobile Phone UPI Payment Visualization */}
            <div className="mobile-payment-visual">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="upi-payment">
                    <div className="payment-header">
                      <div className="bank-logo">🏦</div>
                      <div className="payment-title">UPI Payment Success</div>
                    </div>
                    <div className="payment-amount">
                      <span className="amount-label">You have earned</span>
                      <span className="amount-value">₹30,000</span>
                    </div>
                    <div className="payment-status">
                      <span className="status-icon">✅</span>
                      <span className="status-text">Payment Successful</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="referral-stats">
              <div className="referral-stat">
                <span className="stat-number">₹15k-20k</span>
                <span className="stat-label">Average Monthly Earnings</span>
              </div>
              <div className="referral-stat">
                <span className="stat-number">30+</span>
                <span className="stat-label">Active Referrers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="referral-container">
          <div className="section-header">
            <div className="section-tag">Why Choose Us</div>
            <h2>Unlock Your Earning Potential</h2>
            <p className="section-description">
              Join thousands of successful referrers and start earning today with our comprehensive benefits.
            </p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="referral-container">
          <div className="section-header">
            <div className="section-tag">Simple Process</div>
            <h2>How It Works</h2>
            <p className="section-description">
              Start earning in just 3 simple steps. Our platform makes it easy to refer and earn.
            </p>
          </div>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">1</div>
              <h3>Contact Us</h3>
              <p>Email us at founders@neodhan.com with your business details</p>
            </div>
            <div className="step-card">
              <div className="step-icon">2</div>
              <h3>Refer & Share</h3>
              <p>Share our financial products with potential customers in your network</p>
            </div>
            <div className="step-card">
              <div className="step-icon">3</div>
              <h3>Earn Commissions</h3>
              <p>Get paid instantly when your referrals complete transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Products Section */}
      <section className="products-section">
        <div className="referral-container">
          <div className="section-header">
            <div className="section-tag">Our Financial Products</div>
            <h2>Empowering India's Financial Ecosystem</h2>
            <p className="section-description">
              We provide comprehensive financial solutions for individuals and businesses across India.
            </p>
          </div>

          <div className="solutions-grid">
            {financialProducts.map((product, index) => (
              <div key={index} className="solution-card">
                <div className="solution-icon">{product.icon}</div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-commission">{product.commission}</div>
                <div className="product-requirements">
                  <strong>Requirements:</strong> {product.requirements}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="referral-container">
          <div className="cta-card">
            <h2>Ready to Start Earning?</h2>
            <p>Join thousands of successful referrers and start earning today with our financial products referral program.</p>
            <div className="cta-buttons">
              <a href="mailto:founders@neodhan.com" className="cta-primary">Contact Us</a>
              <button className="cta-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferralProgram; 