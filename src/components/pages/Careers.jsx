import React from 'react';
import './Careers.css';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      type: "Full-time",
      location: "Remote",
      experience: "3-5 years",
      description: "We're looking for a passionate Full Stack Developer to join our team and help build innovative fintech solutions.",
      requirements: [
        "Strong experience with React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS/GCP)",
        "Knowledge of fintech and payment systems",
        "Excellent problem-solving skills"
      ]
    },
    {
      title: "Product Manager",
      type: "Full-time",
      location: "Hybrid (Delhi)",
      experience: "2-4 years",
      description: "Join us in shaping the future of digital lending with your product vision and execution skills.",
      requirements: [
        "Experience in fintech or B2B SaaS products",
        "Strong analytical and user research skills",
        "Experience with agile methodologies",
        "Excellent communication skills"
      ]
    },
    {
      title: "Business Development Manager",
      type: "Full-time",
      location: "On-site (Delhi)",
      experience: "2-3 years",
      description: "Help us expand our partnerships and grow our customer base in the fintech ecosystem.",
      requirements: [
        "Experience in B2B sales or partnerships",
        "Knowledge of fintech industry",
        "Strong networking skills",
        "Results-driven approach"
      ]
    }
  ];

  const benefits = [
    {
      icon: "💼",
      title: "Competitive Salary",
      description: "Attractive compensation with equity options"
    },
    {
      icon: "🏠",
      title: "Flexible Work",
      description: "Remote and hybrid work options available"
    },
    {
      icon: "📈",
      title: "Growth Opportunities",
      description: "Fast-paced environment with rapid career growth"
    },
    {
      icon: "🎯",
      title: "Impact",
      description: "Make a real difference in people's financial lives"
    }
  ];

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="hero-content">
          <span className="section-tag">Join Our Team</span>
          <h1>Build the Future of <span className="gradient-text">Fintech</span></h1>
          <p>Join our mission to democratize access to financial services and help millions of people achieve their dreams.</p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join-section">
        <div className="section-header">
          <span className="section-tag">Why Join Us</span>
          <h2>Why Work at <span className="gradient-text">Neodhan</span></h2>
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
      </section>

      {/* Job Openings Section */}
      <section className="jobs-section">
        <div className="section-header">
          <span className="section-tag">Open Positions</span>
          <h2>Current <span className="gradient-text">Openings</span></h2>
        </div>
        <div className="jobs-grid">
          {jobOpenings.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-header">
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span className="job-type">{job.type}</span>
                  <span className="job-location">{job.location}</span>
                  <span className="job-experience">{job.experience}</span>
                </div>
              </div>
              <p className="job-description">{job.description}</p>
              <div className="job-requirements">
                <h4>Requirements:</h4>
                <ul>
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
              </div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="careers-contact">
        <div className="contact-content">
          <h2>Don't See the Right Role?</h2>
          <p>We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.</p>
          <a href="mailto:careers@neodhan.com" className="contact-btn">Send Your Resume</a>
        </div>
      </section>
    </div>
  );
};

export default Careers; 