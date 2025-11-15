import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import ProgrammingImg from "./ProgrammingImg";
import CyberSecurityImg from "./CyberSecurityImg";
import GraphicDesignImg from "./DesignImg";

function GetSkillSvg(props) {
  // If PNG path exists, return PNG
  if (props.imagePath) {
    return (
      <img
        src={require(`../../assets/images/${props.imagePath}`)}
        alt="Skill Illustration"
        style={{ width: "100%", height: "auto", alignContent: "center"}}
      />
    );
  }

  // Otherwise fall back to SVG components
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "ProgrammingImg")
    return <ProgrammingImg theme={props.theme} />;
  else if (props.fileName === "CyberSecurityImg")
    return <CyberSecurityImg theme={props.theme} />;
  
  return <GraphicDesignImg theme={props.theme} />;
}


class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Preet is Analysing Data"
                    src={require(`../../assets/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg
                    fileName={skill.fileName}
                    imagePath={skill.imagePath}
                    theme={theme}
                  />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
