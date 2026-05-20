import React from 'react'
import SeoHeader from '../../components/seoHeader/SeoHeader'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import TopButton from '../../components/topButton/TopButton'
import './Resume.css'

const resumeData = {
  name: 'Preet Makadiya',
  subtitle: 'Roll No.: 23BCP414 • Bachelor of Technology',
  university: 'Pandit Deendayal Energy University, Gandhinagar',
  contact: {
    phone: '+91-8160238745',
    email: 'makadiyapreeta1@gmail.com',
    github: 'github.com/makadiyapreet',
    linkedin: 'linkedin.com/in/preet-makadiya',
  },
  education: [
    {
      degree: 'B.Tech Computer Science Engineering',
      school: 'Pandit Deendayal Energy University, Gandhinagar',
      duration: '2023 – 2027',
      details: 'CGPA: 8.63',
    },
  ],
  experience: [
    {
      title: 'Cyber Forensics Intern',
      company: 'Forensic Knight',
      duration: 'June 2024 – Jan 2025',
      location: 'Online',
      points: [
        'Performed digital evidence collection and log analysis for multiple cybersecurity case investigations.',
        'Investigated malware artifacts and suspicious network traffic to support incident analysis.',
      ],
    },
    {
      title: 'Graphic Designer',
      company: 'Adorebits Technology',
      duration: 'May 2025 – Nov 2025',
      location: 'Online',
      points: [
        'Designed UI/UX assets and digital creatives using Photoshop, Canva, and Figma for branding campaigns.',
        'Created 20+ branding assets and marketing visuals for client campaigns.',
      ],
    },
  ],
  projects: [
    {
      name: 'AETRIX — Satellite Environmental Intelligence Platform',
      tech: 'React.js, Spring Boot, FastAPI, PostgreSQL, scikit-learn, Groq API',
      points: [
        'Integrated multi-satellite data (MODIS, Landsat, Sentinel-2) to detect Urban Heat Islands, vegetation stress, and pollution hotspots in 4 Indian cities.',
        'Built ML pipelines for UHI classification, NDVI monitoring, and 30-day LST forecasting via FastAPI.',
      ],
    },
    {
      name: 'Swagat Caterers — Enterprise Catering Management Platform',
      tech: 'Django, Express.js, PostgreSQL, HTML, CSS, JavaScript, Bootstrap',
      points: [
        'Engineered a full-stack catering management platform for bookings, billing, analytics, and staff management.',
        'Integrated JWT-based role access for admin, manager, and customer modules.',
      ],
    },
    {
      name: 'Gate Master — Full-Stack GATE CS Preparation Platform',
      tech: 'Django, React.js, SQLite, JWT, Chart.js',
      points: [
        'Developed a full-stack exam preparation platform with mock tests, leaderboards, and study material access.',
        'Built analytics dashboards for subject-wise accuracy, progress trends, and student insights.',
      ],
    },
  ],
  skills: {
    'Languages': 'Python (Advanced), Java, C/C++, JavaScript, SQL',
    'Frameworks': 'React.js, Node.js, Express.js, Django, Flask, FastAPI, Bootstrap',
    'Databases': 'MySQL, PostgreSQL, SQLite, MongoDB',
    'Developer Tools': 'Git, VS Code, MySQL Workbench, Postman, Linux Terminal',
    'Cybersecurity': 'Wireshark, Nmap, Burp Suite, Kali Linux',
    'Coursework': 'Computer Networks, OS, DSA, DBMS, Cloud Computing, Cybersecurity, AI',
  },
  certifications: [
    { name: 'DCSC — Drop Certified Security Course', org: 'Web application penetration testing', year: '2025' },
    { name: 'Oracle Cloud Infrastructure 2025', org: 'AI Foundations Associate', year: '2025' },
    { name: 'GATE Qualified', org: 'Graduate Aptitude Test (CS)', year: '2026' },
    { name: 'Hackathon Winner — AETRIX', org: 'National-level hackathon', year: '2026' },
    { name: 'HackingFlix — Certified Cyber Warrior', org: 'Cert ID: 85338496302599', year: '2025' },
    { name: 'Linux Foundation — Cybersecurity Essentials', org: 'LFC108', year: '2025' },
  ],
  positions: [
    {
      title: 'Vice President',
      org: 'Society of Mathematics (SOM), PDEU',
      duration: '2025 – Present',
      desc: 'Led planning and execution of academic events, workshops, and competitions reaching 200+ students.',
    },
  ],
}

