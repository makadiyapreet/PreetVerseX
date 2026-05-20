import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function SocialMedia() {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        return (
          <a
            key={i}
            href={media.link}
            className="icon-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span style={{ backgroundColor: media.backgroundColor }}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </span>
          </a>
        );
      })}
    </div>
  );
}
