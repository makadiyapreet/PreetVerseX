import React from 'react'
import { Link } from 'react-router-dom'
import SeoHeader from '../../components/seoHeader/SeoHeader'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import TopButton from '../../components/topButton/TopButton'
import Testimonials from '../../components/testimonials/Testimonials'
import Blogs from '../../containers/blogs/Blogs'
import SocialMedia from '../../components/socialMedia/SocialMedia'
import { Fade } from 'react-awesome-reveal'
import { contactPageData, availability } from '../../portfolio.js'
import { getImage } from '../../assets/imageMap'
import './ContactComponent.css'

const ContactData = contactPageData.contactSection

function AvailabilityBadge() {
  return (
    <div className={'avail-badge' + (availability.isAvailable ? ' available' : ' unavailable')}>
      <span className="avail-dot" />
      <span className="avail-text">{availability.status}</span>
    </div>
  )
}

export default function Contact({ theme }) {
  return (
    <div className="contact-main">
      <SeoHeader title="Contact" path="/contact" />
      <Header />

      <div className="contact-page-content">
        {/* Hero */}
        <Fade direction="up" duration={1000}>
          <div className="contact-hero">
            <img
              src={getImage(ContactData.profile_image_path)}
              alt="Preet Makadiya"
              className="contact-profile-img"
              loading="lazy"
            />
            <h1 className="contact-hero-title">{ContactData.title}</h1>
            <p className="contact-hero-sub">{ContactData.description}</p>
            <AvailabilityBadge />
          </div>
        </Fade>

        {/* Testimonials */}
        <Fade direction="up" duration={1000}>
          <Testimonials />
        </Fade>

        {/* Contact Cards Section */}
        <Fade direction="up" duration={1000}>
          <section className="contact-cards-section">
            <h2 className="contact-section-title">Get In Touch</h2>
            <p className="contact-section-sub">
              I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact-cards-grid">
              {/* Email Card */}
              <a href="mailto:makadiyapreeta1@gmail.com" className="contact-card" data-cursor>
                <div className="contact-card-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3 className="contact-card-title">Email Me</h3>
                <p className="contact-card-value">makadiyapreeta1@gmail.com</p>
                <span className="contact-card-cta">Send an email →</span>
              </a>

              {/* Phone Card */}
              <a href="tel:+918160238745" className="contact-card" data-cursor>
                <div className="contact-card-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <h3 className="contact-card-title">Call Me</h3>
                <p className="contact-card-value">+91 81602 38745</p>
                <span className="contact-card-cta">Make a call →</span>
              </a>

              {/* Location Card */}
              <div className="contact-card no-hover">
                <div className="contact-card-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="contact-card-title">Location</h3>
                <p className="contact-card-value">Rajkot, Gujarat, India</p>
                <span className="contact-card-cta subtle">Based in India</span>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/preet-makadiya-13102004-p/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card linkedin-card"
                data-cursor
              >
                <div className="contact-card-icon">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <h3 className="contact-card-title">LinkedIn</h3>
                <p className="contact-card-value">Let's connect professionally</p>
                <span className="contact-card-cta">View profile →</span>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/makadiyapreet"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card github-card"
                data-cursor
              >
                <div className="contact-card-icon">
                  <i className="fab fa-github"></i>
                </div>
                <h3 className="contact-card-title">GitHub</h3>
                <p className="contact-card-value">Check out my code</p>
                <span className="contact-card-cta">View repos →</span>
              </a>

              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/preet_1310_/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card instagram-card"
                data-cursor
              >
                <div className="contact-card-icon">
                  <i className="fab fa-instagram"></i>
                </div>
                <h3 className="contact-card-title">Instagram</h3>
                <p className="contact-card-value">Follow my journey</p>
                <span className="contact-card-cta">Follow →</span>
              </a>
            </div>
          </section>
        </Fade>

        {/* Social Row */}
        <Fade direction="up" duration={1000}>
          <div className="contact-social-section">
            <h3 className="contact-social-title">All Socials</h3>
            <SocialMedia />
          </div>
        </Fade>

        {/* Blog Section */}
        <Fade direction="up" duration={1000}>
          <Blogs />
        </Fade>

        {/* Resume Button */}
        <div className="contact-resume-section">
          <Link to="/resume" className="btn-primary" data-cursor>
            See My Resume
          </Link>
        </div>

      </div>

      <Footer />
      <TopButton />
    </div>
  )
}
