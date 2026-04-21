import React, { useEffect } from 'react';
import gsap from 'gsap';

const Projects = () => {
  useEffect(() => {
    const items = gsap.utils.toArray('.project-item');
    const handlers = items.map((el) => {
      // hover line draw
      const handleMouseEnter = () => {
        gsap.to(el, { paddingLeft: '1.5rem', duration: 0.25, ease: 'power2.out' });
      };
      const handleMouseLeave = () => {
        gsap.to(el, { paddingLeft: '0', duration: 0.2 });
      };

      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);

      return { el, handleMouseEnter, handleMouseLeave };
    });

    return () => {
      handlers.forEach(({ el, handleMouseEnter, handleMouseLeave }) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <section id="project" className="section pad">
      <div className="maxw">
        <div className="sec-label will-fade">// 02 — Selected Work</div>
        <div className="projects-intro">
          <h2 className="sec-big will-fade">
            FEATURED &nbsp;
            <span className="orange">PROJECTS</span>
          </h2>
          <p
            style={{ fontSize: '0.85rem', color: 'var(--dim)', maxWidth: '300px', fontWeight: 300, lineHeight: 1.7 }}
            className="will-fade" 
          >
            Full-stack projects built with robust APIs, clean UI, and performance-first architecture.
          </p>
        </div>

        <div className="project-item">
          <div className="p-num">01</div>
          <div className="p-main">
            <div className="p-title">SISTec Alumni Portal</div>
            <p className="p-tagline">
              A full-stack alumni management platform supporting 100+ active users with robust REST integrations.
            </p>
            <ul className="p-points">
              <li>Architected and maintained 8+ reusable React.js frontend modules integrated with RESTful APIs.</li>
              <li>Tested and validated 25+ API endpoints using Postman and Thunder Client, reducing runtime issues by ~30%.</li>
              <li>Led frontend architecture decisions, ensuring mobile-first design and improving page load time by ~20%.</li>
              <li>Assisted in production deployment on Render and authored technical documentation cutting onboarding queries by ~40%.</li>
            </ul>
          </div>
          <div className="p-meta">
            <div className="p-date">Mar 2025 — Mar 2026</div>
            <a href="https://alumni.sistec.ac.in" target="_blank" rel="noopener noreferrer" className="p-link">
              alumni.sistec.ac.in ↗
            </a>
            <div className="p-chip-col">
              <span className="chip">React.js</span>
              <span className="chip">Node.js</span>
              <span className="chip">MongoDB</span>
              <span className="chip">Socket.io</span>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="p-num">02</div>
          <div className="p-main">
            <div className="p-title">Personal Portfolio Website</div>
            <p className="p-tagline">
              A dynamic, highly interactive personal portfolio to showcase my projects and technical expertise.
            </p>
            <ul className="p-points">
              <li>Built with React.js, Tailwind CSS, and Vanilla CSS.</li>
              <li>Implemented smooth scroll-triggered animations using GSAP.</li>
              <li>Fully responsive architecture with a mobile-first approach.</li>
            </ul>
          </div>
          <div className="p-meta">
            <div className="p-date">2026</div>
            <a href="https://shivam-brrc.onrender.com" target="_blank" rel="noopener noreferrer" className="p-link">
              View Site ↗
            </a>
            <div className="p-chip-col">
              <span className="chip">React.js</span>
              <span className="chip">Tailwind CSS</span>
              <span className="chip">GSAP</span>
              <span className="chip">Figma</span>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="p-num">03</div>
          <div className="p-main">
            <div className="p-title">More Projects</div>
            <p className="p-tagline">
              Additional projects available on GitHub, including AI/ML integrations, REST APIs, and full-stack web applications.
            </p>
          </div>
          <div className="p-meta">
            <a href="https://github.com/Shivam774705" target="_blank" rel="noopener noreferrer" className="p-link">
              View GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
