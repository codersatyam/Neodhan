import React, { useState } from 'react';
import './ReferralProgram.css';

const ReferralProgram = () => {
  const [activeTab, setActiveTab] = useState('saas');

  const referralProducts = {
    saas: [
      {
        name: 'AI-Powered Infrastructure',
        commission: '₹10,000 - ₹25,000',
        description: 'High-value commissions for enterprise SaaS referrals',
        icon: '🤖',
        requirements: 'Business requirements, technical specs'
      },
      {
        name: 'Financial Analytics Platform',
        commission: '₹15,000 - ₹35,000',
        description: 'Premium commissions for analytics platform',
        icon: '📈',
        requirements: 'Data requirements, integration needs'
      },
      {
        name: 'Digital Banking Solutions',
        commission: '₹20,000 - ₹50,000',
        description: 'Maximum earnings for enterprise solutions',
        icon: '🏦',
        requirements: 'Banking license, compliance docs'
      }
    ]
  };

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Tech Consultant',
      earnings: '₹2,45,000',
      text: 'The referral program has been a game-changer for my income. Neodhan\'s platform makes it so easy to refer clients and track earnings.'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Business Consultant',
      earnings: '₹3,67,000',
      text: 'I\'ve earned over ₹3.5 lakhs in just 6 months through their SaaS referrals. The commission structure is very attractive.'
    },
    {
      name: 'Anita Patel',
      role: 'IT Solutions Provider',
      earnings: '₹1,89,000',
      text: 'Enterprise SaaS referrals have been my best source of income. Neodhan\'s process is smooth and payments are always on time.'
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
            <div className="referral-tag">Earn with Neodhan</div>
            <h1 className="referral-title">
              Join Our <span className="gradient-text">Referral Program</span>
            </h1>
            <p className="referral-subtitle">
              Earn attractive commissions by referring businesses for our cutting-edge Tech SaaS solutions. 
              Start earning from day one with our comprehensive referral program.
            </p>
            <div className="referral-stats">
              <div className="referral-stat">
                <span className="stat-number">₹50,000+</span>
                <span className="stat-label">Average Monthly Earnings</span>
              </div>
              <div className="referral-stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Active Referrers</span>
              </div>
              <div className="referral-stat">
                <span className="stat-number">₹2.5Cr+</span>
                <span className="stat-label">Total Payouts</span>
              </div>
            </div>
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
              <p>Share our solutions with potential clients in your network</p>
            </div>
            <div className="step-card">
              <div className="step-icon">3</div>
              <h3>Earn Commissions</h3>
              <p>Get paid instantly when your referrals complete transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="referral-container">
          <div className="section-header">
            <div className="section-tag">Our Solutions</div>
            <h2>Empowering India's lending ecosystem with AI-powered embedded finance</h2>
            <p className="section-description">
              We provide comprehensive technology solutions for the financial sector.
            </p>
          </div>

          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">🤖</div>
              <h3>AI-Powered Infrastructure</h3>
            </div>
            <div className="solution-card">
              <div className="solution-icon">🏦</div>
              <h3>Financial Technology Solutions</h3>
            </div>
            <div className="solution-card">
              <div className="solution-icon">📊</div>
              <h3>Embedded Finance Platform</h3>
            </div>
            <div className="solution-card">
              <div className="solution-icon">🔗</div>
              <h3>Enterprise Integration Services</h3>
            </div>
            <div className="solution-card">
              <div className="solution-icon">💼</div>
              <h3>Digital Transformation Solutions</h3>
            </div>
            <div className="solution-card">
              <div className="solution-icon">🔍</div>
              <h3>Advanced Analytics & Reporting</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="referral-container">
          <div className="section-header">
            <div className="section-tag">Success Stories</div>
            <h2>What Our Referrers Say</h2>
            <p className="section-description">
              Hear from our top performers and their success stories.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <p>"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                    </div>
                    <div className="author-earnings">
                      <span className="earnings-label">Total Earnings</span>
                      <span className="earnings-amount">{testimonial.earnings}</span>
                    </div>
                  </div>
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
            <p>Join thousands of successful referrers and start earning today.</p>
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