import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import heroImg from '../assets/hero.png';

gsap.registerPlugin(ScrollTrigger);

/* ══════════════════ TECH STACK ICONS ══════════════════ */
const ReactIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <circle cx="20" cy="20" r="3.5" fill="#61DAFB"/>
    <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.5" fill="none"/>
    <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 20 20)"/>
    <ellipse cx="20" cy="20" rx="16" ry="6" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 20 20)"/>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <text x="4" y="28" fontSize="16" fontWeight="bold" fill="#8CC84B" fontFamily="monospace">JS</text>
    <circle cx="32" cy="10" r="5" fill="#8CC84B"/>
    <text x="30" y="14" fontSize="8" fill="white" fontWeight="bold" fontFamily="monospace">N</text>
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <circle cx="20" cy="20" r="16" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.2"/>
    <text x="13" y="25" fontSize="14" fontWeight="bold" fill="white" fontFamily="sans-serif">N</text>
  </svg>
);

const DjangoIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <rect x="4" y="4" width="32" height="32" rx="3" fill="#092E20"/>
    <text x="8" y="26" fontSize="14" fontWeight="bold" fill="#FFD700" fontFamily="monospace">DJ</text>
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
    <path d="M20 4 C20 4 28 14 28 22 C28 28 24.4 33 20 35 C15.6 33 12 28 12 22 C12 14 20 4 20 4Z" fill="#4DB33D"/>
    <path d="M20 35 L20 22" stroke="#A8744A" strokeWidth="2"/>
  </svg>
);

