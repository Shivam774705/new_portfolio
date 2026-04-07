import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="section">
      <div className="maxw">
        <div className="blog-inner">
          <span className="blog-emoji">✍️</span>
          <h2 className="sec-big will-fade" style={{ textAlign: 'center' }}>
            BLOG <span className="orange">COMING SOON</span>
          </h2>
          <p className="blog-sub will-fade">
            Building full-stack apps and migrating portfolios right now. Technical articles and dev thoughts incoming — stay tuned.
          </p>
          <a href="#hero" className="btn-hero will-fade" style={{ marginTop: '1rem' }}>
            ← Back to Top
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
