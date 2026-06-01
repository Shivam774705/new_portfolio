import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 'stpl-developer',
      role: 'Software Developer',
      type: 'Full-time',
      company: 'Shroti Telecom Pvt. Ltd.',
      duration: 'Mar 2026 — Present',
      location: 'Bhopal · On-site',
      current: true,
      headline: 'Work as a full-stack developer across multiple live products — camera monitoring, RMS, Airtel platforms, and the company portfolio — contributing wherever needed.',
      bullets: [
        'Build features end-to-end: React UI, Django REST APIs, and MySQL — without a separate frontend/backend handoff.',
        'Delivered map-based site monitoring, AI detection integration, dashboard modules, and ongoing bug fixes across all maintained products.'
      ],
      skills: ['React.js', 'Django', 'JavaScript', 'MySQL', 'REST APIs', 'Tailwind CSS', 'Git & GitHub']
    },
    {
      id: 'stpl-intern',
      role: 'Junior Software Developer',
      type: 'Internship · Return offer received',
      company: 'Shroti Telecom Pvt. Ltd.',
      duration: 'Aug 2025 — Feb 2026',
      location: 'Bhopal · On-site',
      current: false,
      headline: 'Built frontend dashboards and Django REST APIs for RMS and Airtel monitoring platforms used by operations teams.',
      bullets: [
        'Handled MySQL queries, API testing with Postman, and contributed to feature development and bug fixes in a live codebase.'
      ],
      skills: ['Django', 'React.js', 'JavaScript', 'Tailwind CSS', 'MySQL', 'REST APIs', 'Postman', 'Git & GitHub']
    }
  ];

  return (
    <section id="experience" className="section pad">
      <div className="maxw">
        <div className="sec-label will-fade">// 02 — Experience</div>
        
        <div className="projects-intro" style={{ marginBottom: '3rem' }}>
          <h2 className="sec-big will-fade">
            WORK &nbsp;
            <span className="orange">EXPERIENCE</span>
          </h2>
          <p
            className="will-fade"
            style={{ fontSize: '0.85rem', color: 'var(--dim)', maxWidth: '300px', fontWeight: 300, lineHeight: 1.7 }}
          >
            My professional path from internship to full-time developer.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="exp-timeline-container">
          <div className="exp-timeline-bar" />

          {experiences.map((exp) => (
            <div key={exp.id} className="exp-timeline-item will-fade">
              {/* Timeline marker */}
              <div className={`exp-timeline-node ${exp.current ? 'current' : 'past'}`}>
                {exp.current && <span className="exp-node-ping" />}
              </div>

              {/* Experience Card */}
              <div className="exp-card">
                {/* Header info */}
                <div className="exp-card-header">
                  <div className="exp-card-title-block">
                    <h3 className="exp-card-role">
                      {exp.role}
                      {exp.current && <span className="exp-current-badge">Current</span>}
                    </h3>
                    <div className="exp-card-company-row">
                      <span className="exp-company-name">{exp.company}</span>
                      <span className="exp-divider">·</span>
                      <span className="exp-job-type">{exp.type}</span>
                    </div>
                  </div>
                  <div className="exp-card-meta-block">
                    <div className="exp-duration">{exp.duration}</div>
                    <div className="exp-location">{exp.location}</div>
                  </div>
                </div>

                {/* Body info */}
                <div className="exp-card-body">
                  <p className="exp-headline">{exp.headline}</p>
                  
                  <ul className="exp-bullet-list">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="exp-bullet-item">
                        <span className={`exp-bullet-dot ${exp.current ? 'current' : 'past'}`} />
                        <p className="exp-bullet-text">{bullet}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skill chips */}
                <div className="exp-chips-row">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="exp-chip">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
