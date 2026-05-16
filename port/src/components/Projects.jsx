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

        {/* 01 — HBL Auction Platform */}
        <div className="project-item">
          <div className="p-num">01</div>
          <div className="p-main">
            <div className="p-title">HBL Auction Platform</div>
            <p className="p-tagline">
              Real-Time Hostel Badminton League Bidding System
            </p>
            <p className="p-desc" style={{ fontSize: '0.85rem', color: 'var(--dim)', marginTop: '0.5rem', lineHeight: 1.6 }}>
              Digitized the hostel badminton auction process through a real-time web platform featuring live bidding, automated purse tracking, and captain-focused mobile experience.
            </p>
            <div className="p-highlights">
              <div className="p-h-label">Key Contributions</div>
              <ul className="p-points">
                <li>Built Socket.IO-powered live bidding with sub-second synchronization across all participants.</li>
                <li>Developed captain dashboard optimized for one-handed mobile interaction during high-stakes bidding.</li>
                <li>Implemented MongoDB schemas for real-time tracking of players, teams, and purse deductions.</li>
                <li>Added automated team balancing and bid validation logic to prevent overspending.</li>
              </ul>
            </div>
            <div className="p-highlights">
              <div className="p-h-label">Technical Highlights</div>
              <ul className="p-points">
                <li>Prevented duplicate bids using server-side validation and atomic database updates.</li>
                <li>Implemented real-time purse tracking using WebSockets for instant budget feedback.</li>
              </ul>
            </div>
          </div>
          <div className="p-meta">
            <div className="p-info-row">
              <div className="p-info-item">
                <div className="p-info-label">Role</div>
                <div className="p-info-val">Full Stack Developer</div>
              </div>
              <div className="p-info-item">
                <div className="p-info-label">Year</div>
                <div className="p-info-val">2026</div>
              </div>
              <div className="p-info-item">
                <div className="p-info-label">Status</div>
                <div className="p-info-val">Live</div>
              </div>
            </div>
            <div className="p-links">
              <a href="https://hbl-auction.onrender.com" target="_blank" rel="noopener noreferrer" className="p-link">
                Live Demo ↗
              </a>
              <a href="https://github.com/Shivam774705/HBL-Auction.git" target="_blank" rel="noopener noreferrer" className="p-link">
                GitHub ↗
              </a>
            </div>
            <div className="p-chip-col">
              <span className="chip">Next.js 15</span>
              <span className="chip">MongoDB</span>
              <span className="chip">Socket.IO</span>
              <span className="chip">Zustand</span>
              <span className="chip">Framer Motion</span>
            </div>
          </div>
        </div>

        {/* 02 — SISTec Alumni Portal */}
        <div className="project-item">
          <div className="p-num">02</div>
          <div className="p-main">
            <div className="p-title">SISTec Alumni Portal</div>
            <p className="p-tagline">
              Official Institute Networking & Career Hub
            </p>
            <p className="p-desc" style={{ fontSize: '0.85rem', color: 'var(--dim)', marginTop: '0.5rem', lineHeight: 1.6 }}>
              Built to improve student–alumni networking, mentorship, and job discovery within the institute ecosystem. Deployed on the official institute subdomain.
            </p>
            <div className="p-highlights">
              <div className="p-h-label">Key Contributions</div>
              <ul className="p-points">
                <li>Developed alumni networking modules including job board, real-time messaging, and mentorship features.</li>
                <li>Tested and validated 25+ REST APIs using Postman for authentication, jobs, and messaging workflows.</li>
                <li>Led frontend architecture for mobile-first design, ensuring responsive access for 500+ student users.</li>
              </ul>
            </div>
          </div>
          <div className="p-meta">
            <div className="p-info-row">
              <div className="p-info-item">
                <div className="p-info-label">Role</div>
                <div className="p-info-val">Frontend Lead</div>
              </div>
              <div className="p-info-item">
                <div className="p-info-label">Year</div>
                <div className="p-info-val">2024 — Present</div>
              </div>
              <div className="p-info-item">
                <div className="p-info-label">Status</div>
                <div className="p-info-val">Live</div>
              </div>
            </div>
            <div className="p-links">
              <a href="https://alumni.sistec.ac.in" target="_blank" rel="noopener noreferrer" className="p-link">
                Live Project ↗
              </a>
              <a href="https://github.com/gitNinjaAtC/Skill-Sync.git" target="_blank" rel="noopener noreferrer" className="p-link">
                GitHub ↗
              </a>
            </div>
            <div className="p-chip-col">
              <span className="chip">React.js</span>
              <span className="chip">Node.js</span>
              <span className="chip">MongoDB</span>
              <span className="chip">Socket.io</span>
            </div>
          </div>
        </div>

        {/* 03 — AI Interview Platform */}
        <div className="project-item">
          <div className="p-num">03</div>
          <div className="p-main">
            <div className="p-title">AI Interview Preparation Platform</div>
            <p className="p-tagline">
              Generative AI Technical Interview Simulator
            </p>
            <p className="p-desc" style={{ fontSize: '0.85rem', color: 'var(--dim)', marginTop: '0.5rem', lineHeight: 1.6 }}>
              Intelligent platform automating role-based technical and HR interviews using generative AI for personalized feedback and response analysis.
            </p>
            <div className="p-highlights">
              <div className="p-h-label">Key Contributions</div>
              <ul className="p-points">
                <li>Integrated Gemini AI for dynamic, context-aware interview question generation and performance scoring.</li>
                <li>Built high-performance serverless architecture using Next.js 14 and Neon DB (PostgreSQL).</li>
                <li>Implemented secure user authentication and session management using Clerk.</li>
              </ul>
            </div>
          </div>
          <div className="p-meta">
            <div className="p-info-row">
              <div className="p-info-item">
                <div className="p-info-label">Role</div>
                <div className="p-info-val">Full Stack Developer</div>
              </div>
              <div className="p-info-item">
                <div className="p-info-label">Year</div>
                <div className="p-info-val">2026</div>
              </div>
              <div className="p-info-item">
                <div className="p-info-label">Status</div>
                <div className="p-info-val">Dev</div>
              </div>
            </div>
            <div className="p-links">
              <a href="https://github.com/Shivam774705/AI_Interview.git" target="_blank" rel="noopener noreferrer" className="p-link">
                GitHub ↗
              </a>
            </div>
            <div className="p-chip-col">
              <span className="chip">Next.js 14</span>
              <span className="chip">Gemini AI</span>
              <span className="chip">Clerk</span>
              <span className="chip">Neon DB</span>
            </div>
          </div>
        </div>

        {/* 04 — Developer Portfolio */}
        <div className="project-item">
          <div className="p-num">04</div>
          <div className="p-main">
            <div className="p-title">Developer Portfolio Website</div>
            <p className="p-tagline">
              High-Performance Personal Identity Hub
            </p>
            <p className="p-desc" style={{ fontSize: '0.85rem', color: 'var(--dim)', marginTop: '0.5rem', lineHeight: 1.6 }}>
              A high-performance, SEO-optimized personal portfolio designed to showcase developer identity, technical projects, and interactive storytelling.
            </p>
            <div className="p-highlights">
              <div className="p-h-label">Key Contributions</div>
              <ul className="p-points">
                <li>Implemented smooth, scroll-triggered animations and custom interactive elements using GSAP.</li>
                <li>Developed a responsive, performance-first architecture using React.js and Vanilla CSS.</li>
                <li>Optimized technical SEO and asset delivery, achieving high performance metrics across devices.</li>
              </ul>
            </div>
          </div>
          <div className="p-meta">
            <div className="p-info-row">
              <div className="p-info-item">
                <div className="p-info-label">Role</div>
                <div className="p-info-val">Designer & Dev</div>
              </div>
              <div className="p-info-item">
                <div className="p-info-label">Year</div>
                <div className="p-info-val">2026</div>
              </div>
              <div className="p-info-item">
                <div className="p-info-label">Status</div>
                <div className="p-info-val">Live</div>
              </div>
            </div>
            <div className="p-links">
              <a href="https://shivam-kumar.onrender.com/" target="_blank" rel="noopener noreferrer" className="p-link">
                Live Demo ↗
              </a>
              <a href="https://github.com/Shivam774705/new_portfolio.git" target="_blank" rel="noopener noreferrer" className="p-link">
                GitHub ↗
              </a>
            </div>
            <div className="p-chip-col">
              <span className="chip">React.js</span>
              <span className="chip">GSAP</span>
              <span className="chip">Vanilla CSS</span>
              <span className="chip">Vite</span>
            </div>
          </div>
        </div>

        {/* 05 — Pharma Portfolio */}
        <div className="project-item">
          <div className="p-num">05</div>
          <div className="p-main">
            <div className="p-title">Professional Portfolio for Healthcare Consultant</div>
            <p className="p-tagline">
              Business Showcase & Case Study Repository
            </p>
            <p className="p-desc" style={{ fontSize: '0.85rem', color: 'var(--dim)', marginTop: '0.5rem', lineHeight: 1.6 }}>
              High-performance business portfolio for a pharmaceutical consultant, focusing on case studies, professional services, and lead generation.
            </p>
            <div className="p-highlights">
              <div className="p-h-label">Key Contributions</div>
              <ul className="p-points">
                <li>Leveraged React 19 and Vite for rapid page transitions and optimized asset loading.</li>
                <li>Implemented complex scroll animations and micro-interactions using Framer Motion.</li>
                <li>Designed a clean, professional UI with responsive contact and inquiry workflows.</li>
              </ul>
            </div>
          </div>
          <div className="p-meta">
            <div className="p-info-row">
              <div className="p-info-item">
                <div className="p-info-label">Role</div>
                <div className="p-info-val">Freelance Dev</div>
              </div>
              <div className="p-info-item">
                <div className="p-info-label">Year</div>
                <div className="p-info-val">2026</div>
              </div>
              <div className="p-info-item">
                <div className="p-info-label">Status</div>
                <div className="p-info-val">Live</div>
              </div>
            </div>
            <div className="p-links">
              <a href="https://vishnu-kesharwani.onrender.com" target="_blank" rel="noopener noreferrer" className="p-link">
                Live Project ↗
              </a>
              <a href="https://github.com/Shivam774705/client_portfolio.git" target="_blank" rel="noopener noreferrer" className="p-link">
                GitHub ↗
              </a>
            </div>
            <div className="p-chip-col">
              <span className="chip">React 19</span>
              <span className="chip">Framer Motion</span>
              <span className="chip">Tailwind CSS</span>
              <span className="chip">Vite</span>
            </div>
          </div>
        </div>

        {/* 06 — Data Analytics Portfolio */}
        <div className="project-item">
          <div className="p-num">06</div>
          <div className="p-main">
            <div className="p-title">Data Analytics Portfolio Website</div>
            <p className="p-tagline">
              Analytical Visualization & Project Showcase
            </p>
            <p className="p-desc" style={{ fontSize: '0.85rem', color: 'var(--dim)', marginTop: '0.5rem', lineHeight: 1.6 }}>
              Specialized showcase for data visualization projects, focusing on clarity, technical storytelling, and professional impact.
            </p>
            <div className="p-highlights">
              <div className="p-h-label">Key Contributions</div>
              <ul className="p-points">
                <li>Designed interactive visualization modules using modern React hooks and Radix UI components.</li>
                <li>Focused on UX/UI for technical storytelling, ensuring data clarity across mobile and desktop.</li>
                <li>Optimized for technical SEO to improve search visibility for analytical services.</li>
              </ul>
            </div>
          </div>
          <div className="p-meta">
            <div className="p-info-row">
              <div className="p-info-item">
                <div className="p-info-label">Role</div>
                <div className="p-info-val">Developer</div>
              </div>
              <div className="p-info-item">
                <div className="p-info-label">Year</div>
                <div className="p-info-val">2026</div>
              </div>
              <div className="p-info-item">
                <div className="p-info-label">Status</div>
                <div className="p-info-val">Live</div>
              </div>
            </div>
            <div className="p-links">
              <a href="https://chetna-upadhyay.onrender.com/" target="_blank" rel="noopener noreferrer" className="p-link">
                Live Project ↗
              </a>
              <a href="https://github.com/Shivam774705/Chetna-portfolio.git" target="_blank" rel="noopener noreferrer" className="p-link">
                GitHub ↗
              </a>
            </div>
            <div className="p-chip-col">
              <span className="chip">React</span>
              <span className="chip">Radix UI</span>
              <span className="chip">Framer Motion</span>
              <span className="chip">Vite</span>
            </div>
          </div>
        </div>

        {/* 07 — Task Management System */}
        <div className="project-item">
          <div className="p-num">07</div>
          <div className="p-main">
            <div className="p-title">Task Management System</div>
            <p className="p-tagline">
              Efficient Productivity & Utility Tracker
            </p>
            <p className="p-desc" style={{ fontSize: '0.85rem', color: 'var(--dim)', marginTop: '0.5rem', lineHeight: 1.6 }}>
              Lightweight utility for efficient task tracking and productivity management, focusing on speed and zero-dependency performance.
            </p>
            <div className="p-highlights">
              <div className="p-h-label">Key Contributions</div>
              <ul className="p-points">
                <li>Built with vanilla JavaScript to ensure zero dependency overhead and maximum execution speed.</li>
                <li>Implemented persistent data storage using browser LocalStorage APIs for offline functionality.</li>
                <li>Developed a responsive grid layout with prioritization logic for intuitive task management.</li>
              </ul>
            </div>
          </div>
          <div className="p-meta">
            <div className="p-info-row">
              <div className="p-info-item">
                <div className="p-info-label">Role</div>
                <div className="p-info-val">Developer</div>
              </div>
              <div className="p-info-item">
                <div className="p-info-label">Year</div>
                <div className="p-info-val">2025</div>
              </div>
              <div className="p-info-item">
                <div className="p-info-label">Status</div>
                <div className="p-info-val">Done</div>
              </div>
            </div>
            <div className="p-links">
              <a href="https://github.com/Shivam774705/Task-Tracker.git" target="_blank" rel="noopener noreferrer" className="p-link">
                GitHub ↗
              </a>
            </div>
            <div className="p-chip-col">
              <span className="chip">HTML5</span>
              <span className="chip">CSS3</span>
              <span className="chip">JavaScript</span>
              <span className="chip">Storage</span>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="project-item">
          <div className="p-num">08</div>
          <div className="p-main">
            <div className="p-title">Explore More</div>
            <p className="p-tagline">
              Additional explorations in AI/ML, REST APIs, and Open Source contributions.
            </p>
          </div>
          <div className="p-meta">
            <a href="https://github.com/Shivam774705" target="_blank" rel="noopener noreferrer" className="p-link">
              View GitHub Profile ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
