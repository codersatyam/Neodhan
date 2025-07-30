import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Lending in India",
      excerpt: "How technology is transforming the lending landscape and making financial services accessible to millions.",
      author: "Shivam Sharma",
      date: "July 15, 2024",
      readTime: "5 min read",
      category: "Fintech",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Building Trust in Fintech: A Guide for Startups",
      excerpt: "Essential strategies for fintech companies to build customer trust and establish credibility in the market.",
      author: "Rohit Kumar",
      date: "July 10, 2024",
      readTime: "7 min read",
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "MSME Loans: Empowering Small Businesses",
      excerpt: "Understanding the importance of MSME financing and how digital platforms are revolutionizing access to credit.",
      author: "Shivam Sharma",
      date: "July 5, 2024",
      readTime: "6 min read",
      category: "MSME",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "The Role of AI in Loan Processing",
      excerpt: "How artificial intelligence is streamlining loan applications and improving approval rates.",
      author: "Rohit Kumar",
      date: "June 28, 2024",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Personal Finance Tips for Young Professionals",
      excerpt: "Essential financial planning advice for millennials and Gen Z professionals starting their careers.",
      author: "Shivam Sharma",
      date: "June 20, 2024",
      readTime: "4 min read",
      category: "Personal Finance",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Regulatory Compliance in Digital Lending",
      excerpt: "Navigating the complex regulatory landscape of digital lending in India.",
      author: "Rohit Kumar",
      date: "June 15, 2024",
      readTime: "9 min read",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["All", "Fintech", "Strategy", "MSME", "Technology", "Personal Finance", "Compliance"];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-content">
          <span className="section-tag">Our Blog</span>
          <h1>Insights & <span className="gradient-text">Updates</span></h1>
          <p>Stay updated with the latest trends in fintech, lending, and financial technology.</p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="categories-section">
        <div className="categories-container">
          {categories.map((category, index) => (
            <button key={index} className={`category-btn ${index === 0 ? 'active' : ''}`}>
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-posts-section">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-author">{post.author}</span>
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest insights and updates from the fintech world.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email address" className="newsletter-input" />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 