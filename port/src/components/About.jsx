import React from 'react';

const About = () => {
  return (
    <section id="about" className="section pad">
      <div className="maxw">
        <div className="sec-label will-fade">// 01 — About</div>
        <h2 className="sec-big will-fade">
          ABOUT&nbsp;
          <span className="orange">ME</span>
        </h2>
        <div className="about-grid">
          <div className="about-left">
            <p className="about-intro will-fade">
              I'm a <strong>Full-Stack Developer</strong> from Bhopal, India — passionate about building{' '}
              <span className="hl" style={{ color: 'var(--orange)' }}>
                scalable, responsive, production-ready
              </span>{' '}
              web applications. I specialize in full-stack ecosystems, from polished React frontends to robust Django and Node.js backends.
            </p>
            <div className="will-fade">
              <div className="exp-item">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">Junior Software Developer (Intern)</div>
                    <div className="exp-company">Shroti Telecom Pvt. Ltd. (STPL)</div>
                  </div>
                  <div className="exp-date">Aug 2025 — Feb 2026</div>
                </div>
                <ul className="exp-points">
                  <li>Developed 10+ responsive frontend screens for RMS and Airtel monitoring systems using HTML/CSS, JS, and Tailwind CSS.</li>
                  <li>Built and maintained 10+ REST API endpoints in Django to process real-time site monitoring operational data.</li>
                  <li>Applied UI/UX principles via Figma to design intuitive interfaces.</li>
                  <li>Validated and debugged APIs using Postman and Thunder Client, improving production stability.</li>
                </ul>
                <div className="chip-row">
                  <span className="chip">Django</span>
                  <span className="chip">JavaScript</span>
                  <span className="chip">Tailwind CSS</span>
                  <span className="chip">React.js</span>
                  <span className="chip">Figma</span>
                  <span className="chip">MySQL</span>
                </div>
              </div>
            </div>
            <div className="cert-block will-fade" style={{ marginTop: '1rem' }}>
              <div className="cert-tag">📜 Certifications & Training</div>
              <div className="cert-name">Django Essentials: Build and Deploy Real-World Apps</div>
              <div className="cert-platform">Udemy · 2025</div>
              <div className="cert-desc">
                Hands-on experience in Django web development, REST API design, database integration, and production deployment.
              </div>
              <div className="cert-name" style={{ marginTop: '0.8rem' }}>Python Essential 1 & 2</div>
              <div className="cert-platform">Cisco Networking Academy</div>
            </div>
          </div>
          <div className="about-right will-slide-right">
            <div className="edu-block">
              <div className="edu-title">🎓 Education</div>
              <div className="edu-item">
                <div className="edu-deg">B.Tech. — Computer Science & Engineering</div>
                <div className="edu-school">Sagar Group of Institutions (SISTec GN)</div>
                <div className="edu-meta">
                  <span>Bhopal, MP</span>
                  <span>2022 - 2026 · CGPA 7.01/10</span>
                </div>
              </div>
              <div className="edu-item">
                <div className="edu-deg">12th Grade</div>
                <div className="edu-school">Sant Atulanand Residential Academy (SARA)</div>
                <div className="edu-meta">
                  <span>Varanasi, UP</span>
                  <span>2022 · 69.4%</span>
                </div>
              </div>
              <div className="edu-item">
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
