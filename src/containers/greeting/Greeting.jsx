import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import developerImg from "../../assets/images/developerActivity.svg";
import "./Greeting.css";

const roles = [
  "Aspiring Cybersecurity Professional",
  2200,
  "Digital Forensics Explorer",
  2000,
  "Full Stack Security Developer",
  2000,
  "AI & Data Science Engineer",
  2000,
  "Ethical Hacking Enthusiast",
  1800,
];

export default function Greeting() {
  return (
    <section className="greeting-section" id="main-content">
      {/* Particle/grid background */}
      <div className="greeting-bg-grid" aria-hidden="true" />

      <div className="greeting-content">
        {/* Text side */}
        <motion.div
          className="greeting-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="greeting-tag">Hello, World! {'\u{1F44B}'}</span>

          <h1 className="greeting-name">
            Preet <span className="accent-name">Makadiya</span>
          </h1>

          <div className="greeting-role-line">
            <span className="role-prefix">I am a </span>
            <TypeAnimation
              sequence={roles}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="role-typed"
            />
          </div>

          <p className="greeting-bio">
            A passionate individual who thrives building end-to-end products — sustainable, scalable systems that create real-world impact. Based in <strong>Rajkot, Gujarat</strong>.
          </p>

          <div className="greeting-actions">
            <a
              href="https://github.com/makadiyapreet"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-cursor
            >
              {'\u2605'} Star Me On GitHub
            </a>
            <a href="/contact" className="btn-outline" data-cursor>
              Let's Connect {'\u2192'}
            </a>
          </div>

          <SocialMedia />
        </motion.div>

        {/* Illustration side */}
        <motion.div
          className="greeting-illustration"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Keep existing SVG illustration */}
          <img
            src={developerImg}
            alt="Developer illustration"
            className="hero-svg"
            loading="eager"
          />

          {/* Floating stat badges */}
          <div className="stat-badge badge-1">
            <span className="stat-num">9+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-badge badge-2">
            <span className="stat-num">12+</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="stat-badge badge-3">
            <span className="stat-num">2</span>
            <span className="stat-label">Internships</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
