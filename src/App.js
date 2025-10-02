import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Careers from './components/pages/Careers';
import Blog from './components/pages/Blog';
import ReferralProgram from './components/pages/ReferralProgram';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfUse from './components/pages/TermsOfUse';
import FAQ from './components/pages/FAQ';
import './App.css';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/referral-program" element={<ReferralProgram />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
          <Analytics />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;