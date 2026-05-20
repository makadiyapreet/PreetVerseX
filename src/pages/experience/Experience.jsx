import React from 'react'
import SeoHeader from '../../components/seoHeader/SeoHeader'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import TopButton from '../../components/topButton/TopButton'
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion'
import ExperienceImg from './ExperienceImg'
import { experience } from '../../portfolio.js'
import { Fade } from 'react-awesome-reveal'
import './Experience.css'

export default function Experience({ theme }) {
  return (
    <div className="experience-main">
      <SeoHeader title="Experience" path="/experience" />
      <Header />
      <div className="basic-experience">
        <Fade direction="up" duration={2000}>
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
              <h1 className="experience-heading-text">
                {experience.title}
              </h1>
              <h3 className="experience-heading-sub-text">
                {experience.subtitle}
              </h3>
              <p className="experience-header-detail-text subTitle">
                {experience.description}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceAccordion sections={experience.sections} />
      <Footer theme={theme} />
      <TopButton />
    </div>
  )
}
