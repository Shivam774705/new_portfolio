import React, { useEffect, useRef, useState } from 'react';
import { API } from '../config';
const BALLOONS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Shivam774705',
    color: '#e85d04',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width="30" height="30">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/shivam-kumar-kesharwani',
    color: '#f48c06',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width="30" height="30">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:kumarshivam774705@gmail.com',
    color: '#e85d04',
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" width="30" height="30">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

/* How long the string is at rest */
const STRING_H = 80;

export default function Contact() {
  const balloonRefs = useRef([]);
  const svgStringRefs = useRef([]);
  const anchorRefs = useRef([]);
  const isDragging = useRef(false);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [statusMsg, setStatusMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setStatusMsg("Sending message...");

    try {
      const response = await fetch(`${API}/api/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setStatusMsg("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      setStatus("error");
      setStatusMsg(error.message || "Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus('idle');
        setStatusMsg('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  useEffect(() => {
    const loadGSAP = () =>
      window.gsap
        ? Promise.resolve(window.gsap)
        : new Promise((res) => {
          const s = document.createElement('script');
          s.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
          s.onload = () => res(window.gsap);
          document.head.appendChild(s);
        });

    loadGSAP().then((gsap) => {
      balloonRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el,
          { y: -(STRING_H + 120), opacity: 0, scale: 0.5 },
          {
            y: 0, opacity: 1, scale: 1,
            duration: 1.5, delay: 0.5 + i * 0.2,
            ease: 'elastic.out(1, 0.5)'
          }
        );
        gsap.to(el, {
          rotation: i % 2 === 0 ? 8 : -8,
          transformOrigin: `50% -${STRING_H}px`,
          duration: 2.5 + i * 0.5,
          repeat: -1, yoyo: true,
          ease: 'sine.inOut',
          delay: 0.5 + i * 0.2 + 1.6,
        });
      });
    });
  }, []);

  const updateString = (i, dx, dy) => {
    const svg = svgStringRefs.current[i];
    if (!svg) return;
    const endX = dx;
    const endY = STRING_H + dy;
    const minX = Math.min(0, endX) - 10;
    const maxX = Math.max(0, endX) + 10;
    const vbW = maxX - minX;
    const vbH = Math.max(STRING_H, endY) + 10;
    svg.setAttribute('viewBox', `${minX} 0 ${vbW} ${vbH}`);
    svg.setAttribute('width', String(vbW));
    svg.setAttribute('height', String(vbH));
    svg.style.marginLeft = `${minX}px`;
    const path = svg.querySelector('path');
    if (!path) return;
    const dist = Math.sqrt(dx * dx + endY * endY);
    const droop = Math.max(4, 18 - dist * 0.06);
    const angle = Math.atan2(endY, endX) + Math.PI / 2;
    const cpX = endX / 2 + Math.cos(angle) * droop;
    const cpY = endY / 2 + Math.sin(angle) * droop;
    path.setAttribute('d', `M 0 0 Q ${cpX} ${cpY} ${endX} ${endY}`);
  };

  const startDrag = (e, i) => {
    e.preventDefault();
    const gsap = window.gsap;
    if (!gsap) return;
    const el = balloonRefs.current[i];
    gsap.killTweensOf(el);
    isDragging.current = true;
    const startX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const startY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;

    const onMove = (ev) => {
      const cx = ev.clientX ?? ev.touches?.[0]?.clientX ?? startX;
      const cy = ev.clientY ?? ev.touches?.[0]?.clientY ?? startY;
      const dx = cx - startX;
      const dy = cy - startY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const clamp = Math.min(dist, 200);
      const squishAlong = Math.max(0.6, 1 - clamp * 0.002);
      const squishPerp = Math.min(1.4, 1 + clamp * 0.0015);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI) - 90;
      gsap.set(el, { x: dx, y: dy, scaleX: squishPerp, scaleY: squishAlong, rotation: angle, transformOrigin: '50% 50%' });
      updateString(i, dx, dy);
    };

    const onUp = () => {
      isDragging.current = false;
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      const svg = svgStringRefs.current[i];
      if (svg) {
        svg.setAttribute('viewBox', `0 0 24 ${STRING_H}`);
        svg.setAttribute('width', '24');
        svg.setAttribute('height', String(STRING_H));
        svg.style.marginLeft = '0px';
        const path = svg.querySelector('path');
        if (path) path.setAttribute('d', `M 12 0 Q 5 ${STRING_H / 2} 12 ${STRING_H}`);
      }
      gsap.to(el, {
        x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0,
        duration: 1.8, ease: 'elastic.out(1.3, 0.35)',
        onComplete: () => {
          gsap.to(el, {
            rotation: i % 2 === 0 ? 8 : -8,
            transformOrigin: `50% -${STRING_H}px`,
            duration: 2.5 + i * 0.5,
            repeat: -1, yoyo: true, ease: 'sine.inOut',
          });
        },
      });
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  return (
    <>
      <style>{`
        /* ── scoped balloon styles — zero site CSS conflicts ── */

        /*
          The heading+balloon wrapper:
          - relative so balloons can be absolutely positioned
          - min-height covers the heading height
        */
        .bln-heading-wrap {
          position: relative;
          display: inline-block;
          width: 100%;
          padding-right: 320px; /* Default for desktop */
        }
        @media (max-width: 800px) {
          .bln-heading-wrap { padding-right: 0; }
        }

        /*
          Balloon zone: absolutely pinned to TOP-RIGHT of the heading block.
          Strings hang DOWN from the top edge.
        */
        .bln-zone {
          position: absolute;
          top: 0;                  /* strings start from the very top */
          right: 0;                /* sit to the right of the heading text */
          display: flex;
          flex-direction: row;
          gap: 1.8rem;
          align-items: flex-start; /* strings grow downward */
          user-select: none;
          -webkit-user-select: none;
          overflow: visible;
          pointer-events: none;    /* container doesn't block heading clicks */
        }

        .bln-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: visible;
          pointer-events: all;     /* re-enable on children */
        }

        .bln-svg-string {
          display: block;
          flex-shrink: 0;
          overflow: visible;
          margin-bottom: -3px;
          pointer-events: none;
          position: relative;
          z-index: 1;
        }

        .bln-circle {
          position: relative;
          width: 88px;
          height: 88px;
          border-radius: 50%;
          border: 1.5px solid;
          background: linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          cursor: grab;
          text-decoration: none;
          touch-action: none;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.07);
          will-change: transform;
          z-index: 2;
        }
        .bln-circle:active { cursor: grabbing; }
        .bln-circle:hover {
          box-shadow: 0 18px 55px rgba(232,93,4,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .bln-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.48rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          opacity: 0.7;
          pointer-events: none;
        }
        .bln-glow {
          position: absolute; inset: 0;
          border-radius: 50%; pointer-events: none;
        }
        .bln-shine {
          position: absolute; top: 14%; left: 20%;
          width: 30%; height: 15%; border-radius: 50%;
          background: rgba(255,255,255,0.13);
          pointer-events: none; transform: rotate(-30deg);
        }

        /* responsive: on small screens give heading enough right padding */
          /* ── 800px responsive: move balloons below heading text ── */
          @media (max-width: 800px) {
            .bln-zone { 
              position: relative; 
              right: auto; 
              top: auto; 
              margin-top: 2rem;
              justify-content: center;
              gap: 1.5rem; 
            }
            .bln-circle { width: 80px; height: 80px; }
            .bln-heading-wrap { display: flex; flex-direction: column; }
          }

          /* ── 450px responsive: smaller balloons ── */
          @media (max-width: 450px) {
            .bln-circle { width: 72px; height: 72px; }
            .bln-zone { gap: 1.2rem; margin-top: 1.5rem; }
            .bln-label { font-size: 0.42rem; }
          }

          /* ── 360px responsive: even tighter ── */
          @media (max-width: 360px) {
            .bln-circle { width: 64px; height: 64px; }
            .bln-zone { gap: 1rem; margin-top: 1.2rem; }
            .bln-label { font-size: 0.38rem; }
          }

          /* Toast Popup Styles */
          .toast-container {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 9999;
            pointer-events: none;
          }
          .toast {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 18px 28px;
            border-radius: 16px;
            background: linear-gradient(135deg, rgba(30, 30, 30, 0.85) 0%, rgba(15, 15, 15, 0.9) 100%);
            backdrop-filter: blur(20px) saturate(180%);
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.12);
            color: #fff;
            box-shadow: 
              0 20px 40px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.15),
              inset 0 0 10px rgba(255, 255, 255, 0.05);
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.95rem;
            letter-spacing: 0.5px;
            transform: translateY(20px);
            opacity: 0;
            animation: toast-in 0.6s forwards cubic-bezier(0.22, 1, 0.36, 1);
          }
          .toast.success { 
            border-color: rgba(74, 222, 128, 0.4); 
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(74, 222, 128, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
          .toast.error { 
            border-color: rgba(248, 113, 113, 0.4);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(248, 113, 113, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
          .toast-icon { font-size: 1.2rem; }
          
          @keyframes toast-in {
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>

      <section id="contact" className="section pad">
        <div className="maxw">
          <div className="sec-label will-fade">// 04 — Get In Touch</div>

          <div className="contact-layout">
            {/* ── LEFT COLUMN ── */}
            <div>
              {/*
                Wrapper is relative.
                Heading sits normally.
                Balloon zone is absolute — top:0 right:0 — so strings
                visually hang from the top of the heading block, just
                like the reference image.
              */}
              <div className="bln-heading-wrap will-fade">

                {/* the big heading */}
                <h2 className="contact-big" style={{ margin: 0 }}>
                  LET'S<br />
                  BUILD<br />
                  <span className="orange">TOGETHER.</span>
                </h2>

                {/* balloons pinned top-right, hanging down */}
                <div className="bln-zone">
                  {BALLOONS.map((b, i) => (
                    <div
                      className="bln-col"
                      key={b.id}
                      ref={(el) => (anchorRefs.current[i] = el)}
                    >
                      {/* stretchy SVG string */}
                      <svg
                        ref={(el) => (svgStringRefs.current[i] = el)}
                        className="bln-svg-string"
                        width="24"
                        height={STRING_H}
                        viewBox={`0 0 24 ${STRING_H}`}
                        aria-hidden="true"
                      >
                        <path
                          d={`M 12 0 Q 5 ${STRING_H / 2} 12 ${STRING_H}`}
                          stroke={b.color}
                          strokeWidth="1.5"
                          strokeDasharray="5 3"
                          fill="none"
                          opacity="0.65"
                        />
                      </svg>

                      {/* balloon */}
                      <a
                        ref={(el) => (balloonRefs.current[i] = el)}
                        href={b.href}
                        target={b.id !== 'email' ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        aria-label={b.label}
                        className="bln-circle"
                        style={{ borderColor: b.color + '99', color: b.color }}
                        onPointerDown={(e) => startDrag(e, i)}
                        onMouseEnter={(e) => {
                          if (!isDragging.current)
                            window.gsap?.to(e.currentTarget, { scale: 1.12, duration: 0.3, ease: 'back.out(2)' });
                        }}
                        onMouseLeave={(e) => {
                          if (!isDragging.current)
                            window.gsap?.to(e.currentTarget, { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
                        }}
                      >
                        {b.svg}
                        <span className="bln-label">{b.label}</span>
                        <span className="bln-glow"
                          style={{ background: `radial-gradient(circle at 38% 32%, ${b.color}25, transparent 65%)` }} />
                        <span className="bln-shine" />
                      </a>
                    </div>
                  ))}
                </div>

              </div>{/* end bln-heading-wrap */}

              <p className="contact-tagline will-fade" style={{ marginTop: '1.5rem' }}>
                Let’s build something extraordinary. I’m open to new opportunities and collaborations where innovation meets real-world impact. Have a project or idea? <br /><b style={{ fontSize: '1.2rem' }}>Let’s connect.</b>
              </p>

              {/* <div className="c-info-row will-fade">
                <div className="c-info-item">
                  <div className="c-info-icon">📧</div>
                  <div>
                    <div className="c-info-label">Email</div>
                    <div className="c-info-val">kumarshivam774705@gmail.com</div>
                  </div>
                </div>
                <div className="c-info-item">
                  <div className="c-info-icon">📱</div>
                  <div>
                    <div className="c-info-label">Phone</div>
                    <div className="c-info-val">+91-7747053574</div>
                  </div>
                </div>
                <div className="c-info-item">
                  <div className="c-info-icon">📍</div>
                  <div>
                    <div className="c-info-label">Location</div>
                    <div className="c-info-val">Bhopal, MP, India</div>
                  </div>
                </div>
              </div>

              <div className="social-links will-fade">
                <a href="https://github.com/Shivam774705" className="s-link">GitHub</a>
                <a href="https://linkedin.com/in/shivam-kumar-kesharwani" className="s-link">LinkedIn</a>
                <a href="mailto:kumarshivam774705@gmail.com" className="s-link">Email</a>
                <a href="tel:+917747053574" className="s-link">Call</a>
              </div> */}
            </div>

            {/* ── RIGHT COLUMN: form ── */}
            <div className="will-slide-right">
              <form className="cf-form" onSubmit={handleSubmit}>
                <div className="cf-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="cf-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="cf-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Hello! I'd like to discuss a project..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Status Toast Popup */}
        {(status === 'success' || status === 'error') && (
          <div className="toast-container">
            <div className={`toast ${status}`}>
              <span className="toast-icon">
                {status === 'success' ? '' : ''}
              </span>
              <span>{statusMsg}</span>
            </div>
          </div>
        )}
      </section>
    </>
  );
}