import React from "react";
import "./Project.css";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio.js";

export default function Projects() {
  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Projects</h1>
      <p className="project-subtitle">
        Check out my GitHub for more projects and contributions.
      </p>
      <Button
        text={"View GitHub Profile"}
        className="project-button"
        href={greeting.githubProfile}
        newTab={true}
      />
    </div>
  );
}
