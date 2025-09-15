import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Neodhan", 
  description = "Neodhan: AI-driven fintech revolutionizing MSME lending in India. Faster, smarter financing through NBFC partnerships. Closing India's credit gap.",
  fullDescription = "Neodhan is a next-generation fintech startup revolutionizing MSME lending in India. We combine AI-driven credit intelligence with deep industry partnerships to deliver faster, smarter, and more inclusive financing. By working directly with NBFCs and MFI networks, we ensure businesses get the capital they need —without friction or delays. Our mission is simple yet bold: to close India's credit gap by making lending transparent, efficient, and growth-focused. Backed by experienced fintech leaders and a relentless drive for innovation, Neodhan is redefining how MSME credit is delivered and experienced.",
  image = "https://neodhan.com/NLogo.svg",
  url = "https://neodhan.com/",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="keywords" content="MSME lending, fintech India, AI-driven credit, NBFC partnerships, business loans, credit gap, financial inclusion" />
      <meta name="author" content="Neodhan" />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
