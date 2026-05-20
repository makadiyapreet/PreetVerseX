import React from "react";
import "./CompetitiveSites.css";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="competitive-sites-main-div">
        <ul className="dev-icons">
          {this.props.logos.map((logo) => {
            return (
              <li
                key={logo.siteName}
                className="competitive-sites-inline"
                name={logo.siteName}
                title={logo.siteName}
              >
                <a
                  href={logo.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {logo.iconifyClassname && (
                    <span
                      className="iconify"
                      data-icon={logo.iconifyClassname}
                      style={logo.style}
                      data-inline="false"
                    ></span>
                  )}
                  {!logo.iconifyClassname && logo.imageSrc && (
                    <img
                      className="skill-image"
                      style={logo.style}
                      src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                      alt={logo.siteName}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CompetitiveSites;
