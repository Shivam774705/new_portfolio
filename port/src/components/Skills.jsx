const Skills = () => {
  return (
    <section id="skill" className="section pad">
      <div className="maxw">
        <div className="sec-label will-fade">// 03 — Tech Canvas</div>
        <div className="skills-layout">
          <div className="skills-left">
            <h2 className="sec-big will-fade">
              MY<br />
              <span className="orange">STACK</span>
            </h2>
            <p className="skills-left-desc will-fade">
              Technologies & tools I use to craft modern, scalable, and efficient web applications.
            </p>
            <div className="skills-counters will-fade">
              <div className="sk-counter">
                <div className="sk-counter-num">
                  <span>18</span>
                </div>
                <div className="sk-counter-label">Total Skills</div>
              </div>
              <div className="sk-counter">
                <div className="sk-counter-num">
                  <span>5</span>
                </div>
                <div className="sk-counter-label">Categories</div>
              </div>
              <div className="sk-counter">
                <div className="sk-counter-num">
                  <span>6</span>
                  <span style={{ color: 'var(--orange)' }}>+</span>
                </div>
                <div className="sk-counter-label">Projects Built</div>
              </div>
              <div className="sk-counter">
                <div className="sk-counter-num">
                  <span>1</span>
                  <span style={{ color: 'var(--orange)' }}>yr</span>
                </div>
                <div className="sk-counter-label">Experience</div>
              </div>
            </div>
          </div>
          <div className="skills-right will-slide-right">
            <div className="skill-cat">
              <div className="skill-cat-header">
                <div className="skill-cat-name">Foundations</div>
                <div className="skill-cat-count">3 skills</div>
              </div>
              <div className="skill-cat-body">
                <div className="skill-pills">
                  <div className="sp"><div className="sp-dot"></div>C</div>
                  <div className="sp"><div className="sp-dot"></div>C++</div>
                  <div className="sp"><div className="sp-dot"></div>Python</div>
                </div>
              </div>
            </div>
            <div className="skill-cat">
              <div className="skill-cat-header">
                <div className="skill-cat-name">Web Core</div>
                <div className="skill-cat-count">3 skills</div>
              </div>
              <div className="skill-cat-body">
                <div className="skill-pills">
                  <div className="sp"><div className="sp-dot"></div>HTML5</div>
                  <div className="sp"><div className="sp-dot"></div>CSS3</div>
                  <div className="sp"><div className="sp-dot"></div>JavaScript</div>
                </div>
              </div>
            </div>
            <div className="skill-cat">
              <div className="skill-cat-header">
                <div className="skill-cat-name">Frameworks & Backend</div>
                <div className="skill-cat-count">5 skills</div>
              </div>
              <div className="skill-cat-body">
                <div className="skill-pills">
                  <div className="sp"><div className="sp-dot"></div>React</div>
                  <div className="sp"><div className="sp-dot"></div>Node.js</div>
                  <div className="sp"><div className="sp-dot"></div>Express</div>
                  <div className="sp"><div className="sp-dot"></div>Django</div>
                  <div className="sp"><div className="sp-dot"></div>Tailwind CSS</div>
                </div>
              </div>
            </div>
            <div className="skill-cat">
              <div className="skill-cat-header">
                <div className="skill-cat-name">Databases</div>
                <div className="skill-cat-count">3 skills</div>
              </div>
              <div className="skill-cat-body">
                <div className="skill-pills">
                  <div className="sp"><div className="sp-dot"></div>MySQL</div>
                  <div className="sp"><div className="sp-dot"></div>MongoDB</div>
                  <div className="sp"><div className="sp-dot"></div>SQLite</div>
                </div>
              </div>
            </div>
            <div className="skill-cat">
              <div className="skill-cat-header">
                <div className="skill-cat-name">Tools & Workflow</div>
                <div className="skill-cat-count">4 skills</div>
              </div>
              <div className="skill-cat-body">
                <div className="skill-pills">
                  <div className="sp"><div className="sp-dot"></div>Git & GitHub</div>
                  <div className="sp"><div className="sp-dot"></div>VS Code</div>
                  <div className="sp"><div className="sp-dot"></div>Postman</div>
                  <div className="sp"><div className="sp-dot"></div>Thunder Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
// Note: The specific horizontal scroll with velocity tilt will be handled in the main component.