export default function Resume({ theme }) {
  return (
    <div className="resume-page-wrapper">
      <SeoHeader title="Resume" path="/resume" />
      <Header />

      <div className="resume-page">
        <div className="resume-actions">
          <h1 className="resume-page-title">Resume</h1>
          <div className="resume-btns">
            <button className="btn-outline" onClick={() => window.print()} data-cursor>
              {'\u{1F5A8}'} Print / Save PDF
            </button>
            <a href="/Preet_Makadiya_Resume.pdf" download className="btn-primary" data-cursor>
              {'\u2193'} Download PDF
            </a>
          </div>
        </div>

        <div className="resume-doc" id="resume-print-area">
          {/* Header */}
          <div className="res-header">
            <div className="res-name-block">
              <h2 className="res-name">{resumeData.name}</h2>
              <p className="res-subtitle">{resumeData.subtitle}</p>
              <p className="res-university">{resumeData.university}</p>
            </div>
            <div className="res-contact-block">
              <span>{resumeData.contact.phone}</span>
              <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a>
              <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer">{resumeData.contact.github}</a>
              <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer">{resumeData.contact.linkedin}</a>
            </div>
          </div>

          {/* Education */}
          <div className="res-section">
            <h3 className="res-section-title">Education</h3>
            {resumeData.education.map((edu, i) => (
              <div key={i} className="res-edu-item">
                <div className="res-row">
                  <strong>{edu.degree}</strong>
                  <span className="res-date">{edu.duration}</span>
                </div>
                <p className="res-sub">{edu.school} • {edu.details}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="res-section">
            <h3 className="res-section-title">Experience</h3>
            {resumeData.experience.map((exp, i) => (
              <div key={i} className="res-exp-item">
                <div className="res-row">
                  <strong>{exp.title}</strong>
                  <span className="res-date">{exp.duration}</span>
                </div>
                <p className="res-company">{exp.company} • {exp.location}</p>
                <ul className="res-points">
                  {exp.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="res-section">
            <h3 className="res-section-title">Technical Projects</h3>
            {resumeData.projects.map((proj, i) => (
              <div key={i} className="res-proj-item">
                <div className="res-row">
                  <strong>{proj.name}</strong>
                </div>
                <p className="res-tech">{proj.tech}</p>
                <ul className="res-points">
                  {proj.points.map((pt, j) => <li key={j}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="res-section">
            <h3 className="res-section-title">Technical Skills</h3>
            <div className="res-skills-grid">
              {Object.entries(resumeData.skills).map(([cat, val]) => (
                <div key={cat} className="res-skill-row">
                  <span className="res-skill-cat">{cat}:</span>
                  <span className="res-skill-val">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="res-section">
            <h3 className="res-section-title">Certifications & Achievements</h3>
            <div className="res-certs-grid">
              {resumeData.certifications.map((cert, i) => (
                <div key={i} className="res-cert-item">
                  <div className="res-row">
                    <strong>{cert.name}</strong>
                    <span className="res-date">{cert.year}</span>
                  </div>
                  <p className="res-sub">{cert.org}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Positions */}
          <div className="res-section">
            <h3 className="res-section-title">Positions of Responsibility</h3>
            {resumeData.positions.map((pos, i) => (
              <div key={i} className="res-exp-item">
                <div className="res-row">
                  <strong>{pos.title} — {pos.org}</strong>
                  <span className="res-date">{pos.duration}</span>
                </div>
                <p className="res-sub">{pos.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer theme={theme} />
      <TopButton />
    </div>
  )
}
