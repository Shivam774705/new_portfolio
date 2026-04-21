import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './index.css';

gsap.registerPlugin(ScrollTrigger);

/* ══════════════════ NAVBAR ══════════════════ */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skill', id: 'skill' },
    { label: 'Projects', href: '#project', id: 'project' },
    { label: 'Experience', href: '#about', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (mobileOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { opacity: 0, y: -10, scaleY: 0.97 },
          { opacity: 1, y: 0, scaleY: 1, duration: 0.25, ease: 'power2.out', display: 'flex' }
        );
      } else {
        gsap.to(mobileMenuRef.current,
          { opacity: 0, y: -10, duration: 0.2, ease: 'power2.in', onComplete: () => { if (mobileMenuRef.current) mobileMenuRef.current.style.display = 'none'; } }
        );
      }
    }
  }, [mobileOpen]);

  return (
    <>
      <header className={`skk-nav${scrolled ? ' skk-nav-scrolled' : ''}`}>
        {/* Logo */}
        <a href="#hero" className="skk-logo">
          <span className="skk-logo-bracket">&lt;</span>
          <span className="skk-logo-slash">/</span>
          <span className="skk-logo-text">{'>'} SKK</span>
        </a>

        {/* Desktop nav links */}
        <nav className="skk-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`skk-nav-link${activeSection === link.id ? ' skk-nav-link-active' : ''}`}
              onClick={() => setActiveSection(link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Let's Talk button */}
        <div className="skk-nav-right">
          <a href="#contact" className="skk-btn-talk">
            Let's Talk
            <span className="skk-btn-dot" />
          </a>
          {/* Hamburger */}
          <button
            className="skk-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`skk-ham-line${mobileOpen ? ' open-1' : ''}`} />
            <span className={`skk-ham-line${mobileOpen ? ' open-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div ref={mobileMenuRef} className="skk-mobile-menu" style={{ display: 'none' }}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className="skk-mobile-link"
            onClick={() => { setMobileOpen(false); setActiveSection(link.id); }}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="skk-mobile-cta" onClick={() => setMobileOpen(false)}>Let's Talk</a>
      </div>

      <style>{`
        .skk-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 3rem;
          transition: background 0.3s, backdrop-filter 0.3s, border-color 0.3s;
          border-bottom: 1px solid transparent;
        }
        .skk-nav-scrolled {
          background: rgba(8, 8, 8, 0.92);
          backdrop-filter: blur(16px);
          border-bottom-color: rgba(255,255,255,0.06);
        }

        /* Logo */
        .skk-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: -0.01em;
          gap: 0;
          user-select: none;
        }
        .skk-logo-bracket { color: #22c55e; }
        .skk-logo-slash { color: #22c55e; }
        .skk-logo-text { color: #ffffff; margin-left: 2px; }

        /* Desktop nav links */
        .skk-nav-links {
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }
        .skk-nav-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 400;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
          transition: all 0.2s;
          letter-spacing: 0.01em;
        }
        .skk-nav-link:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.06);
        }
        .skk-nav-link-active {
          color: #ffffff;
        }

        /* Right button */
        .skk-nav-right {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .skk-btn-talk {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 1.1rem;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          color: #ffffff;
          text-decoration: none;
          transition: all 0.2s;
        }
        .skk-btn-talk:hover {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.25);
        }
        .skk-btn-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 6px #22c55e;
          animation: navDotBlink 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes navDotBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Hamburger */
        .skk-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
        }
        .skk-ham-line {
          width: 22px;
          height: 2px;
          background: #ffffff;
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.25s;
          transform-origin: center;
          display: block;
        }
        .skk-ham-line.open-1 { transform: translateY(3.5px) rotate(45deg); }
        .skk-ham-line.open-2 { transform: translateY(-3.5px) rotate(-45deg); }

        /* Mobile menu */
        .skk-mobile-menu {
          position: fixed;
          top: 64px;
          left: 1rem;
          right: 1rem;
          z-index: 999;
          flex-direction: column;
          gap: 0.3rem;
          background: rgba(10,12,10,0.97);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 1rem;
          backdrop-filter: blur(16px);
        }
        .skk-mobile-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          padding: 0.65rem 1rem;
          border-radius: 10px;
          transition: all 0.2s;
        }
        .skk-mobile-link:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.06);
        }
        .skk-mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.4rem;
          padding: 0.75rem;
          background: #22c55e;
          color: #000;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          border-radius: 10px;
          transition: background 0.2s;
        }
        .skk-mobile-cta:hover { background: #16a34a; }

        /* ── 1440px: wide navbar ── */
        @media (min-width: 1440px) {
          .skk-nav { padding: 1.2rem 5rem; }
          .skk-nav-link { font-size: 0.88rem; padding: 0.4rem 0.9rem; }
          .skk-logo { font-size: 1.2rem; }
        }

        /* ── 800px: hide links, show hamburger ── */
        @media (max-width: 800px) {
          .skk-nav { padding: 0.9rem 1.5rem; }
          .skk-nav-links { display: none; }
          .skk-btn-talk { display: none; }
          .skk-hamburger { display: flex; }
          .skk-mobile-menu { top: 58px; }
        }

        /* ── 450px: compact mobile nav ── */
        @media (max-width: 450px) {
          .skk-nav { padding: 0.8rem 1.2rem; }
          .skk-logo { font-size: 0.95rem; }
          .skk-mobile-menu {
            top: 54px;
            left: 0.6rem;
            right: 0.6rem;
            padding: 0.8rem;
            border-radius: 14px;
          }
          .skk-mobile-link { font-size: 0.85rem; padding: 0.55rem 0.8rem; }
          .skk-mobile-cta { font-size: 0.85rem; padding: 0.65rem; }
        }

        /* ── 360px: ultra-small phone nav ── */
        @media (max-width: 360px) {
          .skk-nav { padding: 0.7rem 1rem; }
          .skk-logo { font-size: 0.88rem; }
          .skk-ham-line { width: 18px; }
          .skk-mobile-menu {
            top: 50px;
            left: 0.5rem;
            right: 0.5rem;
            padding: 0.7rem;
          }
          .skk-mobile-link { font-size: 0.8rem; padding: 0.5rem 0.7rem; }
          .skk-mobile-cta { font-size: 0.8rem; }
        }
      `}</style>

    </>
  );
};

/* ══════════════════ APP ══════════════════ */
function App() {
  const [loading, setLoading] = useState(true);

  const marqueeItems = [
    { text: 'JavaScript (ES6+)', highlight: true },
    { text: 'Python' },
    { text: 'SQL' },
    { text: 'React.js', highlight: true },
    { text: 'Tailwind CSS', highlight: true },
    { text: 'SCSS' },
    { text: 'Django', highlight: true },
    { text: 'Node.js', highlight: true },
    { text: 'Express.js' },
    { text: 'REST APIs', highlight: true },
    { text: 'MySQL', highlight: true },
    { text: 'MongoDB', highlight: true },
    { text: 'NeonDB' },
    { text: 'Git & GitHub', highlight: true },
    { text: 'Postman', highlight: true },
    { text: 'VS Code' },
    { text: 'Render' },
    { text: 'Figma', highlight: true },
  ];

  const handleLoaderComplete = () => setLoading(false);

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => {
        gsap.utils.toArray('.will-fade').forEach((el) => {
          gsap.to(el, {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          });
        });
        gsap.utils.toArray('.will-slide-left').forEach((el) => {
          gsap.to(el, {
            opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          });
        });
        gsap.utils.toArray('.will-slide-right').forEach((el) => {
          gsap.to(el, {
            opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          });
        });
        gsap.utils.toArray('.sec-big').forEach((el) => {
          gsap.fromTo(el,
            { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
            { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } }
          );
        });
        gsap.utils.toArray('.sk-counter-num span').forEach((el) => {
          const end = parseFloat(el.textContent);
          gsap.from(el, {
            textContent: 0, duration: 1.5, ease: 'power2.out',
            snap: { textContent: Number.isInteger(end) ? 1 : 0.01 },
            scrollTrigger: { trigger: el, start: 'top 85%' },
          });
        });
        gsap.utils.toArray('.project-item').forEach((el, i) => {
          gsap.from(el, {
            opacity: 0, y: 40, duration: 0.7, delay: i * 0.12, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          });
        });
        ScrollTrigger.create({
          onUpdate: (self) => {
            const vel = self.getVelocity();
            gsap.to('#mq2', { skewX: vel / 3000, ease: 'power2.out', overwrite: 'auto', duration: 0.5 });
          },
        });
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return (
    <div className="App">
      <Cursor />
      <Loader onComplete={handleLoaderComplete} />
      {!loading && (
        <>
          <Navbar />
          <Hero />
          <Marquee id="mq1" speed={0.6} items={marqueeItems} />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
