import React, { useState } from "react";
import "./FAQ.css";
import SEO from '../common/SEO';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What is Neodhan?",
          answer: "Neodhan is an AI-powered fintech platform that provides credit access to MSMEs (Micro, Small, and Medium Enterprises) in Tier 2-4 India. We use advanced AI technology, fraud detection, and Digital Public Infrastructure to offer fast, compliant, and dignified credit solutions."
        },
        {
          question: "How is Neodhan different from traditional banks?",
          answer: "Unlike traditional banks, Neodhan uses AI-driven underwriting that considers alternative data, cash flow patterns, and real-time risk assessment. We offer multilingual support (Hindi, English, Marathi, Gujarati), faster processing times, and are specifically designed for Bharat's MSME ecosystem."
        },
        {
          question: "What types of loans does Neodhan offer?",
          answer: "We offer MSME Loans, Loan Against Property (LAP), Cattle Loans, Personal Loans, Salaried Loans, and Home Loans. Each product is designed to meet specific needs of our customers with competitive rates and flexible terms."
        },
        {
          question: "Is Neodhan RBI registered?",
          answer: "Neodhan operates as a technology platform and works with RBI-registered NBFCs for loan disbursement. We ensure full compliance with all regulatory frameworks including Account Aggregator, CKYC, OCEN, ONDC, and Unified Lending Interface."
        }
      ]
    },
    {
      category: "Application Process",
      questions: [
        {
          question: "How do I apply for a loan?",
          answer: "You can apply for a loan through our website or mobile app. The process is simple: 1) Fill out the digital application form, 2) Our AI system performs risk assessment, 3) Compliance verification through regulatory frameworks, 4) Instant disbursement upon approval."
        },
        {
          question: "What documents do I need to apply?",
          answer: "Required documents include: Aadhaar Card, PAN Card, Bank statements (last 6 months), Business registration documents (for MSME loans), Income proof, and Address proof. Our AI system may request additional documents based on your specific case."
        },
        {
          question: "How long does the approval process take?",
          answer: "Our AI-powered system provides instant credit decisions in most cases. The entire process from application to disbursement typically takes 24-48 hours, significantly faster than traditional banking processes."
        },
        {
          question: "What is the minimum and maximum loan amount?",
          answer: "Loan amounts vary by product type. For MSME loans, we offer from ₹50,000 to ₹50,00,000. Personal loans range from ₹8,500 to ₹5,00,000. Specific limits depend on your credit profile, business performance, and loan type."
        }
      ]
    },
    {
      category: "Eligibility & Requirements",
      questions: [
        {
          question: "What are the eligibility criteria?",
          answer: "You must be at least 21 years old, an Indian resident, and meet our credit assessment criteria. For MSME loans, you need a registered business. Our AI system evaluates multiple factors including credit history, business performance, and alternative data sources."
        },
        {
          question: "Do I need a good credit score?",
          answer: "While a good credit score helps, our AI-driven underwriting considers multiple factors including alternative data, cash flow patterns, and business performance. We can approve loans even with limited credit history by analyzing other financial indicators."
        },
        {
          question: "Can I apply if I'm self-employed?",
          answer: "Yes! Neodhan specializes in serving self-employed individuals, small business owners, and MSMEs. Our AI system is specifically designed to assess the creditworthiness of non-salaried individuals using alternative data sources."
        },
        {
          question: "What if I have a low income?",
          answer: "Our AI system considers various income sources and business potential, not just traditional income levels. We use alternative data to assess your repayment capacity, making credit accessible to a wider range of customers."
        }
      ]
    },
    {
      category: "Technology & Security",
      questions: [
        {
          question: "How does AI-powered underwriting work?",
          answer: "Our AI system analyzes multiple data points including bank statements, business performance, cash flow patterns, and alternative data sources. It provides real-time risk scoring and instant credit decisions, making the process faster and more accurate than traditional methods."
        },
        {
          question: "Is my data secure with Neodhan?",
          answer: "Absolutely. We use bank-grade encryption, secure servers, and follow industry best practices for data protection. Your personal information is encrypted using SSL technology and stored on secure servers in India. We never share your data with unauthorized third parties."
        },
        {
          question: "What permissions does the app require?",
          answer: "We request minimal permissions: SMS access (for income verification), Contacts (for risk assessment), Location (for fraud detection), Device information (for security), and Camera (for document upload). All data is processed by automated systems and never accessed by humans."
        },
        {
          question: "How does fraud detection work?",
          answer: "Our AI-powered fraud detection system analyzes transaction patterns, device information, location data, and behavioral indicators to identify potential fraudulent activities. This ensures the security of both our platform and our customers."
        }
      ]
    },
    {
      category: "Payments & Repayment",
      questions: [
        {
          question: "How do I make loan repayments?",
          answer: "You can make repayments through multiple channels: Auto-debit from your bank account, UPI payments, net banking, or by visiting our partner banks. We also offer flexible repayment options including weekly, monthly, or quarterly payments."
        },
        {
          question: "What are the interest rates?",
          answer: "Interest rates vary based on loan type, amount, tenure, and your credit profile. Our rates are competitive and transparent, typically ranging from 10% to 48% per annum. The exact rate will be communicated during the application process."
        },
        {
          question: "Can I prepay my loan?",
          answer: "Yes, you can prepay your loan partially or fully. We offer flexible prepayment options with minimal or no prepayment charges, depending on the loan type and tenure. Early repayment can also help improve your credit profile."
        },
        {
          question: "What happens if I miss a payment?",
          answer: "We understand that financial situations can change. If you miss a payment, please contact our customer support immediately. We offer flexible solutions and may restructure your loan to help you get back on track. Late payment charges may apply as per the loan agreement."
        }
      ]
    },
    {
      category: "Support & Customer Service",
      questions: [
        {
          question: "How can I contact customer support?",
          answer: "You can reach us through multiple channels: Phone (+91-8700866381), Email (support@neodhan.com), WhatsApp, or through our in-app chat. Our multilingual support team is available in Hindi, English, Marathi, and Gujarati."
        },
        {
          question: "What are your customer support hours?",
          answer: "Our customer support is available Monday to Saturday, 9 AM to 6 PM. For urgent queries, you can reach our emergency support line. We also provide 24/7 AI-powered chatbot support for basic queries."
        },
        {
          question: "Can I track my loan application status?",
          answer: "Yes, you can track your application status in real-time through our website or mobile app. You'll receive regular updates via SMS and email at each stage of the process, from application submission to disbursement."
        },
        {
          question: "How do I update my personal information?",
          answer: "You can update your personal information through your account dashboard or by contacting our customer support. For critical information like bank account details, you may need to provide additional verification documents."
        }
      ]
    }
  ];

  return (
    <div className="faq-page">
      <SEO 
        title="FAQ - Frequently Asked Questions | Neodhan"
        description="Find answers to common questions about Neodhan's AI-powered MSME lending platform, loan applications, eligibility, and more."
        keywords="FAQ, frequently asked questions, Neodhan, MSME loans, loan application, eligibility, support"
      />
      
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="faq-hero-content">
          <h1>Frequently Asked <span className="gradient-text">Questions</span></h1>
          <p className="faq-subtitle">
            Find answers to common questions about our AI-powered lending platform and services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="faq-container">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="faq-items">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems[globalIndex];
                  
                  return (
                    <div key={itemIndex} className="faq-item">
                      <div 
                        className={`faq-question ${isOpen ? 'active' : ''}`}
                        onClick={() => toggleItem(globalIndex)}
                      >
                        <h3>{item.question}</h3>
                        <div className="faq-icon">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            className={isOpen ? 'rotated' : ''}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="faq-cta-section">
        <div className="faq-container">
          <div className="faq-cta-card">
            <h2>Still have questions?</h2>
            <p>Our support team is here to help you with any additional questions or concerns.</p>
            <div className="faq-cta-buttons">
              <a href="tel:+91-8700866381" className="faq-cta-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Support
              </a>
              <a href="mailto:support@neodhan.com" className="faq-cta-secondary">
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

export default FAQ;
