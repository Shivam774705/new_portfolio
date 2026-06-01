import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS_DATA = [
  {
    num: '01',
    title: 'LeadEnrich AI',
    tagline: 'B2B Lead Enrichment & Site Scraping Pipeline',
    desc: 'An end-to-end business intelligence and company profiling engine developed in 6 hours for the Relu Consultancy Hackathon, scraping and parsing corporate leads.',
    highlights: [
      {
        label: 'Key Contributions & Engineering Highlights',
        points: [
          'Engineered a dual sitemap-and-homepage scraping pipeline with rapidfuzz-powered similarity link path discovery.',
          'Built BeautifulSoup boilerplate stripping and whitespace compressors, cutting LLM input token load by 70%.',
          'Integrated llama-3.3-70b-versatile via Groq SDK with anti-hallucination system constraints to yield structured JSON data.',
          'Configured thread-safe cache persistence and deployed backend API on Render (Gunicorn) and React frontend on Vercel.'
        ]
      }
    ],
    role: 'AI & Automation Developer',
    year: '2026',
    status: 'Live',
    links: {
      demo: 'https://company-lead-enrichment.vercel.app/',
      github: 'https://github.com/Shivam774705/company-lead-enrichment.git'
    },
    chips: ['React', 'Django', 'Groq API', 'Llama 3.3', 'Python', 'Tailwind CSS']
  },
  {
    num: '02',
    title: 'HBL Auction Platform',
    tagline: 'Real-Time Bid Sync & Hostel Badminton League Bidding System',
    desc: 'Digitized the hostel badminton auction process with a real-time web bidding portal supporting captain rooms, budget balance tracking, and concurrent player status sync.',
    highlights: [
      {
        label: 'Key Contributions & Engineering Highlights',
        points: [
          'Developed Socket.IO bidirectional bidding server supporting sub-second synchronization and race-condition validation.',
          'Built reactive captain wallet ledger in MongoDB with transactional locking to prevent overdraft and duplicate bid entries.',
          'Implemented high-speed state management using Zustand, connecting live auction events to reactive captain dashboards.',
          'Created automated purse deduction calculators that calculate live salary cap changes.'
        ]
      }
    ],
    role: 'Full Stack Developer',
    year: '2026',
    status: 'Live',
    links: {
      demo: 'https://hbl-auction.onrender.com',
      github: 'https://github.com/Shivam774705/HBL-Auction.git'
    },
    chips: ['React', 'Socket.IO', 'MongoDB', 'Zustand', 'Framer Motion', 'Tailwind CSS']
  },
  {
    num: '03',
    title: 'SISTec Alumni Portal (Skill Sync)',
    tagline: 'Official Institute Career & Mentorship Networking Portal',
    desc: 'Official career and mentorship platform deployed on institute subdomain, connecting 500+ active student users with alumni.',
    highlights: [
      {
        label: 'Key Contributions',
        points: [
          'Developed the core interactive components for alumni profile feeds, job boards, and appointment bookings.',
          'Tested, debugged, and documented 25+ REST API endpoints using Postman to assure secure user operations.',
          'Optimized database queries and frontend layouts, improving active mobile-user performance by 40%.',
          'Secured university subdomain routing and staging deployments adhering to institutional compliance.'
        ]
      }
    ],
    role: 'Frontend Lead',
    year: '2024 — Present',
    status: 'Live',
    links: {
      demo: 'https://alumni.sistec.ac.in',
      github: 'https://github.com/gitNinjaAtC/Skill-Sync.git'
    },
    chips: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'REST APIs', 'Postman']
  },
  {
    num: '04',
    title: 'AI Interview Preparation Platform',
    tagline: 'Generative AI Technical & HR Interview Simulator',
    desc: 'Technical mock interview simulator automating role-specific technical and HR rounds, generating scorecard reports.',
    highlights: [
      {
        label: 'Key Contributions',
        points: [
          'Connected Gemini AI SDK to generate context-specific interview tracks and assess technical response quality.',
          'Built high-performance serverless server handlers using Next.js 14 App Router and Neon DB (PostgreSQL).',
          'Configured secure user session validations, signup middleware, and data queries using Clerk and Prisma.',
          'Designed analytics interface plotting score metrics, behavioral sentiment, and technical skill improvements.'
        ]
      }
    ],
    role: 'Full Stack Developer',
    year: '2026',
    status: 'Dev',
    links: {
      github: 'https://github.com/Shivam774705/AI_Interview.git'
    },
    chips: ['Next.js 14', 'Gemini AI', 'Clerk', 'Neon DB', 'Tailwind CSS']
  },
  {
    num: '05',
    title: 'Client & Freelance Showcases',
    tagline: 'Premium Business Portfolios & Custom Animated Client Sites',
    desc: 'Custom-designed portfolios and landing pages for corporate clients and consultants, focusing on pixel-perfection and performance.',
    highlights: [
      {
        label: 'Key Contributions',
        points: [
          'Developed responsive, customizable React showcase portals reaching Google Lighthouse performance scores of 95+.',
          'Constructed custom-trigger scrolling visual sequences and transitions using Framer Motion.',
          'Built responsive contact inquiry logic and integrated Radix UI accessible UI building blocks.',
          'Collaborated with clients to translate wireframes into optimized production bundles.'
        ]
      }
    ],
    role: 'Freelance Developer',
    year: '2026',
    status: 'Live',
    links: {
      demo: 'https://vishnu-kesharwani.onrender.com',
      github: 'https://github.com/Shivam774705/client_portfolio.git'
    },
    chips: ['React 19', 'Framer Motion', 'Tailwind CSS', 'Radix UI', 'Vite']
  },
  {
    num: '06',
    title: 'Explore More',
    tagline: 'Beyond the spotlight — Explore full-stack applications, AI experiments, developer tools, hackathon projects, and technical explorations available on GitHub.',
    isExploreCard: true,
    links: {
      github: 'https://github.com/Shivam774705'
    }
  }
];

