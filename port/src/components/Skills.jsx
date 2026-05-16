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
                  <span>24</span>+
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
                  <span>10</span>+
                </div>
                <div className="sk-counter-label">Projects Built</div>
              </div>
              <div className="sk-counter">
                <div className="sk-counter-num">
                  <span>2</span>+
                </div>
                <div className="sk-counter-label">Years Coding</div>
              </div>
            </div>
          </div>
          <div className="skills-right will-slide-right">
            <div className="skill-cat">
              <div className="skill-cat-header">
                <div className="skill-cat-name">Languages</div>
                <div className="skill-cat-count">5 skills</div>
              </div>
              <div className="skill-cat-body">
                <div className="skill-pills">
                  <div className="sp"><div className="sp-dot"></div>JavaScript (ES6+)</div>
                  <div className="sp"><div className="sp-dot"></div>Python</div>
                  <div className="sp"><div className="sp-dot"></div>SQL</div>
                  <div className="sp"><div className="sp-dot"></div>HTML5</div>
                  <div className="sp"><div className="sp-dot"></div>CSS3</div>
                </div>
              </div>
            </div>
            <div className="skill-cat">
              <div className="skill-cat-header">
                <div className="skill-cat-name">Frontend</div>
                <div className="skill-cat-count">5 skills</div>
              </div>
              <div className="skill-cat-body">
                <div className="skill-pills">
                  <div className="sp"><div className="sp-dot"></div>React.js</div>
                  <div className="sp"><div className="sp-dot"></div>Tailwind CSS</div>
                  <div className="sp"><div className="sp-dot"></div>SCSS</div>
                  <div className="sp"><div className="sp-dot"></div>Responsive Design</div>
                  <div className="sp"><div className="sp-dot"></div>Figma & Canva</div>
                </div>
              </div>
            </div>
            <div className="skill-cat">
              <div className="skill-cat-header">
                <div className="skill-cat-name">Backend</div>
                <div className="skill-cat-count">5 skills</div>
              </div>
              <div className="skill-cat-body">
                <div className="skill-pills">
                  <div className="sp"><div className="sp-dot"></div>Django</div>
                  <div className="sp"><div className="sp-dot"></div>Node.js</div>
                  <div className="sp"><div className="sp-dot"></div>Express.js</div>
                  <div className="sp"><div className="sp-dot"></div>REST APIs</div>
                  <div className="sp"><div className="sp-dot"></div>JWT Auth</div>
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
                  <div className="sp"><div className="sp-dot"></div>NeonDB</div>
                </div>
              </div>
            </div>
            <div className="skill-cat">
              <div className="skill-cat-header">
                <div className="skill-cat-name">DevOps & Tools</div>
                <div className="skill-cat-count">5 skills</div>
              </div>
              <div className="skill-cat-body">
                <div className="skill-pills">
                  <div className="sp"><div className="sp-dot"></div>Git & GitHub</div>
                  <div className="sp"><div className="sp-dot"></div>Postman & Thunder Client</div>
                  <div className="sp"><div className="sp-dot"></div>VS Code</div>
                  <div className="sp"><div className="sp-dot"></div>Render</div>
                  <div className="sp"><div className="sp-dot"></div>Vercel</div>
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
