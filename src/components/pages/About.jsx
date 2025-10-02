import React from 'react';
import './About.css';
import PartnersCarousel from '../common/PartnersCarousel';
import person1 from "../../assets/images/rohit.png";
import person2 from "../../assets/images/shivam.png";
import sahilBansal from "../../assets/images/sahil-bansal.png";
import rahulDube from "../../assets/images/Rahul_Dube.jpeg";


function About() {
  const loanStats = [
    { number: "$300B+", label: "Credit Gap Addressed" },
    { number: "Tier 2-4", label: "India Focus" },
    { number: "AI-First", label: "Technology Stack" },
    { number: "DPI Compliant", label: "Digital Public Infrastructure" }
  ];

  const awards = [
    { year: "2025", title: "Best Fintech Startup of the Year", organization: "India Fintech Awards" },
    { year: "2025", title: "Excellence in Customer Service", organization: "Banking Tech Awards" },
    { year: "2025", title: "Most Innovative Loan Platform", organization: "Financial Innovation Summit" }
  ];

  const founders = [
    { 
      name: "Rohit Kumar",
      role: "Founder & CEO",
      image: person1,
      description: "With over 10 years of experience in financial services, Rohit leads our vision to revolutionize lending."
    },
    { 
      name: "Shivam Sharma",
      role: "Co-Founder",
      image: person2,
      description: "Passionate about fintech innovation, Shivam drives our technology and growth strategies to deliver exceptional customer experiences."
    },
  ];

  const advisors = [
    {
      name: "Sahil Bansal",
      role: "Advisor",
      company: "Co-Founder of Kosh (YC W20)",
      image: sahilBansal,
      description: "Bringing deep expertise in fintech and startup scaling from his experience at Y Combinator-backed Kosh."
    },
    {
      name: "Coming Soon",
      role: "Advisor",
      company: "We will add him soon",
      image: null,
      description: "We are excited to announce our next advisor soon. Stay tuned for updates!"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        {/* Background Animation */}
        <div className="about-bg-animation">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="about-animated-circle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} />
          ))}
        </div>
        
        <div className="hero-content">
          <span className="section-tag">About Neodhan</span>
          <h1>AI-Powered Credit Access for <span className="gradient-text">Bharat's MSMEs</span></h1>
          <p>Neodhan is a fintech lending startup empowering MSMEs, women entrepreneurs, and SHGs in Tier 2–4 India with timely, affordable, and dignified credit. We bridge India's $300+ billion MSME credit gap using AI-driven underwriting, Early Warning System, and Digital Public Infrastructure.</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        {/* Background Animation */}
        <div className="why-bg-animation">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="why-animated-circle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} />
          ))}
        </div>
        
        <div className="section-header">
          <span className="section-tag">Our MOAT</span>
          <h2>Why Neodhan is <span className="gradient-text">Different & Strong</span></h2>
          <p className="section-description">Our unique combination of AI-first technology, Digital Public Infrastructure, and deep understanding of Bharat's MSME ecosystem sets us apart</p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>AI-Driven Underwriting</h3>
              <p>Real-time risk scoring using alternative data, bureau data, and cash-flow analysis for instant credit decisions</p>
              <div className="feature-glow"></div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3>Fraud & Early Warning AI</h3>
              <p>Proactive fraud detection and early warning systems to ensure sustainable lending practices</p>
              <div className="feature-glow"></div>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-card-inner">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3>Multilingual Support</h3>
              <p>Native support for Hindi, English, Marathi, and Gujarati to serve Bharat's diverse MSME ecosystem</p>
              <div className="feature-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        {/* Background Animation */}
        <div className="stats-bg-animation">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="stats-animated-circle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} />
          ))}
        </div>
        
        <div className="stats-grid">
          {loanStats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-card-inner">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
                <div className="stat-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="tech-stack-section">
        {/* Background Animation */}
        <div className="tech-bg-animation">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="tech-animated-circle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} />
          ))}
        </div>
        
        <div className="section-header">
          <span className="section-tag">Technology Stack</span>
          <h2>Our <span className="gradient-text">AI-Powered Infrastructure</span></h2>
          <p className="section-description">Leveraging cutting-edge AI technology integrated with India's Digital Public Infrastructure to deliver seamless, compliant, and scalable credit solutions across Bharat's diverse MSME landscape</p>
        </div>
        <div className="awards-grid">
          <div className="award-card">
            <div className="award-card-inner">
              <div className="award-year">01</div>
              <h3>AI-Driven Underwriting Engine</h3>
              <p>Real-time risk scoring using alternative data, bureau data, and cash-flow analysis for instant credit decisions</p>
              <div className="award-glow"></div>
            </div>
          </div>
          <div className="award-card">
            <div className="award-card-inner">
              <div className="award-year">02</div>
              <h3>Fraud & Early Warning AI</h3>
              <p>Proactive fraud detection and early warning systems to ensure sustainable lending practices</p>
              <div className="award-glow"></div>
            </div>
          </div>
          <div className="award-card">
            <div className="award-card-inner">
              <div className="award-year">03</div>
              <h3>Embedded Lending APIs</h3>
              <p>Plug-and-play infrastructure for NBFCs, MFIs, and BCNs to integrate credit solutions</p>
              <div className="award-glow"></div>
            </div>
          </div>
          <div className="award-card">
            <div className="award-card-inner">
              <div className="award-year">04</div>
              <h3>RegTech Alignment</h3>
              <p>Compliance-first design with regulatory frameworks including Account Aggregator, CKYC, Open Credit Enablement Network (OCEN), Open Network for Digital Commerce (ONDC), and Unified Lending Interface (ULI)</p>
              <div className="award-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        {/* Background Animation */}
        <div className="awards-bg-animation">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="awards-animated-circle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} />
          ))}
        </div>
        
        <div className="section-header">
          <span className="section-tag">Recognition</span>
          <h2>Our <span className="gradient-text">Achievements</span></h2>
          <p className="section-description">Recognized for excellence in fintech innovation and customer service</p>
        </div>
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={index} className="award-card">
              <div className="award-card-inner">
                <div className="award-year">{award.year}</div>
                <h3>{award.title}</h3>
                <p>{award.organization}</p>
                <div className="award-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="founders-section">
        {/* Background Animation */}
        <div className="founders-bg-animation">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="founders-animated-circle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} />
          ))}
        </div>
        
        <div className="section-header">
          <span className="section-tag">Leadership</span>
          <h2>Meet Our <span className="gradient-text">Team</span></h2>
          <p className="section-description">Meet the visionaries behind Neodhan's success story</p>
        </div>
        <div className="founders-grid">
          {founders.map((founder, index) => (
            <div key={index} className="founder-card">
              <div className="founder-card-inner">
                <div className="founder-image">
                  <img src={founder.image} alt={founder.name} />
                  <div className="founder-image-glow"></div>
                </div>
                <div className="founder-info">
                  <h3>{founder.name}</h3>
                  <span className="founder-role">{founder.role}</span>
                  <p>{founder.description}</p>
                </div>
                <div className="founder-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisors Section */}
      <section className="advisors-section">
        {/* Background Animation */}
        <div className="advisors-bg-animation">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="advisors-animated-circle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} />
          ))}
        </div>
        
        <div className="section-header">
          <span className="section-tag">Advisory Board</span>
          <h2>Meet Our <span className="gradient-text">Advisors</span></h2>
          <p className="section-description">Expert guidance from industry leaders and fintech pioneers</p>
        </div>
        <div className="advisors-grid">
          {advisors.map((advisor, index) => (
            <div key={index} className="advisor-card">
              <div className="advisor-card-inner">
                <div className="advisor-image">
                  {advisor.image ? (
                    <img src={advisor.image} alt={advisor.name} />
                  ) : (
                    <div className="coming-soon-placeholder">
                      <span>Coming Soon</span>
                    </div>
                  )}
                  <div className="advisor-image-glow"></div>
                </div>
                <div className="advisor-info">
                  <h3>{advisor.name}</h3>
                  <span className="advisor-role">{advisor.role}</span>
                  <span className="advisor-company">{advisor.company}</span>
                  <p>{advisor.description}</p>
                </div>
                <div className="advisor-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <PartnersCarousel />
    </div>
  );
}

export default About;