import React, { useState } from "react";
import "./Contact.css";
import SEO from '../common/SEO';

const COMPANY_PHONE = "+91-8700866381";
const COMPANY_EMAIL = "founders@neodhan.com";
const ROHIT_EMAIL = "rohit@neodhan.com";
const SHIVAM_EMAIL = "shivam@neodhan.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    loanType: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us - Neodhan"
        description="Get in touch with Neodhan's team for AI-powered MSME lending solutions. Call, email, or send us a message."
        keywords="contact Neodhan, customer support, MSME loans, fintech support, loan inquiry"
      />
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
                <span className="contact-hours">Available: 9 AM - 7 PM</span>
                <div className="contact-glow"></div>
              </div>
            </div>

            {/* General Email Card */}
            <div className="contact-card">
              <div className="contact-card-inner">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3>General Inquiries</h3>
                <p className="contact-description">For general questions and support</p>
                <a href={`mailto:${COMPANY_EMAIL}`} className="contact-link">
                  {COMPANY_EMAIL}
                </a>
                <span className="contact-hours">We'll respond within 24 hours</span>
                <div className="contact-glow"></div>
              </div>
            </div>

            {/* Rohit Card */}
            <div className="contact-card">
              <div className="contact-card-inner">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3>Rohit - Founder & CEO</h3>
                <p className="contact-description">Direct line to our leadership</p>
                <a href={`mailto:${ROHIT_EMAIL}`} className="contact-link">
                  {ROHIT_EMAIL}
                </a>
                <span className="contact-hours">For business partnerships</span>
                <div className="contact-glow"></div>
              </div>
            </div>

            {/* Shivam Card */}
            <div className="contact-card">
              <div className="contact-card-inner">
                <div className="contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3>Shivam - Co-Founder & CTO</h3>
                <p className="contact-description">Direct line to our leadership</p>
                <a href={`mailto:${SHIVAM_EMAIL}`} className="contact-link">
                  {SHIVAM_EMAIL}
                </a>
                <span className="contact-hours">For Strategic & Technology partnerships</span>
                <div className="contact-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="contact-container">
          <div className="contact-form-container">
            <div className="form-header">
              <h2>Send us a Message</h2>
              <p>Fill out the form below and we'll get back to you within 24 hours</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="loanType">Loan Type</label>
                  <select
                    id="loanType"
                    name="loanType"
                    value={formData.loanType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select loan type</option>
                    <option value="msme">MSME Loan</option>
                    <option value="personal">Personal Loan</option>
                    <option value="property">Loan Against Property</option>
                    <option value="cattle">Cattle Loan</option>
                    <option value="salaried">Salaried Loan</option>
                    <option value="home">Home Loan</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What is this about?"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell us more about your requirements..."
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Office Hours & Support Section */}
      <section className="contact-support-section">
        <div className="contact-container">
          <div className="support-grid">
            <div className="support-card">
              <div className="support-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Office Hours</h3>
              <p>Monday - Saturday</p>
              <p className="support-time">9:00 AM - 7:00 PM</p>
              <p className="support-note">Sunday: Emergency support only</p>
            </div>
            <div className="support-card">
              <div className="support-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3>Emergency Support</h3>
              <p>24/7 AI Chatbot</p>
              <p className="support-time">Instant responses</p>
              <p className="support-note">For urgent queries</p>
            </div>
            <div className="support-card">
              <div className="support-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5 5 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3>Multilingual Support</h3>
              <p>Hindi, English, Marathi, Gujarati</p>
              <p className="support-time">Native language support</p>
              <p className="support-note">For better understanding</p>
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
