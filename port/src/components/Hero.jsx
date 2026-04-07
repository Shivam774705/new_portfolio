import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

/* ══════════════════ SKILL ORBIT ══════════════════ */
const SKILLS = [
  { label: 'React',  r: 90, startAngle: 0,   color: '#38bdf8', size: 44 },
  { label: 'Node',   r: 90, startAngle: 120, color: '#22c55e', size: 44 },
  { label: 'Django', r: 90, startAngle: 240, color: '#a78bfa', size: 44 },
  { label: 'Next',   r: 60, startAngle: 60,  color: '#e2e8f0', size: 34 },
  { label: 'Mongo',  r: 60, startAngle: 180, color: '#f59e0b', size: 34 },
  { label: 'TS',     r: 60, startAngle: 300, color: '#60a5fa', size: 34 },
];

const SkillOrbit = () => {
  const wrapRef = useRef(null);

  useEffect(() => {
    let raf;
    let angle = 0;
    const speed = 0.28;
    const tick = () => {
      angle = (angle + speed) % 360;
      if (!wrapRef.current) return;
      wrapRef.current.querySelectorAll('.sk-orb').forEach((orb, i) => {
        const sk = SKILLS[i];
        const a = ((sk.startAngle + angle) * Math.PI) / 180;
        orb.style.left = 90 + sk.r * Math.cos(a) - sk.size / 2 + 'px';
        orb.style.top  = 90 + sk.r * Math.sin(a) - sk.size / 2 + 'px';
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={wrapRef} style={{ position: 'relative', width: 180, height: 180, margin: '0 auto' }}>
      <svg width="180" height="180" style={{ position: 'absolute', inset: 0 }}>
        <circle cx="90" cy="90" r="90" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="90" cy="90" r="60" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3 5" />
      </svg>
      {/* centre SKK */}
      <div style={{
        position: 'absolute', left: 75, top: 75,
        width: 30, height: 30, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: "'JetBrains Mono',monospace", fontSize: '0.6rem',
        fontWeight: 700, color: '#fff', letterSpacing: '0.05em',
        boxShadow: '0 0 12px rgba(232,93,4,0.55)', zIndex: 2,
      }}>SKK</div>
      {SKILLS.map((sk) => (
        <div key={sk.label} className="sk-orb" style={{
          position: 'absolute',
          width: sk.size, height: sk.size, borderRadius: '50%',
          background: `${sk.color}18`,
          border: `1px solid ${sk.color}55`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: '0.6rem', fontWeight: 500, color: sk.color,
          backdropFilter: 'blur(4px)', zIndex: 3,
          willChange: 'left,top', transition: 'box-shadow .2s',
          cursor: 'default', userSelect: 'none',
        }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = `0 0 14px ${sk.color}55`}
          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
        >{sk.label}</div>
      ))}
    </div>
  );
};

/* ══════════════════ TERMINAL ══════════════════ */
const LINES = [
  { text: '$ whoami', color: '#22c55e' },
  { text: 'Shivam Kumar Kesharwani · Full-Stack Developer', color: '#e2e8f0' },
  { text: '$ echo $ROLE', color: '#22c55e' },
  { text: 'Building scalable and user-centric web applications', color: '#e2e8f0' },
  { text: '$ status --hire', color: '#22c55e' },
  { text: '● open · Bhopal, IN', color: '#e2e8f0' },
  { text: '$ contact --info', color: '#22c55e' },
  { text: 'Email: Kumarshivam774705@gmail.com', color: '#e2e8f0' },
  { text: 'GitHub: github.com/Shivam774705', color: '#e2e8f0' },
];

const Terminal = () => {
  const bodyRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    const delay = ms => new Promise(r => setTimeout(r, ms));

    const run = async () => {
      if (!bodyRef.current) return;
      bodyRef.current.innerHTML = '';
      bodyRef.current.style.opacity = '1';

      for (const line of LINES) {
        if (cancelled) break;
        const el = document.createElement('div');
        el.style.cssText = `color:${line.color};font-family:'JetBrains Mono',monospace;font-size:0.7rem;line-height:1.75;white-space:pre;min-height:1.2em;`;
        bodyRef.current?.appendChild(el);
        for (let i = 0; i < line.text.length; i++) {
          if (cancelled) break;
          el.textContent = line.text.slice(0, i + 1);
          await delay(36);
        }
        await delay(200);
      }

      if (!cancelled) {
        const cur = document.createElement('span');
        cur.textContent = '█';
        cur.style.cssText = `color:#22c55e;font-size:0.8rem;animation:blink 1s step-end infinite;margin-left: 2px;`;
        bodyRef.current?.appendChild(cur);
      }
    };
    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <div style={{ background: '#080808',paddingLeft:5,paddingTop:5, flex: 1, display: 'flex', flexDirection: 'column', borderRadius: 5 }}>
      <div style={{ display: 'flex', gap: 5, marginBottom: '0.75rem' }}>
        {['#ff5f57', '#ffbd2e', '#28c840'].map(c => (
          <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
        ))}
      </div>
      <div ref={bodyRef} style={{ flex: 1, minHeight: 115 }} />
    </div>
  );
};

/* ══════════════════ HERO ══════════════════ */
const Hero = () => {
  useEffect(() => {
    gsap.to('#hero-name', {
      yPercent: -18,
      ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.5 },
    });
    gsap.fromTo('.hcard',
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.65, stagger: 0.13, ease: 'power2.out', delay: 0.35 }
    );
  }, []);

  const cardBase = {
    border: '1px solid rgba(255,255,255,0.08)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'border-color .3s',
  };

  return (
    <section id="hero">
      <div className="hero-eyebrow"><span>Full-Stack Developer · Bhopal, India · 2026</span></div>
      <div className="hero-bg-line" /><div className="hero-bg-line" />
      <div className="hero-bg-line" /><div className="hero-bg-line" />

      {/* ══ Name LEFT  |  3 cards RIGHT ══ */}
      <div className="hero-main-grid">

        {/* LEFT — Name */}
        <div className="hero-name-wrap">
          <h1 className="hero-name" id="hero-name">
            <div style={{ display: 'flex', alignItems: 'center' }}  >
              <div>
                <span className="line"><span id="hn1">SHIVAM</span></span>
                <span className="line"><span id="hn2">KUMAR</span></span>
              </div>
              <div className="skill-orbit-container">
                <SkillOrbit />
              </div>
            </div>
            <span className="line orange"><span id="hn3">KESHARWANI</span></span>
          </h1>
        </div>

        {/* RIGHT — Cards Grid */}
        <div className="hero-cards-grid">
          {/* CARD 2 — Terminal */}
          <div>
            <div className="hcard hcard-wrap" style={cardBase}>
              <Terminal />
            </div>
            <div className="resume-wrap" style={{marginTop:'2.8rem'}}>
              {/* Resume */}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                style={{
                  position: 'relative', display: 'inline-block',
                  textDecoration: 'none', cursor: 'pointer',
                  /* dark outer frame — matches image 3 */
                  border: '3px solid #111',
                  boxShadow: 'inset -6px 0 0 #111, inset 6px 0 0 #111',
                  borderRadius: '2px',
                }}>
                <div style={{
                  width: 170, height: 38,
                  background: '#22c55e',
                  transition: 'background .2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#16a34a'}
                  onMouseLeave={e => e.currentTarget.style.background = '#22c55e'}
                />
                <span style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%) rotate(2deg)',
                  fontFamily: "'Satisfy', cursive",
                  fontSize: '3.6rem',
                  fontWeight: 400,
                  color: '#fff',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  display: 'block',
                  width: 'max-content',
                  lineHeight: 1,
                  textShadow: '0 1px 3px rgba(0,0,0,0.4)',
                }}>Resume</span>
              </a>
            </div>
          </div>

          {/* CARD 3 — Available for Hire */}
          <div className="hcard hcard-hire" style={cardBase}>
            {/* Green dot + title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span style={{
                display: 'inline-block', width: 7, height: 7, borderRadius: '50%',
                background: '#22c55e', boxShadow: '0 0 8px #22c55e',
                flexShrink: 0, animation: 'blink 2s infinite',
              }} />
              <span style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: '1.05rem',
                color: '#22c55e',
                letterSpacing: '0.05em',
                lineHeight: 1,
              }}>AVAILABLE FOR HIRE</span>
            </div>

            {/* Body */}
            <p style={{
              fontSize: '0.72rem',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.65,
              margin: 0,
            }}>
              Open to full-time roles. Specialized in{' '}
              <span style={{ color: '#22c55e' }}>React</span>,{' '}
              <span style={{ color: '#22c55e' }}>Node.js</span> &amp;{' '}
              <span style={{ color: '#22c55e' }}>Django</span>.
              focused on delivering fast, scalable, and production-ready web solutions.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
              {['Remote', 'Bhopal', 'Full-time'].map(tag => (
                <span key={tag} style={{
                  padding: '0.18rem 0.55rem',
                  border: '1px solid rgba(34,197,94,0.4)',
                  color: '#22c55e',
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: '0.55rem',
                  letterSpacing: '0.06em',
                  borderRadius: '2px',
                  cursor: 'default',
                  transition: 'background .2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,197,94,0.1)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >{tag}</span>
              ))}
            </div>

            {/* CTA */}
            <a href="#contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.48rem 1rem',
              background: '#22c55e',
              color: '#000',
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: '1rem',
              fontWeight: 1000,
              textDecoration: 'none',
              letterSpacing: '0.1em',
              borderRadius: '10px',
              marginTop: 'auto',
              alignSelf: 'flex-start',
              transition: 'background .2s, transform .2s',
              whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#16a34a'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#22c55e'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >Let's Talk →</a>
          </div>

        </div>
      </div>

      {/* ── Bottom row ── */}
      <div className="hero-bottom" id="hero-bottom">

        <div className="hero-desc">
          I'm a <strong>Full-Stack Developer</strong> specializing in{' '}
          <span style={{ color: 'var(--orange)' }}>React.js, Node.js, Django</span>{' '}
          and modern web architecture. I build things that are fast, clean, and built to convert.
        </div>        

        <div className="hero-stats">
          <div className="hstat">
            <div className="hstat-num"><span className="orange">6</span>+</div>
            <div className="hstat-label">Projects</div>
          </div>
          <div className="hstat">
            <div className="hstat-num"><span className="orange">8</span>+</div>
            <div className="hstat-label">Technologies</div>
          </div>
          <div className="hstat">
            <div className="hstat-num">6<span className="orange">.</span>88</div>
            <div className="hstat-label">CGPA</div>
          </div>
        </div>

        <div className="hero-cta">
          <a href="#project" className="btn-hero filled">View My Work ↓</a>
          <a href="#contact" className="btn-hero">Hire Me</a>
        </div>
      </div>

      <div className="scroll-hint">Scroll Down</div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
        .hcard { opacity: 0; }
        .hcard:hover { border-color: rgba(34,197,94,0.2) !important; }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.3;} }
      `}</style>
    </section>
  );
};

export default Hero;