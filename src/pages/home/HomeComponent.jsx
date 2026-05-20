import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import StatsCounter from "../../components/statsCounter/StatsCounter";
import AchievementSection from "../../containers/achievement/AchievementSection";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SeoHeader from "../../components/seoHeader/SeoHeader";

class Home extends Component {
  render() {
    return (
      <div>
        <SeoHeader path="/" />
        <Header />
        <Greeting />
        <StatsCounter />
        <Skills theme={this.props.theme} />
        <AchievementSection />
        <Footer />
        <TopButton />
      </div>
    );
  }
}

export default Home;
