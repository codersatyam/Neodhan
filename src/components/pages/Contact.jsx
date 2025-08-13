import React from "react";
import "./Contact.css";

const COMPANY_PHONE = "+91-8700866381";
const COMPANY_EMAIL = "Rohit@neodhan.com";
const SHIVAM_EMAIL = "shivam@neodhan.com";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Background Animation */}
      <div className="contact-bg-animation">
        {[...Array(15)].map((_, i) => (
          <span key={i} className="contact-animated-circle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${5 + Math.random() * 8}s`
          }} />
        ))}
      </div>

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-container">
          <div className="contact-hero-content">
            <span className="contact-tag">Get In Touch</span>
            <h1>Let's <span className="gradient-text">Connect</span></h1>
            <p className="contact-subtitle">
              Ready to transform your financial future? Reach out to our team and let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Phone Card */}
            <div className="contact-card">
              <div className="contact-card-inner">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3>Call Us</h3>
                <p className="contact-description">Speak directly with our team</p>
                <a href={`tel:${COMPANY_PHONE}`} className="contact-link">
                  {COMPANY_PHONE}
                </a>
                <span className="contact-hours">Available: 9 AM - 6 PM</span>
                <div className="contact-glow"></div>
              </div>
            </div>

            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-card-inner">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3>Email Us</h3>
                <p className="contact-description">Send us a message anytime</p>
                <a href={`mailto:${COMPANY_EMAIL}`} className="contact-link">
                  {COMPANY_EMAIL}
                </a>
                <span className="contact-hours">We'll respond within 24 hours</span>
                <div className="contact-glow"></div>
              </div>
            </div>

            {/* Co-Founder Card */}
            <div className="contact-card">
              <div className="contact-card-inner">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3>Co-Founder</h3>
                <p className="contact-description">Direct line to our leadership</p>
                <a href={`mailto:${SHIVAM_EMAIL}`} className="contact-link">
                  {SHIVAM_EMAIL}
                </a>
                <span className="contact-hours">For strategic partnerships</span>
                <div className="contact-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="contact-container">
          <div className="cta-card">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of satisfied customers who have transformed their financial future with Neodhan.</p>
            <div className="cta-buttons">
              <a href={`tel:${COMPANY_PHONE}`} className="cta-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a href={`mailto:${COMPANY_EMAIL}`} className="cta-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
