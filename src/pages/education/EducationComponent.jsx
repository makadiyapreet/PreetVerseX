import React from 'react'
import SeoHeader from '../../components/seoHeader/SeoHeader'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import TopButton from '../../components/topButton/TopButton'
import Timeline from '../../components/timeline/Timeline'
import CompetitiveSites from '../../components/competitiveSites/CompetitiveSites'
import EducationImg from './EducationImg'
import { degrees, certifications, competitiveSites, timeline } from '../../portfolio'
import { getImage } from '../../assets/imageMap'
import './EducationComponent.css'

function SchoolCard({ degree, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      className={`school-card ${isLeft ? 'left' : 'right'}`}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="school-dot">
        <img
          src={getImage(degree.logo_path)}
          alt={degree.alt_name}
          className="school-logo"
          loading="lazy"
        />
      </div>
      <div className="school-body">
        <div className="school-header-row">
          <h3 className="school-name">{degree.title}</h3>
          <span className="school-duration">{degree.duration}</span>
        </div>
        <p className="school-subtitle">{degree.subtitle}</p>
        <ul className="school-points">
          {degree.descriptions.map((desc, i) => (
            <li key={i}>{desc.replace('⚡ ', '')}</li>
          ))}
        </ul>
        {degree.website_link && (
          <a
            href={degree.website_link}
            target="_blank"
            rel="noopener noreferrer"
            className="school-link"
            data-cursor
          >
            Visit Website →
          </a>
        )}
      </div>
    </motion.div>
  )
}

function CertCard({ cert, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.a
      ref={ref}
      href={cert.certificate_link}
      target="_blank"
      rel="noopener noreferrer"
      className="cert-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      data-cursor
    >
      <div className="cert-logo-wrap" style={{ backgroundColor: cert.color_code || '#f5f5f5' }}>
        <img src={getImage(cert.logo_path)} alt={cert.alt_name} className="cert-logo" loading="lazy" />
      </div>
      <h4 className="cert-name">{cert.title}</h4>
      <p className="cert-issuer">{cert.subtitle}</p>
    </motion.a>
  )
}

export default function Education({ theme }) {
  return (
    <div className="education-main">
      <SeoHeader title="Education" path="/education" />
      <Header />

      {/* Hero Section */}
      <section className="edu-hero">
        <div className="edu-hero-content">
          <div className="edu-hero-text">
            <h1 className="edu-title">Education</h1>
            <h3 className="edu-subtitle">Academic Background & Certifications</h3>
            <CompetitiveSites logos={competitiveSites.competitiveSites} />
          </div>
          <div className="edu-hero-img">
            <EducationImg theme={theme} />
          </div>
        </div>
      </section>

      {/* Academic Timeline */}
      <section className="edu-section">
        <h2 className="section-heading">Academic Background</h2>
        <div className="school-timeline">
          <div className="timeline-line" />
          {degrees.degrees.map((degree, i) => (
            <SchoolCard key={degree.title} degree={degree} index={i} />
          ))}
        </div>
      </section>

      {/* Certifications Grid */}
      {certifications.certifications.length > 0 && (
        <section className="edu-section">
          <h2 className="section-heading">Certifications & Achievements</h2>
          <div className="cert-grid">
            {certifications.certifications.map((cert, i) => (
              <CertCard key={cert.title} cert={cert} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Journey Timeline */}
      <section className="edu-section">
        <h2 className="section-heading">My Journey</h2>
        <Timeline events={timeline} />
      </section>

      <Footer theme={theme} />
      <TopButton />
    </div>
  )
}
