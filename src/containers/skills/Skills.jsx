import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import SkillBars from "../../components/skillBars/SkillBars";
import { skillBars } from "../../portfolio";
import { Fade } from 'react-awesome-reveal';

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade direction="up" duration={2000}>
          <h1 className="skills-header" style={{ color: theme.text }}>
            What I Do?
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />

      {/* Animated Proficiency Bars */}
      <div className="skills-header-div" style={{ marginTop: '40px' }}>
        <Fade direction="up" duration={2000}>
          <h2 className="skills-header" style={{ color: theme.text, fontSize: '2rem' }}>
            Proficiency
          </h2>
        </Fade>
      </div>
      <SkillBars categories={skillBars.categories} />
    </div>
  );
}
