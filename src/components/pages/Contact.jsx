import React from "react";
import "./Contact.css";

const COMPANY_PHONE = "+91-8700866381";
const COMPANY_EMAIL = "Rohit@neodhan.com";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Background Animation */}
      <div className="contact-bg-animation">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="contact-animated-circle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${5 + Math.random() * 8}s`
          }} />
        ))}
      </div>
      <div className="contact-card">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="contact-row">
            <span className="contact-label">Phone:</span>
            <a href={`tel:${COMPANY_PHONE}`} className="contact-link">{COMPANY_PHONE}</a>
          </div>
          <div className="contact-row">
            <span className="contact-label">Email:</span>
            <a href={`mailto:${COMPANY_EMAIL}`} className="contact-link">{COMPANY_EMAIL}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
