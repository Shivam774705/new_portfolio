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
              <li>Developed and maintained 8+ reusable frontend modules.</li>
              <li>Tested 25+ API endpoints via Postman, reducing runtime issues by ~30%.</li>
              <li>Optimized frontend loading time by ~20% through smart architecture.</li>
              <li>Created technical documentation reducing onboarding queries by 40%.</li>
            </ul>
          </div>
          <div className="p-meta">
            <div className="p-date">July 2025 — Feb 2026</div>
            <a href="https://alumni.sistec.ac.in" target="_blank" rel="noopener noreferrer" className="p-link">
              alumni.sistec.ac.in ↗
            </a>
            <div className="p-chip-col">
              <span className="chip">React.js</span>
              <span className="chip">REST API</span>
              <span className="chip">Postman</span>
              <span className="chip">Perf Opt</span>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="p-num">02</div>
          <div className="p-main">
            <div className="p-title">Full-Stack Chat Application</div>
            <p className="p-tagline">
              Real-time messaging platform with authentication, live WebSocket updates, and responsive UI design.
            </p>
            <ul className="p-points">
              <li>Node.js/Express backend with JWT authentication.</li>
              <li>WebSocket real-time messaging with room support.</li>
              <li>Responsive React frontend with Tailwind CSS.</li>
            </ul>
          </div>
          <div className="p-meta">
            <div className="p-date">Personal Project</div>
            <a href="#" className="p-link">
              GitHub ↗
            </a>
            <div className="p-chip-col">
              <span className="chip">Node.js</span>
              <span className="chip">React</span>
              <span className="chip">WebSockets</span>
              <span className="chip">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="project-item">
          <div className="p-num">03</div>
          <div className="p-main">
            <div className="p-title">More Projects</div>
            <p className="p-tagline">
              Additional projects available on GitHub including Django REST APIs, React dashboards, and more.
            </p>
          </div>
          <div className="p-meta">
            <a href="#" className="p-link">
              View GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
