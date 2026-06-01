import React from 'react';

const CATEGORIES = [
  {
    id: 'languages',
    icon: '</>',
    name: 'LANGUAGES',
    skills: ['JavaScript (ES6+)', 'Python', 'SQL', 'HTML5', 'CSS3'],
    highlight: [0, 1]
  },
  {
    id: 'frontend',
    icon: '⬡',
    name: 'FRONTEND',
    skills: ['React.js', 'Tailwind CSS', 'SCSS', 'Responsive Design', 'Figma & Canva'],
    highlight: [0, 1]
  },
  {
    id: 'backend',
    icon: '⊟',
    name: 'BACKEND',
    skills: ['Django', 'REST APIs', 'Node.js', 'Express.js', 'JWT Auth'],
    highlight: [0, 1]
  },
  {
    id: 'databases',
    icon: '⊞',
    name: 'DATABASES',
    skills: ['MySQL', 'MongoDB', 'NeonDB'],
    highlight: [0, 1]
  },
  {
    id: 'devops',
    icon: '⚙',
    name: 'DEVOPS & TOOLS',
    skills: ['Git & GitHub', 'Postman & Thunder Client', 'VS Code', 'Render', 'Vercel'],
    highlight: [0, 1],
    fullWidth: true
  }
];

const Skills = () => {
  return (
    <section id="skill" className="section pad">
      <div className="maxw">
        <div className="sec-label will-fade">// 04 — Tech Canvas</div>

        {/* ── HEADER ROW ── */}
        <div className="sk-header-row will-fade">
          <div className="sk-header-left">
            <h2 className="sec-big">
              MY
              <span className="orange"> STACK</span>
            </h2>
          </div>
          <div className="sk-header-right">
            <p className="sk-header-desc">
              Technologies &amp; tools I use to craft modern, scalable, and efficient web applications.
            </p>
          </div>
        </div>

        {/* ── STAT COUNTERS ── */}
        <div className="sk-stats-row will-fade">
          <div className="sk-stat-card">
            <div className="sk-stat-num"><span>24</span>+</div>
            <div className="sk-stat-label">TOTAL SKILLS</div>
          </div>
          <div className="sk-stat-card">
            <div className="sk-stat-num"><span>5</span></div>
            <div className="sk-stat-label">CATEGORIES</div>
          </div>
          <div className="sk-stat-card">
            <div className="sk-stat-num"><span>10</span>+</div>
            <div className="sk-stat-label">PROJECTS BUILT</div>
          </div>
          <div className="sk-stat-card">
            <div className="sk-stat-num"><span>2</span>+</div>
            <div className="sk-stat-label">YEARS CODING</div>
          </div>
        </div>

        {/* ── SKILL CATEGORY GRID ── */}
        <div className="sk-grid will-fade">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className={`sk-card${cat.fullWidth ? ' sk-card--full' : ''}`}>
              <div className="sk-card-header">
                <div className="sk-card-title">
                  <span className="sk-card-icon">{cat.icon}</span>
                  <span className="sk-card-name">{cat.name}</span>
                </div>
                <span className="sk-card-count">{cat.skills.length} skills</span>
              </div>
              <div className="sk-pills">
                {cat.skills.map((skill, i) => (
                  <span key={i} className={`sk-pill${cat.highlight.includes(i) ? ' sk-pill--lit' : ''}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
