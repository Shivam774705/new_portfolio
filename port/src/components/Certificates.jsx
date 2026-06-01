import React, { useState } from 'react';

// Import all 12 certificate assets
import androidWorkshop from '../assets/Android Workshop.png';
import internalSIH from '../assets/INTERNAL SIH HACKATHON 2024.png';
import internshipCert from '../assets/Internship.png';
import cyberSecurity from '../assets/Introduction-to-Cybersecurity.pdf';
import iotWorkshop from '../assets/IoT worrkshop.png';
import pythonEssentials1 from '../assets/Python-Essentials-1.pdf';
import pythonEssentials2 from '../assets/Python-Essentials-2.pdf';
import rmsAppreciation from '../assets/RMS_Project_Appreciation.png';
import alumniAppreciation from '../assets/SISTec_Alumni_project_appreciation.png';
import samadhanCert from '../assets/Samadhan.png';
import techWinterBreak from '../assets/TECH WINTER BREAK CERTIFICATE.png';
import djangoCert from '../assets/django.pdf';

const Certificates = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const certificatesData = [
    {
      id: 'internship',
      title: 'IT / Jr. Software Developer Internship',
      issuer: 'Shroti Telecom Pvt. Ltd.',
      date: 'Aug 2025 — Jan 2026',
      desc: 'Completed a 5-month internship focusing on IT operations, real-time site monitoring screens, and Django-based REST API development.',
      tag: 'Professional Experience',
      asset: internshipCert
    },
    {
      id: 'alumni_appreciation',
      title: 'Alumni Portal Development Appreciation',
      issuer: 'Sagar Institute of Science & Technology (SISTec)',
      date: 'Dec 2025',
      desc: 'Awarded for outstanding dedication and exceptional technical contributions during the development and launch of the SISTec Alumni Portal.',
      tag: 'Project Appreciation',
      asset: alumniAppreciation
    },
    {
      id: 'rms_appreciation',
      title: 'RMS Presentation Appreciation',
      issuer: 'Shroti Telecom Pvt. Ltd.',
      date: 'Dec 2025',
      desc: 'Received appreciation for successful delivery, active participation, and dedication during the RMS project presentation.',
      tag: 'Project Appreciation',
      asset: rmsAppreciation
    },
    {
      id: 'sih_internal',
      title: 'Internal Hackathon for SIH 2024',
      issuer: 'MoE\'s Innovation Cell / SISTec',
      date: 'Sep 2024',
      desc: 'Participated in the Institutional level Hackathon for Smart India Hackathon 2024 as part of team "Tech PARSSV".',
      tag: 'Hackathon',
      asset: internalSIH
    },
    {
      id: 'samadhan_hackathon',
      title: 'Samadhan 1.0 AI Innovation Hackathon',
      issuer: 'SISTec · Marktine · Calm Chase',
      date: 'Nov 2024',
      desc: 'Participated in a 2-day National Level AI Innovation Hackathon focusing on coding, creating, and AI-enabled prototyping.',
      tag: 'Hackathon',
      asset: samadhanCert
    },
    {
      id: 'django',
      title: 'Django Essentials: Build and Deploy Real-World Apps',
      issuer: 'Udemy',
      date: 'Apr 2025',
      desc: 'Learned full-stack web applications, database integration, Django REST framework, and cloud deployment techniques.',
      tag: 'Global Certification',
      asset: djangoCert
    },
    {
      id: 'python_essentials_1',
      title: 'Python Essentials 1',
      issuer: 'Cisco Networking Academy',
      date: 'Apr 2025',
      desc: 'Completed fundamental programming modules, data types, basic logic flow, operations, and algorithmic structure.',
      tag: 'Global Certification',
      asset: pythonEssentials1
    },
    {
      id: 'python_essentials_2',
      title: 'Python Essentials 2',
      issuer: 'Cisco Networking Academy',
      date: 'Apr 2025',
      desc: 'Covered object-oriented programming (OOP), packages, modules, exception structures, and advanced library modules.',
      tag: 'Global Certification',
      asset: pythonEssentials2
    },
    {
      id: 'cybersecurity',
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'May 2025',
      desc: 'Explored security postures, threat vectors, data privacy fundamentals, and defensive network configuration principles.',
      tag: 'Global Certification',
      asset: cyberSecurity
    },
    {
      id: 'android_workshop',
      title: 'Android Mobile App Development Workshop',
      issuer: 'SISTec GN',
      date: 'Mar 2024',
      desc: 'A 3-days hands-on training focused on layout design, event handling, activity lifecycles, and Android Studio implementation.',
      tag: 'Technical Workshop',
      asset: androidWorkshop
    },
    {
      id: 'iot_workshop',
      title: 'IoT Essentials: Connecting the Dots',
      issuer: 'SISTec GN',
      date: 'Sep 2024',
      desc: 'Completed workshop on sensor reading, Arduino/Microcontroller programming, board layout, and wireless connectivity.',
      tag: 'Technical Workshop',
      asset: iotWorkshop
    },
    {
      id: 'tech_winter_break',
      title: 'GDG Tech Winter Break Campaign',
      issuer: 'GDG On-Campus SISTec',
      date: 'Dec 2024',
      desc: 'Participated in multiple structured learning paths on web development, Android app integration, and coding workshops.',
      tag: 'Technical Campaign',
      asset: techWinterBreak
    }
  ];

  return (
    <section id="certificates" className="section pad">
      <div className="maxw">
        <div className="sec-label">// 05 — Credentials</div>
        <div className="projects-intro" style={{ marginBottom: '2.5rem' }}>
          <h2 className="sec-big">
            CERTIFICATIONS &nbsp;
            <span className="orange">& WORKSHOPS</span>
          </h2>
          <p
            style={{ fontSize: '0.85rem', color: 'var(--dim)', maxWidth: '300px', fontWeight: 300, lineHeight: 1.7 }}
          >
            Verified credentials, internship awards, hackathon recognition, and technical trainings.
          </p>
        </div>

        <p className="about-narrative-p" style={{ fontSize: '0.85rem', color: 'var(--dimmer)', marginBottom: '2rem' }}>
          Hover (or tap on mobile) to flip the cards and reveal details.
        </p>

        <div className="certs-grid">
          {certificatesData.map((c) => (
            <div 
              key={c.id} 
              className={`flip-card ${flippedCards[c.id] ? 'flipped' : ''}`}
              onClick={() => toggleFlip(c.id)}
            >
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <div>
                    <div className="cert-front-tag">{c.tag}</div>
                    <div className="cert-front-title">{c.title}</div>
                  </div>
                  <div>
                    <div className="cert-front-issuer">{c.issuer}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--dimmer)', marginTop: '0.2rem', fontFamily: 'JetBrains Mono, monospace' }}>{c.date}</div>
                  </div>
                  <div className="cert-front-footer">
                    <span>📜 Certificate</span>
                    <span>Flip ✦</span>
                  </div>
                </div>
                {/* Back Side */}
                <div className="flip-card-back">
                  <div>
                    <div className="cert-back-title">{c.title}</div>
                    <div className="cert-back-desc">{c.desc}</div>
                  </div>
                  <div className="cert-back-footer" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div style={{ fontSize: '0.62rem', color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'JetBrains Mono, monospace' }}>
                      {c.issuer} · {c.date}
                    </div>
                    <a 
                      href={c.asset} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cert-view-btn"
                      onClick={(e) => e.stopPropagation()} // Prevent card flip on click
                    >
                      View Document ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