/* ══════════════════ ANIMATED COUNTER ══════════════════ */
const Counter = ({ end, suffix = '+' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = () => {
        start++;
        setCount(start);
        if (start < end) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{count}{suffix}</span>;
};

/* ══════════════════ HERO ══════════════════ */
const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.hero-badge', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.2 })
      .fromTo('.hero-title-line', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.12 }, '-=0.3')
      .fromTo('.hero-subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
      .fromTo('.hero-tech-icons', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
      .fromTo('.hero-btns', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
      .fromTo('.hero-stat-item', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 }, '-=0.3')
      .fromTo('.hero-img-wrap', { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: 'power2.out' }, 0.4);

    // Parallax scroll
    gsap.to('.hero-img-wrap', {
      yPercent: -8,
      ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.5 },
    });

    // Glow pulse
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.55,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <>
      <section id="hero" ref={heroRef} className="hero-section">
        {/* Background glow */}
        <div className="hero-bg-glow" ref={glowRef} />
        <div className="hero-bg-glow hero-bg-glow-2" />
        {/* Grid lines */}
        <div className="hero-grid-lines">
          {[...Array(6)].map((_, i) => <div key={i} className="hero-grid-line" />)}
        </div>

        <div className="hero-container">
          {/* ── LEFT CONTENT ── */}
          <div className="hero-left" ref={contentRef}>
            {/* Badge */}
            <div className="hero-badge">
              <span>FULL-STACK DEVELOPER</span>
            </div>

            {/* Name */}
            <h1 className="hero-title">
              <div className="hero-title-line hero-title-gray">Hi, I'm <span className="hero-name-green">Shivam</span></div>
              <div className="hero-title-line">Kumar Kesharwani</div>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              I build scalable, modern and user-focused<br/>web applications.
            </p>

            {/* Tech stack */}
            <div className="hero-tech-icons">
              <div className="hero-tech-icon hero-tech-react" title="React"><ReactIcon /></div>
              <div className="hero-tech-icon hero-tech-node" title="Node.js"><NodeIcon /></div>
              <div className="hero-tech-icon hero-tech-next" title="Next.js"><NextIcon /></div>
              <div className="hero-tech-icon hero-tech-django" title="Django"><DjangoIcon /></div>
              <div className="hero-tech-icon hero-tech-mongo" title="MongoDB"><MongoIcon /></div>
            </div>

            {/* Buttons */}
            <div className="hero-btns">
              <a href="#project" className="hero-btn-primary">
                View My Work <span className="hero-btn-arrow">→</span>
              </a>
              <a href="/Shivam Kumar Kesharwani.pdf" target="_blank" rel="noopener noreferrer" className="hero-btn-secondary">
                Download Resume <span style={{fontSize:'0.9rem'}}>↓</span>
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <div className="hero-stat-number"><Counter end={10} /></div>
                <div className="hero-stat-label">Projects</div>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                </div>
                <div className="hero-stat-number"><Counter end={24} /></div>
                <div className="hero-stat-label">Technologies</div>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div className="hero-stat-number"><Counter end={2} /></div>
                <div className="hero-stat-label">Years Coding</div>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat-item">
                <div className="hero-stat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </div>
                <div className="hero-stat-number"><Counter end={100} suffix="%" /></div>
                <div className="hero-stat-label">Dedication</div>
              </div>
            </div>

            {/* Scroll hint */}
            <div className="hero-scroll-hint">
              <div className="hero-scroll-mouse">
                <div className="hero-scroll-wheel" />
              </div>
              <span>Scroll to explore</span>
            </div>
          </div>

          {/* ── RIGHT: HERO IMAGE ── */}
          <div className="hero-right">
            <div className="hero-img-wrap" ref={imageRef}>
              {/* Floating code card */}
              <div className="hero-float-card hero-float-code">
                <div className="hero-float-dots">
                  <span/><span/><span/>
                </div>
                <div className="hero-code-lines">
                  <div><span style={{color:'#22c55e'}}>const</span> <span style={{color:'#60a5fa'}}>dev</span> = {'{'}</div>
                  <div>&nbsp;&nbsp;<span style={{color:'#e2e8f0'}}>name</span>: <span style={{color:'#fbbf24'}}>"Shivam"</span>,</div>
                  <div>&nbsp;&nbsp;<span style={{color:'#e2e8f0'}}>role</span>: <span style={{color:'#fbbf24'}}>"Full-Stack"</span></div>
                  <div>{'}'}</div>
                </div>
              </div>

              {/* Floating tag top right */}
              <div className="hero-float-card hero-float-tag">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>

              {/* Image */}
              <div className="hero-img-bg-glow" />
              <img src={heroImg} alt="Shivam Kumar Kesharwani" className="hero-photo" />
            </div>
          </div>
        </div>

        {/* ── WORKING WITH STRIP ── */}
          <div className="hero-working-label">WORKING WITH</div>
      </section>

      <style>{`
        /* ════════════════════════════════════
           HERO REDESIGN — FULL STYLES
        ════════════════════════════════════ */

        .hero-section {
          position: relative;
          min-height: 100vh;
          background: #0a0a0a;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          padding-top: 80px;
        }

        /* BG Glow blobs */
        .hero-bg-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%);
          top: 10%;
          right: 5%;
          pointer-events: none;
          z-index: 0;
          transform-origin: center;
        }
        .hero-bg-glow-2 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%);
          top: 50%;
          left: -5%;
          animation: glowPulse2 3.5s ease-in-out infinite;
        }
        @keyframes glowPulse2 {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }

        /* Grid lines */
        .hero-grid-lines {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          pointer-events: none;
          z-index: 0;
        }
        .hero-grid-line {
          border-right: 1px solid rgba(255,255,255,0.03);
        }

        /* Main container */
        .hero-container {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 0;
          flex: 1;
          padding: 1rem 5rem 1rem 5rem;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }

        /* ── LEFT ── */
        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.9rem;
          background: rgba(34,197,94,0.08);
          border: 1px solid rgba(34,197,94,0.3);
          border-radius: 100px;
          width: fit-content;
        }
        .hero-badge span:last-child {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          color: #22c55e;
          font-weight: 500;
        }

        /* Title */
        .hero-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(2.4rem, 4.5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin: 0;
        }
        .hero-title-line {
          display: block;
        }
        .hero-title-gray {
          color: #ffffff;
        }
        .hero-name-green {
          color: #22c55e;
        }

        /* Subtitle */
        .hero-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          margin: 0;
          font-weight: 300;
        }

        /* Tech icons */
        .hero-tech-icons {
          display: flex;
          gap: 0.6rem;
          align-items: center;
        }
        .hero-tech-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          transition: all 0.2s;
          cursor: default;
          position: relative;
        }
        .hero-tech-icon:hover {
          border-color: rgba(34,197,94,0.5);
          background: rgba(34,197,94,0.08);
          transform: translateY(-2px);
        }
        .hero-tech-icon svg { width: 20px; height: 20px; }

        /* Buttons */
        .hero-btns {
          display: flex;
          gap: 0.9rem;
          align-items: center;
          flex-wrap: wrap;
        }
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.7rem;
          background: #22c55e;
          color: #000;
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          text-decoration: none;
          border-radius: 8px;
          border: 2px solid #22c55e;
          transition: all 0.25s;
          letter-spacing: 0.01em;
        }
        .hero-btn-primary:hover {
          background: #16a34a;
          border-color: #16a34a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(34,197,94,0.3);
        }
        .hero-btn-arrow {
          font-size: 1.1rem;
          transition: transform 0.2s;
        }
        .hero-btn-primary:hover .hero-btn-arrow {
          transform: translateX(3px);
        }
        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.7rem;
          background: transparent;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          border: 2px solid rgba(255,255,255,0.2);
          transition: all 0.25s;
          letter-spacing: 0.01em;
        }
        .hero-btn-secondary:hover {
          border-color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.06);
          transform: translateY(-2px);
        }

        /* Stats */
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 1.1rem 1.2rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          backdrop-filter: blur(10px);
        }
        .hero-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
          flex: 1;
          text-align: center;
        }
        .hero-stat-icon {
          color: #22c55e;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.1rem;
        }
        .hero-stat-number {
          font-family: 'Inter', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          color: #22c55e;
          line-height: 1;
        }
        .hero-stat-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
        }
        .hero-stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.08);
          flex-shrink: 0;
        }

        /* Scroll hint */
        .hero-scroll-hint {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          color: rgba(255,255,255,0.3);
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .hero-scroll-mouse {
          width: 20px;
          height: 32px;
          border: 1.5px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          display: flex;
          justify-content: center;
          padding-top: 5px;
          flex-shrink: 0;
        }
        .hero-scroll-wheel {
          width: 3px;
          height: 8px;
          background: #22c55e;
          border-radius: 2px;
          animation: scrollWheel 1.8s ease-in-out infinite;
        }
        @keyframes scrollWheel {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }

        /* ── RIGHT: IMAGE ── */
        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          height: 100%;
        }
        .hero-img-wrap {
          position: relative;
          width: 100%;
          max-width: 480px;
          display: flex;
          justify-content: center;
        }
        .hero-img-bg-glow {
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 70%;
          height: 60%;
          background: radial-gradient(ellipse, rgba(34,197,94,0.25) 0%, transparent 70%);
          filter: blur(30px);
          pointer-events: none;
          z-index: 0;
        }
        .hero-photo {
          width: 100%;
          max-width: 420px;
          height: auto;
          object-fit: cover;
          object-position: top;
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 20px 60px rgba(34,197,94,0.15));
        }

        /* Floating cards */
        .hero-float-card {
          position: absolute;
          z-index: 3;
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          animation: heroFloat 4s ease-in-out infinite;
        }
        .hero-float-code {
          top: 12%;
          left: -5%;
          background: rgba(10,15,10,0.85);
          padding: 0.7rem 1rem;
          min-width: 180px;
          animation-delay: 0s;
        }
        .hero-float-tag {
          top: 35%;
          right: 0%;
          background: rgba(10,15,10,0.85);
          padding: 0.6rem;
          border-color: rgba(34,197,94,0.3);
          animation-delay: 1.5s;
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .hero-float-dots {
          display: flex;
          gap: 4px;
          margin-bottom: 0.5rem;
        }
        .hero-float-dots span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }
        .hero-float-dots span:nth-child(1) { background: #ff5f57; }
        .hero-float-dots span:nth-child(2) { background: #ffbd2e; }
        .hero-float-dots span:nth-child(3) { background: #28c840; }
        .hero-code-lines {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.62rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.7);
        }

        .hero-working-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.3em;
          color: rgba(255,255,255,0.25);
          text-align: center;
          margin-bottom: 0.9rem;
          text-transform: uppercase;
        }
        .hero-working-logo-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255,255,255,0.35);
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          transition: color 0.2s;
          cursor: default;
        }
        .hero-working-logo-item:hover {
          color: rgba(255,255,255,0.7);
        }
        .hero-working-logo-icon {
          display: flex;
          align-items: center;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        .hero-working-logo-item:hover .hero-working-logo-icon {
          opacity: 1;
        }

        /* ════════════════════════════════════
           HERO RESPONSIVE — ALL BREAKPOINTS
        ════════════════════════════════════ */

        /* 1440px+: wide screen, more breathing room */
        @media (min-width: 1440px) {
          .hero-container {
            padding: 1.5rem 6rem 2rem 6rem;
            max-width: 1400px;
          }
          .hero-title {
            font-size: clamp(3.2rem, 4vw, 5rem);
          }
          .hero-subtitle { font-size: 1.1rem; }
          .hero-photo { max-width: 500px; }
          .hero-bg-glow { width: 650px; height: 650px; }
        }

        /* 1100px: slightly compact */
        @media (max-width: 1100px) {
          .hero-container {
            padding: 2rem 3rem 1rem 3rem;
          }
          .hero-title {
            font-size: clamp(2.2rem, 4vw, 3.5rem);
          }
        }

        /* 800px: tablet — stack to single column */
        @media (max-width: 800px) {
          .hero-section { padding-top: 65px; }
          .hero-container {
            grid-template-columns: 1fr;
            padding: 1.8rem 1.8rem 1rem 1.8rem;
            gap: 1.5rem;
          }
          .hero-left {
            order: 1;
            gap: 1.2rem;
          }
          .hero-right {
            order: 0;
            max-height: 320px;
          }
          .hero-photo { max-width: 260px; }
          .hero-title {
            font-size: clamp(2rem, 6vw, 3rem);
          }
          .hero-subtitle { font-size: 0.9rem; }
          .hero-float-code { top: 5%; left: 0%; }
          .hero-working-logo-item span { font-size: 0.72rem; }
          .hero-stats {
            gap: 0;
            padding: 0.9rem 0.6rem;
          }
          .hero-stat-number { font-size: 1.1rem; }
          .hero-stat-label { font-size: 0.48rem; }
          .hero-stat-icon svg { width: 15px; height: 15px; }
          .hero-bg-glow { width: 320px; height: 320px; }
        }

        /* 450px: large phones */
        @media (max-width: 450px) {
          .hero-section { padding-top: 60px; min-height: 100svh; }
          .hero-container {
            padding: 1.5rem 1.2rem 1rem 1.2rem;
            gap: 1.2rem;
          }
          .hero-title {
            font-size: clamp(1.75rem, 8vw, 2.4rem);
            line-height: 1.15;
          }
          .hero-subtitle {
            font-size: 0.82rem;
            line-height: 1.6;
          }
          .hero-badge span:last-child { font-size: 0.58rem; letter-spacing: 0.14em; }
          .hero-badge { padding: 0.28rem 0.75rem; }
          .hero-btns {
            flex-direction: column;
            width: 100%;
          }
          .hero-btn-primary, .hero-btn-secondary {
            width: 100%;
            justify-content: center;
            padding: 0.7rem 1.2rem;
            font-size: 0.82rem;
          }
          .hero-tech-icons { gap: 0.4rem; }
          .hero-tech-icon { width: 34px; height: 34px; }
          .hero-tech-icon svg { width: 18px; height: 18px; }
          .hero-stats {
            padding: 0.7rem 0.4rem;
          }
          .hero-stat-number { font-size: 1rem; }
          .hero-stat-label { font-size: 0.44rem; }
          .hero-stat-divider { height: 30px; }
          .hero-stat-icon { display: none; }
          .hero-scroll-hint { gap: 0.5rem; font-size: 0.52rem; }
          .hero-scroll-mouse { width: 17px; height: 27px; }
          .hero-right { max-height: 260px; }
          .hero-photo { max-width: 200px; }
          .hero-working-logo-item span { display: none; }
          .hero-working-logo-icon svg { width: 22px; height: 22px; }
          .hero-float-code { display: none; }
          .hero-float-tag { display: none; }
          .hero-bg-glow { width: 240px; height: 240px; }
        }

        /* 360px: ultra-small phones */
        @media (max-width: 360px) {
          .hero-section { padding-top: 56px; }
          .hero-container {
            padding: 1.2rem 1rem 0.8rem 1rem;
            gap: 1rem;
          }
          .hero-title {
            font-size: clamp(1.5rem, 8.5vw, 2rem);
            line-height: 1.15;
          }
          .hero-subtitle { font-size: 0.76rem; }
          .hero-badge { padding: 0.22rem 0.6rem; }
          .hero-badge span:last-child { font-size: 0.52rem; }
          .hero-btn-primary, .hero-btn-secondary {
            padding: 0.65rem 1rem;
            font-size: 0.78rem;
          }
          .hero-tech-icon { width: 30px; height: 30px; }
          .hero-tech-icon svg { width: 15px; height: 15px; }
          .hero-stats { padding: 0.6rem 0.3rem; border-radius: 10px; }
          .hero-stat-number { font-size: 0.95rem; }
          .hero-stat-label { font-size: 0.4rem; }
          .hero-stat-divider { height: 24px; }
          .hero-right { max-height: 220px; }
          .hero-photo { max-width: 170px; }
          .hero-working-logo-icon svg { width: 18px; height: 18px; }
          .hero-scroll-hint { display: none; }
          .hero-bg-glow { display: none; }
        }
      `}</style>

    </>
  );
};

export default Hero;