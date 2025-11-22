import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  event.target.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  event.target.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <header className="header" style={{ background: theme.body }}>
          <NavLink to={link} tag={Link} className="logo">
            <span style={{ color: theme.text }}>&lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}>/&gt;</span>
          </NavLink>

          {/* MOBILE MENU BUTTON */}
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>

          {/* MENU LINKS */}
          <ul className="menu" style={{ background: theme.body }}>
            <li>
              <NavLink
                to="/home"
                style={{ color: theme.text }}
                activeStyle={{ fontWeight: "bold" }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={onMouseOut}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/education"
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={onMouseOut}
              >
                Education
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/experience"
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={onMouseOut}
              >
                Experience
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={onMouseOut}
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={onMouseOut}
              >
                Contact Me
              </NavLink>
            </li>
            {/*
              <li>
                <NavLink
                  to="/opensource"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Open Source
                </NavLink>
              </li> */}
          </ul>
        </header>
      </Fade>
    );
  }
}

export default Header;