const Projects = () => {
  useEffect(() => {
    const cards = gsap.utils.toArray('.project-item');

    // Initial state — first card visible, rest hidden below
    gsap.set(cards, { yPercent: 0, opacity: 1, scale: 1 });
    gsap.set(cards.slice(1), { yPercent: 120, opacity: 0 });

    // Pinned deck timeline — works on all screen sizes
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#project',
        pin: true,
        pinSpacing: true,
        start: 'top top',
        end: () => '+=' + (window.innerHeight * (cards.length - 1) * 0.8),
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    cards.forEach((card, i) => {
      if (i === 0) return;

      // Slide this card up into view
      tl.to(card, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: 'power1.inOut'
      });

      // Scale down & dim the previous card to add depth
      tl.to(cards[i - 1], {
        scale: 0.94,
        opacity: 0.4,
        duration: 1,
        ease: 'power1.inOut'
      }, '<');
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section id="project" className="section pad">
      <div className="maxw">
        <div className="sec-label">// 03 — Selected Work</div>
        <div className="projects-intro">
          <h2 className="sec-big">
            FEATURED &nbsp;
            <span className="orange">PROJECTS</span>
          </h2>
          <p
            style={{ fontSize: '0.85rem', color: 'var(--dim)', maxWidth: '300px', fontWeight: 300, lineHeight: 1.7 }}
          >
            Full-stack projects built with robust APIs, clean UI, and performance-first architecture.
          </p>
        </div>

        <div className="projects-container">
          {PROJECTS_DATA.map((p, index) => (
            <div
              key={p.num || index}
              className="project-item"
              style={{ zIndex: index + 1 }}
            >
              <div className="project-card">
                <div className="p-num">{p.num}</div>

                <div className="p-main">
                  <div className="p-title">{p.title}</div>
                  <p className="p-tagline">{p.tagline}</p>
                  {p.desc && <p className="p-desc" style={{ fontSize: '0.85rem', color: 'var(--dim)', marginTop: '0.5rem', lineHeight: 1.6 }}>{p.desc}</p>}

                  {p.highlights && p.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="p-highlights">
                      <div className="p-h-label">{h.label}</div>
                      <ul className="p-points">
                        {h.points.map((pt, ptIdx) => (
                          <li key={ptIdx}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="p-meta">
                  {!p.isExploreCard ? (
                    <>
                      <div className="p-info-row">
                        <div className="p-info-item">
                          <div className="p-info-label">Role</div>
                          <div className="p-info-val">{p.role}</div>
                        </div>
                        <div className="p-info-item">
                          <div className="p-info-label">Year</div>
                          <div className="p-info-val">{p.year}</div>
                        </div>
                        <div className="p-info-item">
                          <div className="p-info-label">Status</div>
                          <div className="p-info-val">{p.status}</div>
                        </div>
                      </div>

                      <div className="p-links">
                        {p.links.demo && (
                          <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="p-link">
                            Live Demo ↗
                          </a>
                        )}
                        {p.links.github && (
                          <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="p-link">
                            GitHub ↗
                          </a>
                        )}
                      </div>

                      {p.chips && (
                        <div className="p-chip-col">
                          {p.chips.map((chip, cIdx) => (
                            <span key={cIdx} className="chip">{chip}</span>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="p-links" style={{ height: '100%', alignItems: 'center', margin: 0 }}>
                      <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="p-link" style={{ fontSize: '0.9rem' }}>
                        View GitHub Profile ↗
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
