import React from 'react';
import './PartnersCarousel.css';
import kosh from "../../assets/images/kosh.png";
import payme from "../../assets/images/payme.png";
import midhaCap from "../../assets/images/midha_cap.png";
import niviloans from "../../assets/images/niviloans.png";
import keshvacredit from "../../assets/images/keshvacredit.jpeg";
import grameenFoundation from "../../assets/images/grameen-foundation.jpg";
import spheeti from "../../assets/images/spheeti.png";
import niyo from "../../assets/images/niyo.png";

const PartnersCarousel = () => {
  const partners = [
    {
      name: "Kosh",
      logo: kosh
    },
    {
      name: "PayMe",
      logo: payme
    },
    {
      name: "Midha Capital",
      logo: midhaCap
    },
    {
      name: "NiviLoans",
      logo: niviloans
    },
    {
      name: "KeshvaCredit",
      logo: keshvacredit
    },
    {
      name: "Grameen Foundation",
      logo: grameenFoundation
    },
    {
      name: "Spheeti Fintech",
      logo: spheeti
    },
    {
      name: "Niyokraft",
      logo: niyo
    }
  ];

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

      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <div className="partner-card-inner">
              <div className="partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
              <div className="partner-info">
                <h3>{partner.name}</h3>
              </div>
              <div className="partner-glow"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersCarousel; 