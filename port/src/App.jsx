import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import Cursor from './components/Cursor';
import Loader from './components/Loader';
import PortfolioNavbar from './components/PortfolioNavbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import Blog from './components/Blog';
import Footer from './components/Footer';

import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  const marqueeItems = [
    { text: 'C',highlight: true },
    { text: 'C++' },
    { text: 'Python' },
    { text: 'HTML5' ,highlight: true},
    { text: 'CSS3',highlight: true },
    { text: 'JavaScript' },
    { text: 'React.js' ,highlight: true},
    { text: 'Node.js'  },
    { text: 'Express' },
    { text: 'Django' ,highlight: true },
    { text: 'Tailwind CSS',highlight: true },
    { text: 'SCSS',highlight: true  },
    { text: 'MongoDB',highlight: true },
    { text: 'MySQL',highlight: true },
    { text: 'REST APIs' },
    { text: 'Git & GitHub',highlight: true },
    { text: 'Postman',highlight: true },
    { text: 'Thunder Client',highlight: true },
    { text: 'Chrome DevTools',highlight: true },
  ];

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  const animateHero = () => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('#hn1', { yPercent: 110, duration: 1, delay: 0.1 })
      .from('#hn2', { yPercent: 110, duration: 1 }, '-=0.8')
      .from('#hn3', { yPercent: 110, duration: 1 }, '-=0.8')
      .from('.hero-eyebrow span', { y: 30, opacity: 0, duration: 0.7 }, '-=0.6')
      .from('#hero-bottom', { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
      .from('.scroll-hint', { opacity: 0, duration: 0.5 }, '-=0.3')
      .from('nav', { y: -20, opacity: 0, duration: 0.6 }, 0.2);
  };

  useEffect(() => {
    if (!loading) {
      // Delay slightly to ensure DOM is rendered
      const timeout = setTimeout(() => {
        animateHero();
      }, 100);

      // SCROLL REVEAL
      gsap.utils.toArray('.will-fade').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        });
      });

      gsap.utils.toArray('.will-slide-left').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      gsap.utils.toArray('.will-slide-right').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      // SECTION TITLE WIPE
      gsap.utils.toArray('.sec-big').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
          {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });

      // COUNTER ANIMATION
      gsap.utils.toArray('.sk-counter-num span').forEach((el) => {
        const endText = el.textContent;
        const end = parseFloat(endText);
        gsap.from(el, {
          textContent: 0,
          duration: 1.5,
          ease: 'power2.out',
          snap: { textContent: Number.isInteger(end) ? 1 : 0.01 },
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      // PROJECT ITEMS STAGGER
      gsap.utils.toArray('.project-item').forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          delay: i * 0.12,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      // HORIZONTAL SKILL SCROLL velocity tilt
      ScrollTrigger.create({
        onUpdate: (self) => {
          const vel = self.getVelocity();
          gsap.to('#mq2', { skewX: vel / 3000, ease: 'power2.out', overwrite: 'auto', duration: 0.5 });
        },
      });

      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return (
    <div className="App">
      <Cursor />
      <Loader onComplete={handleLoaderComplete} />
      {!loading && (
        <>
          <div className="site-header" style={{ pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="nav-logo" style={{ pointerEvents: 'auto' }}>SKK</div>
            <PortfolioNavbar style={{ pointerEvents: 'auto' }} />
          </div>
          <Hero />
          <Marquee id="mq1" speed={0.6} items={marqueeItems} />
          <About />
          <Projects />
          <Skills />
          <Contact />
          {/* <Blog /> */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
