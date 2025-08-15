import React, { useState, useEffect } from 'react';
import './PartnersCarousel.css';
import kosh from "../../assets/images/kosh.png";
import payme2 from "../../assets/images/payme2.png";
import midhaCap from "../../assets/images/midha_cap.png";
import niviloans from "../../assets/images/niviloans.png";
import payme from "../../assets/images/payme.png";
import keshvacredit from "../../assets/images/keshvacredit.jpeg";
import grameenFoundation from "../../assets/images/grameen-foundation.jpg";
import spheetiFin from "../../assets/images/spheeti_fin.jpeg";
import spheetiFin2 from "../../assets/images/spheeti_fin2.jpeg";

const PartnersCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    {
      name: "Kosh",
      logo: kosh,
      description: "YC W20 Fintech Platform"
    },
    {
      name: "PayMe",
      logo: payme2,
      description: "Digital Payment Solutions"
    },
    {
      name: "Midha Capital",
      logo: midhaCap,
      description: "Financial Services"
    },
    {
      name: "NiviLoans",
      logo: niviloans,
      description: "Tailored Loan Solutions"
    },
    {
      name: "PayMe",
      logo: payme,
      description: "Payment Gateway"
    },
    {
      name: "KeshvaCredit",
      logo: keshvacredit,
      description: "Credit Solutions"
    },
    {
      name: "Grameen Foundation",
      logo: grameenFoundation,
      description: "Financial Inclusion"
    },
    {
      name: "Spheeti Fintech",
      logo: spheetiFin,
      description: "Fintech Solutions"
    },
    {
      name: "Spheeti",
      logo: spheetiFin2,
      description: "Digital Finance"
    }
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= partners.length) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [partners.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return partners.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= partners.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  return (
    <section className="partners-section">
      {/* Background Animation */}
      <div className="partners-bg-animation">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="partners-animated-circle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }} />
        ))}
      </div>

      <div className="section-header">
        <span className="section-tag">Strategic Partnerships</span>
        <h2>Trusted by Leading <span className="gradient-text">Financial Institutions</span></h2>
        <p className="section-description">Partnering with industry leaders to deliver exceptional financial solutions</p>
      </div>

      <div className="partners-carousel-container">
        <div className="carousel-track">
          <button className="carousel-btn prev-btn" onClick={handlePrev}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="partners-carousel-wrapper">
            <div 
              className="partners-carousel"
              style={{
                transform: `translateX(-${currentIndex * (100 / 6)}%)`
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div key={index} className="partner-card">
                  <div className="partner-card-inner">
                    <div className="partner-logo">
                      <img src={partner.logo} alt={partner.name} />
                    </div>
                    <div className="partner-glow"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next-btn" onClick={handleNext}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="carousel-indicators">
          {partners.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel; 