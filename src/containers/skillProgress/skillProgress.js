import React from "react";
import { useTranslation } from "react-i18next";
import "./Progress.scss";
import {illustration, techStack, leadershipStack, codingPhilosophyStack, crossPlatformStack, appPublishingStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  const { t } = useTranslation();
  
  // Array of gradient class names for professional colors
  const gradientClasses = ['gradient-1', 'gradient-2', 'gradient-3', 'gradient-4', 'gradient-5', 'gradient-6', 'gradient-7', 'gradient-8'];
  
  // Function to get a random gradient class
  const getRandomGradient = () => {
    return gradientClasses[Math.floor(Math.random() * gradientClasses.length)];
  };

  const renderSkillCard = (skillData, title, icon) => (
    <div className="skills-card" key={title}>
      <div className="skills-card-header">
        <span className="skills-card-icon">{icon}</span>
        <h3 className="skills-card-title">{title}</h3>
      </div>
      {skillData.experience.map((exp, i) => {
        const progressStyle = {
          width: exp.progressPercentage
        };
        const gradientClass = getRandomGradient();
        return (
          <div key={i} className="skill">
            <p>{exp.Stack}</p>
            <div className="meter">
              <span style={progressStyle} className={gradientClass}></span>
            </div>
          </div>
        );
      })}
    </div>
  );

  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-main-container">
          <h1 className="skills-heading">{t('skillsExpertise.title')}</h1>
          <p className="skills-subtitle">{t('skillsExpertise.subtitle')}</p>
          
          {/* Grid container for all skill cards */}
          <div className="skills-grid">
            {/* Mobile Development card */}
            <div className="skills-grid-item">
              {renderSkillCard(techStack, t('skillsExpertise.iosDevelopment'), techStack.icon)}
            </div>

            {/* Animation/Image */}
            <div className="skills-grid-item skills-image">
              {illustration.animated ? (
                <DisplayLottie animationData={Build} />
              ) : (
                <img
                  alt="Man Working"
                  src={require("../../assets/images/skill.svg")}
                />
              )}
            </div>

            {/* Cross-Platform Development card */}
            <div className="skills-grid-item">
              {renderSkillCard(crossPlatformStack, t('skillsExpertise.crossPlatform'), crossPlatformStack.icon)}
            </div>

            {/* Leadership & Methodology card */}
            <div className="skills-grid-item">
              {renderSkillCard(leadershipStack, t('skillsExpertise.leadership'), leadershipStack.icon)}
            </div>

            {/* Coding Philosophy card */}
            <div className="skills-grid-item">
              {renderSkillCard(codingPhilosophyStack, t('skillsExpertise.philosophy'), codingPhilosophyStack.icon)}
            </div>

            {/* App Publishing & Distribution card */}
            <div className="skills-grid-item">
              {renderSkillCard(appPublishingStack, t('skillsExpertise.appPublishing'), appPublishingStack.icon)}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
