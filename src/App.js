import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Careers from './components/pages/Careers';
import Blog from './components/pages/Blog';
import ReferralProgram from './components/pages/ReferralProgram';
import './App.css';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <Router>
      <div className="App">
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
          </Routes>
        </main>
        <Footer />
        <Analytics />
        </div>
    </Router>
  );
}

export default App;