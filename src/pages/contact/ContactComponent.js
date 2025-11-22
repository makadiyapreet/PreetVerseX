import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="contact-main">
        <Header theme={theme} />

        <div className="basic-contact">
          {/* ---------------- HERO SECTION ---------------- */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt="Profile"
                />
              </div>

              <div className="contact-heading-text-div">
                <h1 className="contact-heading-text" style={{ color: theme.text }}>
                  {ContactData["title"]}
                </h1>

                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>

                {/* TESTIMONIAL CARD */}
                <div className="testimonial-end-card"> 
                <div className="testimonial-quote">
                "Preet has demonstrated exceptional professionalism, strong analytical ability,
                and a consistent commitment to excellence. His reliability, technical
                competence, and proactive approach made him a standout contributor throughout
                the internship."
              </div>
              
              <div className="testimonial-author">
                — Smit Shah, Founder, Forensic Knight
              </div>
              </div>

                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                  
                </div>
              </div>
            </div>
          </Fade>

          {/* ---------------- BLOG SECTION ---------------- */}
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h1 className="blog-heading-text" style={{ color: theme.text }}>
                  {blogSection["title"]}
                </h1>

                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {blogSection["subtitle"]}
                </p>

                <div className="blogsite-btn-div">
                  <Button
                    text="Visit My Blogsite"
                    newTab={true}
                    href={blogSection.link}
                    theme={theme}
                  />
                </div>
              </div>

              <div className="blog-heading-img-div">
                <BlogsImg theme={theme} />
              </div>
            </div>
          </Fade>

          {/* ---------------- CONTACT + ADDRESS SECTION ---------------- */}
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">

              <div className="address-heading-img-div">
                <AddressImg theme={theme} />
              </div>

              {/* RIGHT SIDE CONNECT CARD */}
              <div className="contact-card" style={{ background: theme.contactCard }}>
                <h1 className="contact-title" style={{ color: theme.text }}>
                  Let’s Connect
                </h1>

                <p className="contact-subtitle" style={{ color: theme.secondaryText }}>
                  Have a question or want to collaborate?<br />
                  Feel free to reach out anytime.
                </p>

                {/* EMAIL */}
                <div className="connect-item">
                  <div className="icon-circle email-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div>
                    <div className="connect-label" style={{ color: theme.text }}>Email</div>
                    <a
                      href="mailto:makadiyapreeta1@gmail.com"
                      className="connect-value"
                      style={{ color: theme.link }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      makadiyapreeta1@gmail.com
                    </a>
                  </div>
                </div>

                {/* PHONE */}
                <div className="connect-item">
                  <div className="icon-circle phone-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div>
                    <div className="connect-label" style={{ color: theme.text }}>Phone</div>
                    <div className="connect-value" style={{ color: theme.secondaryText }}>
                      +91 81602 38745
                    </div>
                  </div>
                </div>

                {/* ADDRESS */}
                <div className="connect-item">
                  <div className="icon-circle address-icon">
                    <i className="fa fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <div className="connect-label" style={{ color: theme.text }}>Location</div>
                    <div className="connect-value" style={{ color: theme.secondaryText }}>
                      Rajkot, Gujarat, India
                    </div>
                  </div>
                </div>

                {/* LINKEDIN – Round Colored Icon */}
                <div className="connect-item">
                  <div className="icon-circle linkedin-bg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 72 72"
                      fill="#ffffff"
                    >
                      <path d="M16.48 29.5H6.28V64h10.2V29.5zM11.38 24.5c3.22 0 5.23-2.13 5.23-4.8-.06-2.72-2.01-4.8-5.17-4.8s-5.23 2.08-5.23 4.8c0 2.67 2.01 4.8 5.11 4.8h.06zm18.42 39.5h10.2V45.44c0-.99.07-1.97.37-2.68.81-1.97 2.65-4.02 5.74-4.02 4.05 0 5.67 3.03 5.67 7.47V64h10.2V45.03c0-10.14-5.41-14.86-12.62-14.86-5.9 0-8.49 3.28-9.93 5.53h.07V29.5h-10.2c.13 2.94 0 34.5 0 34.5z"/>
                    </svg>
                  </div>

                  <div>
                    <div className="connect-label" style={{ color: theme.text }}>LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/preet-makadiya-13102004-p/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="connect-value"
                      style={{ color: theme.link }}
                    >
                      linkedin.com/in/preet-makadiya
                    </a>
                  </div>
                </div>

                {/* GITHUB – Round Dark Icon */}
                <div className="connect-item">
                  <div className="icon-circle github-bg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 16 16"
                      fill="#ffffff"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38v-1.33c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.88-1.17-.88-1.17-.72-.49.06-.48.06-.48.79.06 1.21.82 1.21.82.71 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.62 7.62 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0016 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </div>

                  <div>
                    <div className="connect-label" style={{ color: theme.text }}>GitHub</div>
                    <a
                      href="https://github.com/makadiyapreet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="connect-value"
                      style={{ color: theme.link }}
                    >
                      github.com/makadiyapreet
                    </a>
                  </div>
                </div>


                {/* MAP BUTTON */}
                <a
                  href="https://maps.app.goo.gl/XYZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-btn"
                  style={{ background: theme.dark, color: theme.body }}
                >
                  Visit on Google Maps
                </a>
              </div>
            </div>
          </Fade>
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
