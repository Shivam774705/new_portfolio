import React from 'react';

const About = () => {
  return (
    <section id="about" className="section pad">
      <div className="maxw">
        <div className="sec-label will-fade">// 01 — About</div>
        <h2 className="sec-big will-fade" style={{ marginBottom: '2.5rem' }}>
          ABOUT&nbsp;
          <span className="orange">ME</span>
        </h2>

        <div className="about-grid">
          {/* ── LEFT COLUMN: STORY & EXPERIENCE ── */}
          <div className="about-left">
            <span className="about-narrative-tag will-fade">✦ About</span>
            <p className="about-intro will-fade" style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600, marginBottom: '0.8rem', lineHeight: 1.4 }}>
              Building things that actually ship.
            </p>
            <p className="about-narrative-p will-fade">
              I'm <strong>Shivam Kumar Kesharwani</strong> — a full-stack developer from Bhopal, India.
              I build scalable, modern, and production-ready web applications, from polished React frontends
              to robust Django backends. I am currently working as a full-time
              <strong> Software Developer</strong> at Shroti Telecom Pvt. Ltd. after receiving a return job offer at the end of my initial internship.
            </p>

            <span className="about-narrative-tag will-fade" style={{ marginTop: '2rem', display: 'block' }}>✦ The story</span>
            <p className="about-narrative-p will-fade">
              My journey into software development started with a simple question: <strong>"How does code become a website?"</strong>
            </p>
            <p className="about-narrative-p will-fade">
              When I first heard about web development, I had no idea how websites were built or what programming actually looked like. I used to think creating websites was something incredibly difficult that only highly skilled experts could do. At the time, I only knew about HTML and CSS, and I assumed that was all there was to building websites.
            </p>
            <p className="about-narrative-p will-fade">
              Curiosity pushed me to learn more. As I started building small projects and exploring new technologies, I gradually discovered how websites actually work—from frontend interfaces and backend logic to databases, APIs, and server communication. The more I learned, the more fascinated I became by the process of turning ideas into real, working products.
            </p>
            <p className="about-narrative-p will-fade">
              What began as a desire to understand how websites are built eventually became a passion for creating scalable applications and solving real-world problems through software.
            </p>
            <p className="about-narrative-p will-fade">
              Today, I specialize in full-stack development with React and Django, but I'm not tied to any particular technology. I've built real-time bidding platforms, B2B lead enrichment pipelines, official alumni portals, AI-powered interview simulators, and enterprise telecom applications. I believe the best solutions come from choosing the right tools for the problem rather than forcing the problem to fit the tools.
            </p>
          </div>

          {/* ── RIGHT COLUMN: QUICK FACTS & EDUCATION ── */}
          <div className="about-right will-slide-right">
            <div className="facts-card">
              <div className="facts-title">✦ Quick Facts</div>
              <ul className="facts-list">
                <li className="facts-item">
                  <span className="facts-label">Based in</span>
                  <span className="facts-val">Bhopal, Madhya Pradesh, India 🇮🇳</span>
                </li>
                <li className="facts-item">
                  <span className="facts-label">Current Role</span>
                  <span className="facts-val">Software Developer at Shroti Telecom</span>
                </li>
                <li className="facts-item">
                  <span className="facts-label">Education</span>
                  <span className="facts-val">B.Tech CSE (2022-2026) — SISTec GN</span>
                </li>
                <li className="facts-item">
                  <span className="facts-label">Focus Areas</span>
                  <span className="facts-val">Full-Stack, APIs, AI & Automation</span>
                </li>
                <li className="facts-item">
                  <span className="facts-label">Hackathons</span>
                  <span className="facts-val">SIH & National Level Contributor</span>
                </li>
                <li className="facts-item">
                  <span className="facts-label">Tech Stack</span>
                  <span className="facts-val">React • Django • MySQL</span>
                </li>
                <li className="facts-item">
                  <span className="facts-label">Open to</span>
                  <span className="facts-val">Software Roles & Collabs</span>
                </li>
              </ul>
            </div>

            <div className="edu-block">
              <div className="edu-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🎓 Education
              </div>
              <div className="edu-item" style={{ borderRadius: '12px' }}>
                <div className="edu-deg">B.Tech. — Computer Science & Engineering</div>
                <div className="edu-school">Sagar Group of Institutions (SISTec GN)</div>
                <div className="edu-meta">
                  <span>Bhopal, MP</span>
                  <span>2022 - 2026 · CGPA 7.01/10</span>
                </div>
              </div>
              <div className="edu-item" style={{ borderRadius: '12px' }}>
                <div className="edu-deg">12th Grade</div>
                <div className="edu-school">Sant Atulanand Residential Academy (SARA)</div>
                <div className="edu-meta">
                  <span>Varanasi, UP</span>
                  <span>2022 · 69.4%</span>
                </div>
              </div>
              <div className="edu-item" style={{ borderRadius: '12px' }}>
                <div className="edu-deg">10th Grade</div>
                <div className="edu-school">Shemford Futuristic School</div>
                <div className="edu-meta">
                  <span>Singrauli, MP</span>
                  <span>2020 · 70.28%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
